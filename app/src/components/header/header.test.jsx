import React from 'react';
import { mount } from 'enzyme';

import Header, { BASE } from './header';

describe('<Header>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Header />);
  });

  it('should render', () => {
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it('should render language button', () => {
    expect(wrapper.find(`.${BASE}__lang-bar__button`)).toHaveLength(1);
  });

  it('should render navigation bar', () => {
    expect(wrapper.find(`.${BASE}__nav-bar`)).toHaveLength(1);
  });
});
