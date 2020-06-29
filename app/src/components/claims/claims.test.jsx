import React from 'react';
import { mount } from 'enzyme';

import Claims, { BASE } from './claims';

describe('<Claims>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Claims />);
  });

  it('should render', () => {
    expect(wrapper.find(Claims)).toHaveLength(1);
  });

  it('should render items block', () => {
    expect(wrapper.find(`.${BASE}__items`)).toHaveLength(1);
  });

  it('should render ad block', () => {
    expect(wrapper.find(`.${BASE}__ad`)).toHaveLength(1);
  });
});
