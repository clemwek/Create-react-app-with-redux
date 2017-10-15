import React from 'react'; 
import { shallow } from 'enzyme'; 

import Navbar from './Navbar.js';


describe('This are navbar tests', () => {
  it('renders without crashing', () => { 
    const wrapper = shallow(<Navbar />);
  });
});