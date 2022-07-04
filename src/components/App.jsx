import React, { useState } from 'react';
import Header from './Header/Header';
import Drawer from './Drawer/Drawer';
import Home from '../pages/Home';
import { Wrapper, Main } from './App.styled';

export const App = () => {
  const [searchInput, setSearchInput] = useState('');
  const [cartOpen, setCartOpen] = useState(false);

  const onChangeSearchInput = e => {
    setSearchInput(e.target.value);
  };

  return (
    <Wrapper>
      <Header onOpenCartClick={() => setCartOpen(true)} />
      {cartOpen && <Drawer onClose={() => setCartOpen(false)} />}
      <Main>
        <Home
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          onChangeSearchInput={onChangeSearchInput}
        />
      </Main>
    </Wrapper>
  );
};
