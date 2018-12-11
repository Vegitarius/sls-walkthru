import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './App.css';

import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <div className="App container">
      {/* Bootstrap navbar, fits to container width with fluid */}
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
            {/* Uses react router to go back to homepage without refreshing */}
              <Link to="/">Scratch</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <LinkContainer to='/signup'>
                <NavItem href='/signup'>Signup</NavItem>
              </LinkContainer>
              <LinkContainer to='/login'>
                <NavItem href='/login'>Login</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes />
      </div>
    );
  }
}

export default App;
