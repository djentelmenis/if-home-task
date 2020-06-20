import { hot } from 'react-hot-loader/root';
import React from 'react';

import Home from './components/pages/home/home';

import '../public/styles/global.scss';

const App = () => {
  return (
    <>
      <Home />
    </>
  );
};

export default hot(App);
