import React, { Component } from 'react';
import {Navbar, NavItem} from 'react-materialize';


class NavbarHeader extends Component {
  render() {
    return (
      <Navbar brand='Todo App' right></Navbar>
    )
  }
}

export default NavbarHeader;