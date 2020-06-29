import React from 'react';
import { mount } from 'enzyme';
import ActionButton, { BASE } from './actionButton';
import { POLICY_STATUS } from '../../constants/constants';

const { ACTIVE, UNPAID, ENDING_SOON } = POLICY_STATUS;

describe('<ActionButton>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<ActionButton />);
  });

  it('should render', () => {
    expect(wrapper.find(ActionButton)).toHaveLength(1);
  });

  it(`should default to the ${ACTIVE} settings if status prop is NOT provided`, () => {
    expect(wrapper.find('span').at(0).text()).toBe('Fill a claim');
  });

  it(`should have the correct text and NO modifier if the status prop is ${ACTIVE}`, () => {
    wrapper.setProps({ status: ACTIVE });
    expect(wrapper.find('span').at(0).text()).toBe('Fill a claim');
  });

  it(`should have the correct text and modifier if the status prop is ${UNPAID}`, () => {
    wrapper.setProps({ status: UNPAID });
    expect(wrapper.find('span').at(0).text()).toBe('Pay 24.47€');
    expect(wrapper.find('span').at(0).hasClass(`${BASE}__text--unpaid`)).toBe(
      true,
    );
    expect(wrapper.find('button').hasClass(`${BASE}--unpaid`)).toBe(true);
  });

  it(`should have the correct text and NO modifier if the status prop is ${ENDING_SOON}`, () => {
    wrapper.setProps({ status: ENDING_SOON });
    expect(wrapper.find('span').at(0).text()).toBe('Renew');
  });
});
