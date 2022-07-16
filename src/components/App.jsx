import React, { useState, useEffect, createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Header from './Header/Header';
import Drawer from './Drawer/Drawer';
import Home from '../pages/Home';
import Favorites from '../pages/Favorites';
import { Wrapper, Main } from './App.styled';

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
      const cartResponse = await axios.get(
        'https://62b034b1b0a980a2ef4d39ed.mockapi.io/cart'
      );
      const favoritesResponse = await axios.get(
        'https://62b034b1b0a980a2ef4d39ed.mockapi.io/favorite'
      );
      const itemResponse = await axios.get(
        'https://62b034b1b0a980a2ef4d39ed.mockapi.io/item'
      );

      setIsLoading(false);
      setCartItem(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setItem(itemResponse.data);
    }
    fetchData();
  }, []);

  const onChangeSearchInput = e => {
    setSearchInput(e.target.value);
  };

  const onAddCart = obj => {
    if (cartItem.find(item => Number(item.id) === Number(obj.id))) {
      axios.delete(
        `https://62b034b1b0a980a2ef4d39ed.mockapi.io/cart/${obj.id}`
      );
      setCartItem(prev =>
        prev.filter(item => Number(item.id) !== Number(obj.id))
      );
    } else {
      axios.post('https://62b034b1b0a980a2ef4d39ed.mockapi.io/cart', obj);
      setCartItem(prev => [...prev, obj]);
    }
  };

  const onRemoveCart = id => {
    axios.delete(`https://62b034b1b0a980a2ef4d39ed.mockapi.io/cart/${id}`);
    setCartItem(prev => prev.filter(item => item.id !== id));
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
    return cartItem.some(obj => Number(obj.id) === Number(id));
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
        }}
      >
        <Header onOpenCartClick={() => setCartOpen(true)} />
        {cartOpen && (
          <Drawer
            onClose={() => setCartOpen(false)}
            item={cartItem}
            onRemove={onRemoveCart}
          />
        )}
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
          </Routes>
        </Main>
      </AppContext.Provider>
    </Wrapper>
  );
};
