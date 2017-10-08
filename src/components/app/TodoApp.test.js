import React from 'react';
import { shallow, mount } from 'enzyme';

import ToDoApp from './TodoApp.js';

describe('Test for the todo app page', () =>{
  it('Has a todo heading TODO list', () => {
    const wrapper = shallow(<ToDoApp />)
    const header = <h2>TODO List</h2>

    expect(wrapper.contains(header)).toEqual(true)
  });
});
