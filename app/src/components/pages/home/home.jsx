import React from 'react';
// import ReactImage from '../../../public/img/react.png';

import InsurancePolicies from '../../insurancePolicies/insurancePolicies';

import './home.scss';

const Home = () => {
  return (
    <>
      <header className="if global header color lighterBeige secondary">
        <div className="if grid fluid">
          <div className="if row lang-bar">
            <div className="if col-12--xs col-2--sm color darkBeige secondary center-content">
              <h5>Language</h5>
            </div>
          </div>
        </div>
        <div className="if row color lightestBeige secondary center-content navbar">
          <h2>Navbar</h2>
        </div>
      </header>
      <main className="if main">
        <InsurancePolicies />
        {/* Move to component */}
        <div className="if block claims color lighterBeige secondary">
          <div className="if grid fluid">
            <div className="if row">
              <div className="if col-6--xs color lightestBeige secondary center-content">
                <h2>Claims</h2>
              </div>
              <div className="if col-6--xs color beige secondary center-content">
                <h2>Ad</h2>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
