/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import CurrencyApp from './pages/CurrencyApp/CurrencyApp';
import TicTacToe from './pages/TicTacToe/TicTacToe';
import HeyMusic from './pages/HeyMusic/HeyMusic';

const App = (): JSX.Element => {
  return (
    <>
      {/* <TicTacToe /> */}
      <CurrencyApp />
      {/* <HeyMusic /> */}
    </>
  );
};
export default App;
