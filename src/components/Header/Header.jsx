import basket from '../images/header/basket.svg';
import heart from '../images/header/heart.svg';
import user from '../images/header/user.svg';
import logo from '../images/header/logo.svg';
import {
  HeaderSite,
  HeaderContainer,
  Logo,
  HeaderTitle,
  ProjectTitle,
  HeaderText,
  Users,
  UsersItem,
  Basket,
  BasketText,
} from './Header.styled';

function Header({ onOpenCartClick }) {
  return (
    <HeaderSite>
      <HeaderContainer>
        <Logo>
          <img src={logo} alt="logo" />
          <HeaderTitle>
            <ProjectTitle>REACT SNEAKERS</ProjectTitle>
            <HeaderText>Магазин лучших кроссовок</HeaderText>
          </HeaderTitle>
        </Logo>

        <Users>
          <UsersItem onClick={onOpenCartClick}>
            <Basket>
              <img width={18} height={18} src={basket} alt="basket" />
              <BasketText> 1205 грн.</BasketText>
            </Basket>
          </UsersItem>

          <UsersItem>
            <img width={20} height={20} src={heart} alt="heart" />
          </UsersItem>

          <UsersItem>
            <img width={20} height={20} src={user} alt="user" />
          </UsersItem>
        </Users>
      </HeaderContainer>
    </HeaderSite>
  );
}

export default Header;
