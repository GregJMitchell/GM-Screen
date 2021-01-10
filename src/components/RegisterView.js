import React from 'react';
import { postUser } from '../services/Register'

class RegisterView extends React.Component {
  state={
    username:"",
    password:"",
    password_confirmation:"",
    loading:false
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  encryptPassword = (password) => {
    var bcrypt = require('bcryptjs');
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);
    return password;
  };

  handlePasswordChange = event => {
    let encryptedPassword = this.encryptPassword(event.target.value);
    this.setState({ password: encryptedPassword});
  };

  handlePasswordConfChange = event => {
    let encryptedPassword = this.encryptPassword(event.target.value);
    this.setState({ password_confirmation: encryptedPassword});
  };

  submitRegister = async event => {
    event.preventDefault();
    this.setState({loading:true});
    const response = await postUser( this.state.username, this.state.password);
    this.setState({ loading:false, hasErrors:false });
  }
  render () {
    return (
      <form>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={this.state.username}
            onChange={event => this.handleChange(event)}
            />

          <input
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
          <input
            type="password"
            placeholder="Password Confirmation"
            name="password_confirmation"
            value={this.state.password}
            onChange={this.handlePasswordConfChange}
          />

          <button onClick={this.submitLogin}>Submit</button>
      </form>
    )
  };
}

export default RegisterView;