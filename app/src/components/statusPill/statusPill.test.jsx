import React from 'react';
import { mount } from 'enzyme';
import StatusPill, { BASE } from './statusPill';
import { POLICY_STATUS } from '../../constants/constants';

const { ACTIVE, UNPAID, ENDING_SOON } = POLICY_STATUS;

describe('StatusPill', () => {
  it('should render', () => {
    const statusPill = mount(<StatusPill />);
    expect(statusPill.find(StatusPill)).toHaveLength(1);
  });

  it(`should default to the ${ACTIVE} settings if status prop is NOT provided`, () => {
    const statusPill = mount(<StatusPill />);
    expect(statusPill.find('span').text()).toBe('Active');
    expect(statusPill.find('span').hasClass(`${BASE}--active`));
  });

  it(`should have the correct text and modifier if the status prop is ${ACTIVE}`, () => {
    const statusPill = mount(<StatusPill status={ACTIVE} />);
    expect(statusPill.find('span').text()).toBe('Active');
    expect(statusPill.find('span').hasClass(`${BASE}--active`));
  });

  it(`should have the correct text and modifier if the status prop is ${UNPAID}`, () => {
    const statusPill = mount(<StatusPill status={UNPAID} />);
    expect(statusPill.find('span').text()).toBe('Unpaid');
    expect(statusPill.find('span').hasClass(`${BASE}--unpaid`));
  });

  it(`should have the correct text and modifier if the status prop is ${ENDING_SOON}`, () => {
    const statusPill = mount(<StatusPill status={ENDING_SOON} />);
    expect(statusPill.find('span').text()).toBe('Ending soon');
    expect(statusPill.find('span').hasClass(`${BASE}--ending`));
  });
});
