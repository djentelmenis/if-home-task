import React from 'react';
import { mount } from 'enzyme';

import App from './App';
import Home from './pages/home/home';

describe('<App>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App />);
  });

  it('should render', () => {
    expect(wrapper.find(App)).toHaveLength(1);
  });

  it('should render <Home> component', () => {
    expect(wrapper.find(Home)).toHaveLength(1);
  });
});
