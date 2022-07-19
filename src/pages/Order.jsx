import back from '../components/images/favorite/back.svg';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '../components/Card/Card';
import { Link } from 'react-router-dom';
import { Gallery, FavoritesTitle, FavoritesBack } from './Home.styled';

function Order() {
  const [orders, setOrders] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(
          `https://62b034b1b0a980a2ef4d39ed.mockapi.io/orders`
        );
        setOrders(data.map(obj => obj.items).flat());
      } catch (error) {
        alert('Error');
      }
    }
    fetchData();
  }, []);

  return (
    <section>
      <div>
        <Link to="/Seanekers">
          <FavoritesTitle>
            {' '}
            <FavoritesBack src={back} alt="back" /> Мои заказы
          </FavoritesTitle>
        </Link>
      </div>

      <Gallery>
        {orders &&
          orders.map((items, id) => {
            return <Card key={id} {...items} />;
          })}
      </Gallery>
    </section>
  );
}

export default Order;
