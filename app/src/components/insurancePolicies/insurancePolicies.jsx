import React, { useState, useEffect } from 'react';
import className from 'classnames';

import PolicyItem from '../policyItem/policyItem';
import { INITIAL_POLICIES, POLICIES } from '../../constants/constants';

import './insurancePolicies.scss';

const BASE = 'insurance-policies';

const InsurancePolicies = () => {
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
    setPolicies(newPolicies);
  };

  return (
    <div
      className={className('if', 'block', 'color', 'lighterBeige', 'secondary')}
    >
      <div className={className(BASE, 'if', 'grid', 'wide')}>
        <h2 className={className(`${BASE}__title`, 'if', 'heading', 'medium')}>
          Insurance Policies
        </h2>
        {policies.map((policy, index) => (
          <PolicyItem
            key={policy.title}
            index={index}
            icon={policy.icon}
            title={policy.title}
            notes={policy.notes}
            date={policy.date}
            status={policy.status}
            onPolicyChange={onPolicyChange}
          />
        ))}
        <div className={className(`${BASE}__see-more`, 'if', 'row')}>
          <a href="." className="if">
            See 2 more
          </a>
        </div>
      </div>
    </div>
  );
};

export default InsurancePolicies;
