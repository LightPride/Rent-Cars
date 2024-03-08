import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../../redux/Catalogue/operations";
import {
  selectCars,
  selectError,
  selectFavorite,
  selectIsLoading,
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
  const [page] = useState(1);
  const [limit, setLimit] = useState(12);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars(page));
  }, [dispatch, page]);

  const data = useSelector(selectCars);

  const error = useSelector(selectError);

  const isLoading = useSelector(selectIsLoading);

  const favorites = useSelector(selectFavorite);

  const handleFavoriteClick = (item) => {
    const isFavorite = handleIsFavorite(favorites, item);
    if (isFavorite) {
      dispatch(removeFavorite(item));
      return;
    }
    dispatch(addFavorite(item));
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
        {isLoading ? (
          // <Loader />
          <div>Loading...</div>
        ) : (
          data.map((item) => (
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
          ))
        )}
        {data?.totalCount > limit && (
          <Button
            type="button"
            onClick={() => setLimit((prevLimit) => prevLimit + 12)}
          >
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
      <img
        src="https://gifdb.com/images/high/stationary-rat-vertical-spin-0jmp9hxvxz4p24ms.gif"
        alt=""
      />
    </>
  );
};

export default CatalogueList;
