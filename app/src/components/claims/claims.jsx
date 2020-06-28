import React from 'react';

import './claims.scss';

const Claims = () => {
  return (
    <div className="if block color lighterBeige secondary">
      <div className="if grid fluid claims">
        <div className="if row">
          <div className="if col-6--xs color lightestBeige secondary claims__items">
            <h2>Claims</h2>
          </div>
          <div className="if col-6--xs color beige secondary claims__ad">
            <h2>Ad</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Claims;
