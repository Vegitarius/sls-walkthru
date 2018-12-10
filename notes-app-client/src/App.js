import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
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
        </Navbar>
        <Routes />
      </div>
    );
  }
}

export default App;
