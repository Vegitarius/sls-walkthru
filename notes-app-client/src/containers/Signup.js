import React, { Component } from 'react';
import {
  HelpBlock,
  FormGroup,
  FormControl,
  ControlLabel
} from 'react-bootstrap';
import LoaderButton from '../components/LoaderButton';
import './Signup.css';

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      email: '',
      password: '',
      confirmPassword: '',
      confirmationCode: '',
      newUser: null
    };
  }

  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password > 0 &&
      this.state.password === this.state.confirmPassword
    );
  }

  validateConfirmationForm() {
    return this.state.confirmationCode.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();

    this.setState({ isLoading: true });
    this.setState({ newUser: 'test' });
    this.setState({ isLoading: false });
  }

  renderConfirmationForm() {
    return (
      <form onSubmit={this.handleConfirmationSubmit}>
        <FormGroup controlId='confirmationCode' bsSize='large'>
          <ControlLabel>Confirmation Code</ControlLabel>
          <FormControl
            autofocus
            type='tel'
            value={this.state.confirmationCode}
            onChange={this.handleChange}
          />
          <HelpBlock>Please check your email for the code.</HelpBlock>
        </FormGroup>
        <LoaderButton
          block
          bsSize='large'
          disable={!this.validateConfirmationForm()}
          type='submit'
          isLoading={this.state.isLoading}
          text='Verify'
          loadingText='Verifying...'
        />
      </form>
    );
  }

  renderForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup controlId='email' bsSize='large'>
          <ControlLabel>Email</ControlLabel>
          <FormControl
            autofocus
            type='email'
            value={this.state.email}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId='password' bsSize='large'>
          <ControlLabel>Password</ControlLabel>
          <FormControl
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            type='password'
          />
        </FormGroup>
        <LoaderButton
          block
          bsSize='large'
          disabled={!this.validateForm()}
          type='submit'
          isLoading={this.state.isLoading}
          text='Signup'
          loadingText='Signing up...'
        />
      </form>
    );
  }

  render() {
    return (
      <div className='signup'>
        {this.state.newUser === null
        ? this.renderForm()
        : this.renderConfirmationForm()
        }
      </div>
    );
  }
}