import React from 'react';
import axios from 'axios'
import Cookies from "universal-cookie"

const cookies = new Cookies();

class RegisterView extends React.Component {
  state={
    username:"",
    email:"",
    password:"",
    password_confirmation:"",
    loading:false
  };
  // handleChange = event => {
  //   this.setState({ [event.target.name]: event.target.value });
  // };

  componentDidMount() {
    if (cookies.get("user")) {
      this.redirect()
    }
    else {
      this.render()
    }
  }

  redirect = () => {
    this.props.history.push('/dashboard')
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };
  handleSubmit = (event) => {
    event.preventDefault()
    const user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation
    }

    
    
axios.post('http://localhost:3001/api/v1/users', {user}, {withCredentials: true})
    .then(response => {
      if (response.data.data.id) {
        cookies.set("user", response.data.data)
        console.log(cookies.get('user'));
        this.redirect()
        
      } 
      else {
        this.setState({
          errors: response.data
        })
        return this.handleErrors();
      }
    })
    .catch(error => console.log('api errors:', error))
};

  render () {
    return (
      <form>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            />
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            />

          <input
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <input
            type="password"
            placeholder="Password Confirmation"
            name="password_confirmation"
            value={this.state.password_confirmation}
            onChange={this.handleChange}
          />

          <button onClick={this.handleSubmit}>Submit</button>
      </form>
    )
  };
}

export default RegisterView;