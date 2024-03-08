import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import handleIsFavorite from "../../Helpers/handleIsFavorite";
import {
  addFavorite,
  removeFavorite,
} from "../../redux/Catalogue/catalogueSlice";
import icons from "../../Images/icons.svg";
import { Button } from "../UI/Button.styled";
import {
  FavoriteBtn,
  FavoriteIcon,
  Image,
  List,
  ListItem,
  Tag,
  TagsList,
  Title,
  TitleContainer,
  TitleSpan,
} from "../CatalogueComponents/CatalogueList/CatalogueList.styled";
import { selectFavorite } from "../../redux/Catalogue/selectors";

const Favorite = () => {
  const favorites = useSelector(selectFavorite);
  const dispatch = useDispatch();

  const handleFavoriteClick = (item) => {
    const isFavorite = handleIsFavorite(favorites, item);
    isFavorite ? dispatch(removeFavorite(item)) : dispatch(addFavorite(item));
  };

  return (
    <List>
      {favorites.length !== 0 ? (
        favorites.map((item) => (
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
              <Tag>
                {[
                  item.address.split(",").splice(1, 2).join(" | "),
                  item.rentalCompany,
                  item.accessories[2],
                  item.type,
                  item.model,
                  item.id,
                  item.functionalities[0],
                ]
                  .filter((tag) => !!tag)
                  .join(" | ")}
              </Tag>
            </TagsList>
            <Button>Learn more</Button>
          </ListItem>
        ))
      ) : (
        <div>No Favorites Found</div>
      )}
    </List>
  );
};

export default Favorite;
