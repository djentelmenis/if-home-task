import React from 'react';
import { mount } from 'enzyme';
import StatusPill, { BASE } from './statusPill';
import { POLICY_STATUS } from '../../constants/constants';

const { ACTIVE, UNPAID, ENDING_SOON } = POLICY_STATUS;

describe('<StatusPill>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<StatusPill />);
  });

  it('should render', () => {
    expect(wrapper.find(StatusPill)).toHaveLength(1);
  });

  it(`should default to the ${ACTIVE} settings if status prop is NOT provided`, () => {
    expect(wrapper.find('span').text()).toBe('Active');
    expect(wrapper.find('span').hasClass(`${BASE}__text--active`)).toBe(true);
    expect(wrapper.find('div').hasClass(`${BASE}--active`)).toBe(true);
  });

  it(`should have the correct text and modifier if the status prop is ${ACTIVE}`, () => {
    wrapper.setProps({ status: ACTIVE });
    expect(wrapper.find('span').text()).toBe('Active');
    expect(wrapper.find('span').hasClass(`${BASE}__text--active`));
    expect(wrapper.find('div').hasClass(`${BASE}--active`));
  });

  it(`should have the correct text and modifier if the status prop is ${UNPAID}`, () => {
    wrapper.setProps({ status: UNPAID });
    expect(wrapper.find('span').text()).toBe('Unpaid');
    expect(wrapper.find('span').hasClass(`${BASE}__text--unpaid`)).toBe(true);
    expect(wrapper.find('div').hasClass(`${BASE}--unpaid`)).toBe(true);
  });

  it(`should have the correct text and modifier if the status prop is ${ENDING_SOON}`, () => {
    wrapper.setProps({ status: ENDING_SOON });
    expect(wrapper.find('span').text()).toBe('Ending soon');
    expect(wrapper.find('span').hasClass(`${BASE}__text--ending`)).toBe(true);
    expect(wrapper.find('div').hasClass(`${BASE}--ending`)).toBe(true);
  });
});
