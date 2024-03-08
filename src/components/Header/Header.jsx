import {
  HeaderWrapper,
  Navigation,
  List,
  ListItem,
  StyledNavLink,
  StyledLogo,
} from "./Header.styled";
// import icons from "../../images/icons.svg";
const Header = () => {
  return (
    <HeaderWrapper>
      <Navigation>
        <StyledLogo to="/">
          {/* <svg width={40} height={40}>
            <use href={icons + "#carKey"} />
          </svg> */}
          Rent-Cars
        </StyledLogo>
        <List>
          <ListItem>
            <StyledNavLink to="catalogue">Catalogue</StyledNavLink>
          </ListItem>
          <ListItem>
            <StyledNavLink to="favorites">Favorites</StyledNavLink>
          </ListItem>
        </List>
      </Navigation>
    </HeaderWrapper>
  );
};

export default Header;
