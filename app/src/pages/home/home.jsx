import React from 'react';
import className from 'classnames';

import Header from '../../components/header/header';
import InsurancePolicies from '../../components/insurancePolicies/insurancePolicies';
import Claims from '../../components/claims/claims';

const Home = () => {
  const blockClasses = ['if', 'block', 'color', 'lighterBeige', 'secondary'];

  return (
    <>
      <Header />
      <main className={className('if', 'main')}>
        <div className={className(...blockClasses)}>
          <InsurancePolicies title="Insurance Policies" />
        </div>
        <div className={className(...blockClasses)}>
          <Claims />
        </div>
      </main>
    </>
  );
};

export default Home;
