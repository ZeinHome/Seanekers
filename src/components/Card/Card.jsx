import React, { useContext, useState } from 'react';
import { AppContext } from '../App';
import ContentLoader from 'react-content-loader';
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
  loading,
  noChangeFavoried = true,
}) {
  const { hasCartItem } = useContext(AppContext);
  const [isFavorite, setIsFavorite] = useState(favoried);
  const obj = { title, price, imageUrl, id, parentId: id };

  function onAddClick() {
    onAdd(obj);
  }

  function onFavoriteClick() {
    onFavorite(obj);
    if (noChangeFavoried) {
      setIsFavorite(!isFavorite);
    }
  }

  return (
    <GalleryItem>
      {loading ? (
        <ContentLoader
          speed={2}
          width={155}
          height={250}
          viewBox="0 0 155 255"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="155" height="155" />
          <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
          <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
          <rect x="8" y="229" rx="5" ry="5" width="80" height="25" />
          <rect x="120" y="225" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          {onFavorite && (
            <ButtonFavorite
              onClick={onFavoriteClick}
              src={isFavorite ? like : unlike}
              alt={isFavorite ? 'unlike' : 'like'}
            />
          )}
          <CardContainer>
            <img width={133} height={112} src={imageUrl} alt="title" />
            <GalleryTitle>{title}</GalleryTitle>
            <CardMenu>
              <div>
                <PriceText>Цена:</PriceText>
                <PriceTotal>{price} грн.</PriceTotal>
              </div>
              {onAdd && (
                <ButtonAdd
                  onClick={onAddClick}
                  src={hasCartItem(id) ? done : add}
                  alt={hasCartItem(id) ? 'done' : 'add'}
                />
              )}
            </CardMenu>
          </CardContainer>
        </>
      )}
    </GalleryItem>
  );
}

export default Card;
