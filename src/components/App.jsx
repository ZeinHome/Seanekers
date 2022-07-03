import React, { useState } from 'react';
import Header from './Header/Header';
import Home from '../pages/Home';
import { Wrapper, Main } from './App.styled';

export const App = () => {
  const [searchInput, setSearchInput] = useState('');

  const onChangeSearchInput = e => {
    setSearchInput(e.target.value);
  };

  return (
    <Wrapper>
      <Header />
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
