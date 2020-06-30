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
    expect(_text.find('input').at(0).props().value).toBe(policy.title);
    expect(_text.find('input').at(1).props().value).toBe(policy.notes);
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

  it('should update title input and call passed down onPolicyChange on input change', () => {
    const _input = wrapper.find(`.${BASE}__text__title`);
    const newTitle = 'New Text';
    const newPolicy = {
      icon: policy.icon,
      notes: policy.notes,
      period: policy.period,
      status: policy.status,
      title: newTitle,
    };
    _input.simulate('change', { target: { value: newTitle } });
    expect(onPolicyChange).toHaveBeenCalledWith(index, newPolicy);
    expect(wrapper.find(`.${BASE}__text__title`).props().value).toBe(newTitle);
  });

  it('should update notes input and call passed down onPolicyChange on input change', () => {
    const _input = wrapper.find(`.${BASE}__text__notes`);
    const newNotes = 'New Text';
    const newPolicy = {
      icon: policy.icon,
      notes: newNotes,
      period: policy.period,
      status: policy.status,
      title: policy.title,
    };
    _input.simulate('change', { target: { value: newNotes } });
    expect(onPolicyChange).toHaveBeenCalledWith(index, newPolicy);
    expect(wrapper.find(`.${BASE}__text__notes`).props().value).toBe(newNotes);
  });
});
