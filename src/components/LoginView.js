import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Cookies from "universal-cookie"

const cookies = new Cookies()

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      email: '',
      password: '',
      errors: ''
     };
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
      password: this.state.password
    }

    
    
axios.post('http://localhost:3001/api/v1/login', {user}, {withCredentials: true})
    .then(response => {
      if (response.data.data.id) {
        cookies.set("user", response.data.data, "/")
        console.log(cookies.get('user'));
        this.redirect()
        
      } 
      else {
        this.setState({
          errors: response.data
        })
        return this.handleErrors()
      }
    })
    .catch(error => console.log('api errors:', error))
};
componentDidMount() {
  if (cookies.get("user")) {
    this.redirect()
  }
  else {
    this.render()
  }
}

redirect = () => {
    this.props.history.push('/campaigns')
  }
handleErrors = () => {
    return (
      <div>
        <ul>
        {this.state.errors.map(error => {
        return <li key={error}>{error}</li>
          })}
        </ul>
      </div>
    )
  };
  
render() {
  return (
      <div>
        <h1>Log In</h1>        
<form onSubmit={this.handleSubmit}>
          <input
            placeholder="username"
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <input
            placeholder="password"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />         
<button placeholder="submit" type="submit">
            Log In
          </button>          
          <div>
            or <Link to='/signup'>sign up</Link>
          </div>
          
         </form>
         <div>
          {
            this.state.errors ? this.handleErrors() : null
          }
        </div>
      </div>
    );
  }
}
export default Login