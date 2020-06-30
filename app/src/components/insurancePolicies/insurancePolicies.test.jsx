import React from 'react';
import { mount } from 'enzyme';

import { INITIAL_POLICIES } from '../../constants/constants';
import InsurancePolicies, { BASE } from './insurancePolicies';
import PolicyItem from '../policyItem/policyItem';

describe('<InsurancePolicies>', () => {
  let wrapper;
  const testTitle = 'Test title';
  const getItemSpy = jest.spyOn(Storage.prototype, 'getItem');
  const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');

  beforeEach(() => {
    wrapper = mount(<InsurancePolicies title={testTitle} />);
  });

  afterEach(() => {
    global.localStorage.clear();
  });

  it('should render', () => {
    expect(wrapper.find(InsurancePolicies)).toHaveLength(1);
  });

  it('should render title component', () => {
    expect(wrapper.find(`.${BASE}__title`).text()).toBe(testTitle);
  });

  it('should try to read policy data from local storage', () => {
    expect(getItemSpy).toBeCalled();
  });

  it('should store initial policy data in local storage, if local storage not populated', () => {
    const storage = JSON.stringify(INITIAL_POLICIES);
    expect(setItemSpy).toBeCalledWith('policies', storage);
    expect(global.localStorage.getItem('policies')).toBe(storage);
  });

  it('should store new policy data in local storage on PolicyItem input change', () => {
    const _input = wrapper.find('.policy-item__text__notes').at(0);
    const newText = 'New Text';
    const newPolicies = [...INITIAL_POLICIES];
    newPolicies[0].notes = newText;
    const storage = JSON.stringify(newPolicies);

    _input.simulate('change', { target: { value: newText } });

    expect(setItemSpy).toBeCalledWith('policies', storage);
    expect(global.localStorage.getItem('policies')).toBe(storage);
  });

  it('should render <PolicyItem> component from initial data, if local storage not populated', () => {
    expect(wrapper.find(PolicyItem)).toHaveLength(INITIAL_POLICIES.length);
    INITIAL_POLICIES.forEach((policy, index) =>
      expect(wrapper.find(PolicyItem).at(index).props().policy).toStrictEqual(
        policy,
      ),
    );
  });

  it('should render <PolicyItem> component from storage data, if local storage populated', () => {
    const testPolicies = INITIAL_POLICIES.slice(1, 3);
    global.localStorage.setItem('policies', JSON.stringify(testPolicies));
    wrapper = mount(<InsurancePolicies title={testTitle} />);

    expect(wrapper.find(PolicyItem)).toHaveLength(testPolicies.length);
    testPolicies.forEach((policy, index) =>
      expect(wrapper.find(PolicyItem).at(index).props().policy).toStrictEqual(
        policy,
      ),
    );
  });
});
