import React from 'react';
import className from 'classnames';

import './claims.scss';

export const BASE = 'claims';

const Claims = () => {
  return (
    <div className={className(BASE, 'if', 'grid', 'wide')}>
      <div className={className('if', 'row')}>
        <div
          className={className(
            `${BASE}__items`,
            'if',
            'col-6--xs',
            'color',
            'lightestBeige',
            'secondary',
          )}
        >
          <h2>Claims</h2>
        </div>
        <div
          className={className(
            `${BASE}__ad`,
            'if',
            'col-6--xs',
            'color',
            'beige',
            'secondary',
          )}
        >
          <h2>Ad</h2>
        </div>
      </div>
    </div>
  );
};

export default Claims;
