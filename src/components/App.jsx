import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header/Header';
import Drawer from './Drawer/Drawer';
import Home from '../pages/Home';
import { Wrapper, Main } from './App.styled';

export const App = () => {
  const [searchInput, setSearchInput] = useState('');
  const [cartOpen, setCartOpen] = useState(false);
  const [item, setItem] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const onChangeSearchInput = e => {
    setSearchInput(e.target.value);
  };

  React.useEffect(() => {
    axios.get('https://62b034b1b0a980a2ef4d39ed.mockapi.io/item').then(res => {
      setItem(res.data);
    });

    axios.get('https://62b034b1b0a980a2ef4d39ed.mockapi.io/cart').then(res => {
      setCartItem(res.data);
    });
    axios
      .get('https://62b034b1b0a980a2ef4d39ed.mockapi.io/favorite')
      .then(res => {
        setFavorites(res.data);
      });
  }, []);

  const onAddCart = obj => {
    axios.post('https://62b034b1b0a980a2ef4d39ed.mockapi.io/cart', obj);
    setCartItem(prev => [...prev, obj]);
  };

  const onAddToFavorite = async obj => {
    try {
      if (favorites.find(item => obj.id === item.id)) {
        axios.delete(
          `https://62b034b1b0a980a2ef4d39ed.mockapi.io/favorite/${obj.id}`
        );
      } else {
        const { data } = await axios.post(
          `https://62b034b1b0a980a2ef4d39ed.mockapi.io/favorite`,
          obj
        );
        setFavorites(prev => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить фавориты');
    }
  };

  const onRemoveCart = id => {
    axios.delete(`https://62b034b1b0a980a2ef4d39ed.mockapi.io/cart/${id}`);
    setCartItem(prev => prev.filter(item => item.id !== id));
  };

  return (
    <Wrapper>
      <Header onOpenCartClick={() => setCartOpen(true)} />
      {cartOpen && (
        <Drawer
          onClose={() => setCartOpen(false)}
          item={cartItem}
          onRemove={onRemoveCart}
        />
      )}
      <Main>
        <Home
          item={item}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          onChangeSearchInput={onChangeSearchInput}
          onAddToFavorite={onAddToFavorite}
          onAddCart={onAddCart}
        />
      </Main>
    </Wrapper>
  );
};
