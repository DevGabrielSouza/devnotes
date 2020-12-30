import React from 'react';

import GlobalStyle from './styles/global';

// Components

import Header from './components/Header';
import Board from './components/Board/index';

function App() {
  return (
    <>
      <Header/>
      <Board/>
      <GlobalStyle/>
    </>
  );
}

export default App;
