import React from 'react';
// import ReactImage from '../../../public/img/react.png';

import Header from '../../header/header';
import InsurancePolicies from '../../insurancePolicies/insurancePolicies';
import Claims from '../../claims/claims';

const Home = () => {
  return (
    <>
      <Header />
      <main className="if main">
        <InsurancePolicies />
        <Claims />
      </main>
    </>
  );
};

export default Home;
