import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars, fetchLoadMore } from "../../../redux/Catalogue/operations";
import {
  selectCars,
  selectError,
  selectFavorite,
} from "../../../redux/Catalogue/selectors";
import { nanoid } from "nanoid";
import icons from "../../../Images/icons.svg";
import {
  List,
  ListItem,
  FavoriteBtn,
  FavoriteIcon,
  TitleContainer,
  TitleSpan,
  Image,
  Title,
  TagsList,
  Tag,
} from "./CatalogueList.styled";
import LearnMoreContent from "../LearnMoreContent/LearnMoreContent";
import { Button } from "../../UI/Button.styled";
import Modal from "../../UI/Modal/Modal";
import {
  addFavorite,
  removeFavorite,
} from "../../../redux/Catalogue/catalogueSlice";
import handleIsFavorite from "../../../Helpers/handleIsFavorite";

const CatalogueList = () => {
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const dispatch = useDispatch();
  const { filteredCatalogue } = useSelector((state) => state.catalogue);
  const data = useSelector(selectCars);
  const error = useSelector(selectError);
  const favorites = useSelector(selectFavorite);
  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const handleFavoriteClick = (item) => {
    const isFavorite = handleIsFavorite(favorites, item);
    if (isFavorite) {
      dispatch(removeFavorite(item));
      return;
    }
    dispatch(addFavorite(item));
  };

  const onLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
    dispatch(fetchLoadMore(page));
  };

  const tagsList = ({
    address,
    rentalCompany,
    accessories,
    type,
    model,
    id,
    functionalities,
  }) => {
    return [
      address.split(",").splice(1, 2).join(" | "),
      rentalCompany,
      accessories[2],
      type,
      model,
      id,
      functionalities[0],
    ]
      .filter((tag) => !!tag)
      .join(" | ");
  };

  return (
    <>
      <List>
        {error && <div>{error}</div>}
        {(filteredCatalogue.length ? filteredCatalogue : data).map((item) => (
          <ListItem key={nanoid()} id={item.id}>
            <Image src={item.img} />
            <FavoriteBtn
              type="button"
              onClick={() => handleFavoriteClick(item)}
            >
              <FavoriteIcon
                isFavorite={handleIsFavorite(favorites, item)}
                width={18}
                height={18}
              >
                <use href={icons + "#heart"} />
              </FavoriteIcon>
            </FavoriteBtn>
            <TitleContainer>
              <Title>
                {item.make} <TitleSpan>{item.model}</TitleSpan>, {item.year}
              </Title>
              <Title>{item.rentalPrice}</Title>
            </TitleContainer>
            <TagsList>
              <Tag>{tagsList(item)}</Tag>
            </TagsList>
            <Button
              type="button"
              onClick={() => {
                setModalData(item);
                setShowModal(!showModal);
              }}
            >
              Learn more
            </Button>
          </ListItem>
        ))}
        {data?.length % 12 === 0 && (
          <Button type="button" onClick={() => onLoadMore()}>
            Load more
          </Button>
        )}
        {showModal && (
          <Modal
            onClose={() => {
              setShowModal(false);
            }}
            showModal={showModal}
          >
            <LearnMoreContent
              data={modalData}
              onCrossClick={() => {
                setShowModal(false);
              }}
            />
          </Modal>
        )}
      </List>
    </>
  );
};

export default CatalogueList;
