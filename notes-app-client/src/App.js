import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Auth } from 'aws-amplify';
import './App.css';
import Routes from './Routes';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      isAuthenticating: true
    };
  }

  async componentDidMount() {
    try {
      // using currentSession to make login persist
      await Auth.currentSession();
      this.userHasAuthenticated(true);
    }
    catch(e) {
      if (e !== 'No Current User') {
        alert(e);
      }
    }

    this.setState({ isAuthenticating: false })
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  handleLogout = async event => {
    // when user logs out then refreshes user is logged out completely
    await Auth.signOut();

    this.userHasAuthenticated(false);
  }

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };

    return (
      !this.state.isAuthenticating &&
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
            {/* uses react bootstrap router to route page without refreshing */}
            {/* conditional render whether user has been auth'd or not */}
              {this.state.isAuthenticated
                ? <NavItem onClick={this.handleLogout}>Logout</NavItem>
                : <Fragment>
                    <LinkContainer to='/signup'>
                      <NavItem>SignUp</NavItem>
                    </LinkContainer>
                    <LinkContainer to='/login'>
                      <NavItem>Login</NavItem>
                    </LinkContainer>
                  </Fragment>
              }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes childProps={childProps} />
      </div>
    );
  }
}

export default App;
