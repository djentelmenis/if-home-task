import React from 'react';
import className from 'classnames';

import './insurancePolicies.scss';

const BASE = 'insurance-policies';

const InsurancePolicies = () => {
  return (
    <div
      className={className('if', 'block', 'color', 'lighterBeige', 'secondary')}
    >
      <div className={className(BASE, 'if', 'grid', 'fluid')}>
        <div className={className(`${BASE}__item`, 'if', 'row')}>
          <div className={className('if', 'col-12--xs')}>
            <h2>InsurancePolicies</h2>
          </div>
        </div>
        {/* <button className="if button secondary" type="button">
        <span className="if icon ui edit blue" />
        Button with icon
      </button> */}
      </div>
    </div>
  );
};

export default InsurancePolicies;
