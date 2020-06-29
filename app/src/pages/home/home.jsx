import React from 'react';
import className from 'classnames';
// import ReactImage from '../../../public/img/react.png';

import Header from '../../components/header/header';
import InsurancePolicies from '../../components/insurancePolicies/insurancePolicies';
import Claims from '../../components/claims/claims';

const Home = () => {
  return (
    <>
      <Header />
      <main className={className('if', 'main')}>
        <InsurancePolicies title="Insurance Policies" />
        <Claims />
      </main>
    </>
  );
};

export default Home;
