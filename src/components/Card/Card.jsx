import React from 'react';
import like from '../images/favorite/btn-like.svg';
import unlike from '../images/favorite/btn-unlike.svg';
import add from '../images/card/btn-add.svg';
import done from '../images/card/btn-done.svg';
import {
  GalleryItem,
  ButtonFavorite,
  CardContainer,
  GalleryTitle,
  CardMenu,
  PriceText,
  PriceTotal,
  ButtonAdd,
} from './Card.styled';

function Card({
  title,
  price,
  imageUrl,
  id,
  onAdd,
  onFavorite,
  favoried = false,
}) {
  const [isAdded, setIsAdded] = React.useState('false');
  const [isFavorite, setIsFavorite] = React.useState(favoried);

  function onAddClick() {
    onAdd({ title, price, imageUrl, id });
    setIsAdded(!isAdded);
  }

  function onFavoriteClick() {
    onFavorite({ title, price, imageUrl, id });
    setIsFavorite(!isFavorite);
  }

  return (
    <GalleryItem>
      <ButtonFavorite
        onClick={onFavoriteClick}
        src={isFavorite ? like : unlike}
        alt={isFavorite ? 'unlike' : 'like'}
      />
      <CardContainer>
        <img width={133} height={112} src={imageUrl} alt="title" />
        <GalleryTitle>{title}</GalleryTitle>
        <CardMenu>
          <div>
            <PriceText>Цена:</PriceText>
            <PriceTotal>{price} грн.</PriceTotal>
          </div>
          <ButtonAdd
            onClick={onAddClick}
            src={isAdded ? add : done}
            alt={isAdded ? 'add' : 'done'}
          />
        </CardMenu>
      </CardContainer>
    </GalleryItem>
  );
}

export default Card;
