import React from 'react';
import { mount } from 'enzyme';
import PolicyItem, { BASE } from './policyItem';
import StatusPill from '../statusPill/statusPill';
import ActionButton from '../actionButton/actionButton';
import { INITIAL_POLICIES } from '../../constants/constants';

describe('<PolicyItem>', () => {
  let wrapper;
  const index = 0;
  const policy = INITIAL_POLICIES[index];
  const onPolicyChange = jest.fn();

  beforeEach(() => {
    wrapper = mount(
      <PolicyItem
        index={index}
        policy={policy}
        onPolicyChange={onPolicyChange}
      />,
    );
  });

  it('should render', () => {
    expect(wrapper.find(PolicyItem)).toHaveLength(1);
  });

  it('should render icon block with correct class', () => {
    const _icon = wrapper.find(`.${BASE}__icon`);
    expect(_icon).toHaveLength(1);
    expect(_icon.find('i').hasClass(policy.icon)).toBe(true);
  });

  it('should render text block with correct text', () => {
    const _text = wrapper.find(`.${BASE}__text`);
    expect(_text).toHaveLength(1);
    expect(_text.find('h4').text()).toBe(policy.title);
    expect(_text.find('input').props().value).toBe(policy.notes);
  });

  it('should render period block with correct text', () => {
    const _period = wrapper.find(`.${BASE}__period`);
    expect(_period).toHaveLength(1);
    expect(_period.find('span').text()).toBe(policy.period);
  });

  it('should render <StatusPill> block with correct props', () => {
    const _statusPill = wrapper.find(StatusPill);
    expect(_statusPill).toHaveLength(1);
    expect(_statusPill.props()).toStrictEqual({
      status: policy.status,
    });
  });

  it('should render <ActionButton> block with correct props', () => {
    const _actionButton = wrapper.find(ActionButton);
    expect(_actionButton).toHaveLength(1);
    expect(_actionButton.props()).toStrictEqual({
      status: policy.status,
    });
  });

  it('should call passed down onPolicyChange on input change', () => {
    const _input = wrapper.find('input');
    const newText = 'New Text';
    const newPolicy = {
      icon: policy.icon,
      notes: newText,
      period: policy.period,
      status: policy.status,
      title: policy.title,
    };
    _input.simulate('change', { target: { value: newText } });
    expect(onPolicyChange).toHaveBeenCalledWith(index, newPolicy);
  });
});
