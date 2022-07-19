import { Link } from 'react-router-dom';
import Card from '../components/Card/Card';
import { Gallery, FavoritesTitle, FavoritesBack } from './Home.styled';
import back from '../components/images/favorite/back.svg';
import { useContext } from 'react';
import { AppContext } from '../components/App';

function Favorites() {
  const { favorites, onAddToFavorite, onAddCart } = useContext(AppContext);
  return (
    <section>
      <div>
        <Link to="/Seanekers">
          <FavoritesTitle>
            {' '}
            <FavoritesBack src={back} alt="back" /> Мои закладки
          </FavoritesTitle>
        </Link>
      </div>

      <Gallery>
        {favorites.map((items, id) => {
          return (
            <Card
              key={id}
              favoried={true}
              onFavorite={onAddToFavorite}
              onAdd={obj => onAddCart(obj)}
              {...items}
            />
          );
        })}
      </Gallery>
    </section>
  );
}

export default Favorites;
