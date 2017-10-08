import React from 'react';
import { shallow, mount } from 'enzyme';

import AddTodo from './AddTodo';

describe('AddTodo', () => {
  it('renders the form', () => {
    const wrapper = shallow(<AddTodo />);

    expect(wrapper.find('form').length).toBe(1)
  });
});