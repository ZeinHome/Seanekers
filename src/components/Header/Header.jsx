import basket from '../images/header/basket.svg';
import heart from '../images/header/heart.svg';
import user from '../images/header/user.svg';
import logo from '../images/header/logo.svg';
import { Link } from 'react-router-dom';
import { useCard } from '../../hooks/useCard';
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
  const { totalPrice } = useCard();
  return (
    <HeaderSite>
      <HeaderContainer>
        <Link to="/Seanekers">
          <Logo>
            <img src={logo} alt="logo" />
            <HeaderTitle>
              <ProjectTitle>REACT SNEAKERS</ProjectTitle>
              <HeaderText>Магазин лучших кроссовок</HeaderText>
            </HeaderTitle>
          </Logo>
        </Link>

        <Users>
          <UsersItem onClick={onOpenCartClick}>
            <Basket>
              <img width={18} height={18} src={basket} alt="basket" />
              <BasketText> {totalPrice} грн.</BasketText>
            </Basket>
          </UsersItem>

          <UsersItem>
            <Link to="/favorites">
              <img width={20} height={20} src={heart} alt="heart" />
            </Link>
          </UsersItem>

          <UsersItem>
            <Link to="/order">
              <img width={20} height={20} src={user} alt="user" />
            </Link>
          </UsersItem>
        </Users>
      </HeaderContainer>
    </HeaderSite>
  );
}

export default Header;
