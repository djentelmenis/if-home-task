import { hot } from 'react-hot-loader/root';
import React from 'react';

import Home from './pages/home/home';

import '../public/styles/global.scss';

// Add React Router for more pages
const App = () => {
  return (
    <>
      <Home />
    </>
  );
};

export default hot(App);
