import holeBasket from '../images/drawer/hole-basket.png';
import arrow from '../images/drawer/arrow-order.svg';
import {
  HoleBasketContainer,
  HoleBasketTitle,
  HoleBasketText,
  HoleBasketButton,
  HoleBasketImage,
} from './HoleBasket.styled';

function HoleBasket({ onClose }) {
  return (
    <HoleBasketContainer>
      <img src={holeBasket} alt="box" />
      <HoleBasketTitle>Корзина пустая</HoleBasketTitle>
      <HoleBasketText>
        Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
      </HoleBasketText>
      <HoleBasketButton onClick={onClose}>
        {' '}
        <HoleBasketImage src={arrow} alt="arrow" /> Вернуться назад
      </HoleBasketButton>
    </HoleBasketContainer>
  );
}

export default HoleBasket;
