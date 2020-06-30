import React, { useState, useEffect } from 'react';
import { string } from 'prop-types';
import className from 'classnames';

import PolicyItem from '../policyItem/policyItem';
import { INITIAL_POLICIES, POLICIES } from '../../constants/constants';

import './insurancePolicies.scss';

export const BASE = 'insurance-policies';

const InsurancePolicies = ({ title }) => {
  const [policies, setPolicies] = useState([]);

  // TODO move to reusable hook
  useEffect(() => {
    const localPolicies = JSON.parse(localStorage.getItem(POLICIES)) || '';
    if (localPolicies) setPolicies(localPolicies);
    else {
      setPolicies(INITIAL_POLICIES);
      localStorage.setItem(POLICIES, JSON.stringify(INITIAL_POLICIES));
    }
  }, []);

  const onPolicyChange = (index, newPolicy) => {
    const newPolicies = [...policies];
    newPolicies[index] = newPolicy;
    localStorage.setItem(POLICIES, JSON.stringify(newPolicies));
  };

  return (
    <div className={className(BASE, 'if')}>
      <h2 className={className(`${BASE}__title`, 'if', 'heading', 'medium')}>
        {title}
      </h2>
      {policies.map((policy, index) => (
        <PolicyItem
          key={policy.title}
          index={index}
          policy={policy}
          onPolicyChange={onPolicyChange}
        />
      ))}
      <div className={className(`${BASE}__see-more`, 'if')}>
        <a href="." className="if">
          See 2 more
        </a>
      </div>
    </div>
  );
};

InsurancePolicies.defaultProps = {
  title: '',
};

InsurancePolicies.propTypes = {
  title: string,
};

export default InsurancePolicies;
