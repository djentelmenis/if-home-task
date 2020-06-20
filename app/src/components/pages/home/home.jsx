import React from 'react';
// import ReactImage from '../../../public/img/react.png';

import InsurancePolicies from '../../insurancePolicies/insurancePolicies';

import './home.scss';

const Home = () => {
  return (
    <main className="sg if main">
      <div className="stub if container" id="navbar">
        <h2>Navbar</h2>
      </div>
      <InsurancePolicies />
      <div className="if grid">
        <div className="if row">
          <div className="stub if col-6--xs">
            <h2>Claims</h2>
          </div>
          <div className="stub if col-6--xs">
            <h2>Ad</h2>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
