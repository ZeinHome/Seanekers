import arrow from '../images/drawer/arrow-order.svg';
import {
  HoleBasketContainer,
  HoleBasketTitle,
  HoleBasketText,
  HoleBasketButton,
  HoleBasketImage,
} from './HoleBasket.styled';

function HoleBasket({ onClose, title, description, image }) {
  return (
    <HoleBasketContainer>
      <img src={image} alt="box" />
      <HoleBasketTitle>{title}</HoleBasketTitle>
      <HoleBasketText>{description}</HoleBasketText>
      <HoleBasketButton onClick={onClose}>
        {' '}
        <HoleBasketImage src={arrow} alt="arrow" /> Вернуться назад
      </HoleBasketButton>
    </HoleBasketContainer>
  );
}

export default HoleBasket;
