import React, { useState, useEffect, createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Header from './Header/Header';
import Drawer from './Drawer/Drawer';
import Home from '../pages/Home';
import Favorites from '../pages/Favorites';
import { Wrapper, Main } from './App.styled';
import Order from 'pages/Order';

export const AppContext = createContext({});

export const App = () => {
  const [searchInput, setSearchInput] = useState('');
  const [cartOpen, setCartOpen] = useState(false);
  const [item, setItem] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const [cartResponse, favoritesResponse, itemResponse] =
          await Promise.all([
            axios.get('https://62b034b1b0a980a2ef4d39ed.mockapi.io/cart'),
            axios.get('https://62b034b1b0a980a2ef4d39ed.mockapi.io/favorite'),
            axios.get('https://62b034b1b0a980a2ef4d39ed.mockapi.io/item'),
          ]);

        // const cartResponse = await axios.get(
        //   'https://62b034b1b0a980a2ef4d39ed.mockapi.io/cart'
        // );
        // const favoritesResponse = await axios.get(
        //   'https://62b034b1b0a980a2ef4d39ed.mockapi.io/favorite'
        // );
        // const itemResponse = await axios.get(
        //   'https://62b034b1b0a980a2ef4d39ed.mockapi.io/item'
        // );

        setIsLoading(false);
        setCartItem(cartResponse.data);
        setFavorites(favoritesResponse.data);
        setItem(itemResponse.data);
      } catch (error) {
        alert(`${error}`);
      }
    }
    fetchData();
  }, []);

  const onChangeSearchInput = e => {
    setSearchInput(e.target.value);
  };

  const onAddCart = async obj => {
    try {
      const findItem = cartItem.find(
        item => Number(item.parentId) === Number(obj.id)
      );
      if (findItem) {
        setCartItem(prev =>
          prev.filter(item => Number(item.parentId) !== Number(obj.id))
        );
        await axios.delete(
          `https://62b034b1b0a980a2ef4d39ed.mockapi.io/cart/${findItem.id}`
        );
      } else {
        const { data } = await axios.post(
          'https://62b034b1b0a980a2ef4d39ed.mockapi.io/cart',
          obj
        );
        setCartItem(prev => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в корзину');
    }
  };

  const onRemoveCart = async id => {
    try {
      setCartItem(prev => prev.filter(item => Number(item.id) !== Number(id)));
      axios.delete(`https://62b034b1b0a980a2ef4d39ed.mockapi.io/cart/${id}`);
    } catch (error) {
      alert('Не удалось удалить товар');
    }
  };

  const onAddToFavorite = async obj => {
    try {
      if (favorites.find(item => Number(obj.id) === Number(item.id))) {
        axios.delete(
          `https://62b034b1b0a980a2ef4d39ed.mockapi.io/favorite/${obj.id}`
        );
        setFavorites(prev =>
          prev.filter(item => Number(obj.id) !== Number(item.id))
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

  const hasCartItem = id => {
    return cartItem.some(obj => Number(obj.parentId) === Number(id));
  };

  return (
    <Wrapper>
      <AppContext.Provider
        value={{
          cartItem,
          setCartItem,
          favorites,
          hasCartItem,
          onAddToFavorite,
          onAddCart,
        }}
      >
        <Header onOpenCartClick={() => setCartOpen(true)} />
        <Drawer
          onClose={() => setCartOpen(false)}
          item={cartItem}
          onRemove={onRemoveCart}
          isOpened={cartOpen}
        />
        <Main>
          <Routes>
            <Route
              path="/Seanekers"
              element={
                <Home
                  item={item}
                  searchInput={searchInput}
                  setSearchInput={setSearchInput}
                  onChangeSearchInput={onChangeSearchInput}
                  onAddToFavorite={onAddToFavorite}
                  onAddCart={onAddCart}
                  isLoading={isLoading}
                />
              }
            />
            <Route path="favorites" element={<Favorites />} />
            <Route path="order" element={<Order />} />
          </Routes>
        </Main>
      </AppContext.Provider>
    </Wrapper>
  );
};
