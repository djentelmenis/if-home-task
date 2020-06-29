import React from 'react';
import { mount } from 'enzyme';

import Home from './home';
import Header from '../../components/header/header';
import InsurancePolicies from '../../components/insurancePolicies/insurancePolicies';
import Claims from '../../components/claims/claims';

describe('<Home>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Home />);
  });

  it('should render', () => {
    expect(wrapper.find(Home)).toHaveLength(1);
  });

  it('should render <Header> component', () => {
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it('should render <InsurancePolicies> component', () => {
    expect(wrapper.find(InsurancePolicies)).toHaveLength(1);
  });

  it('should render <Claims> component', () => {
    expect(wrapper.find(Claims)).toHaveLength(1);
  });
});
