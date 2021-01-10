// import React from 'react';
// import { getUser } from '../services/Login'

// class LoginView extends React.Component {
//   state={
//     username:"",
//     password:"",
//     loading:false
//   };
//   handleChange = event => {
//     this.setState({ [event.target.name]: event.target.value });
//   };

//   encryptPassword = (password) => {
//     var bcrypt = require('bcryptjs');
//     var salt = bcrypt.genSaltSync(10);
//     var hash = bcrypt.hashSync(password, salt);
//     return hash;
//   };

//   handlePasswordChange = event => {
//     let encryptedPassword = this.encryptPassword(event.target.value);
//     this.setState({ password: encryptedPassword});
//   };

//   submitLogin = async event => {
//     event.preventDefault();
//     this.setState({loading:true});
//     await getUser( this.state.username, this.state.password);
//     this.setState({ loading:false, hasErrors:false });
//   }

//   render () {
//     return (
//       <form>
//           <input
//             type="text"
//             placeholder="Username"
//             name="username"
//             value={this.state.username}
//             onChange={event => this.handleChange(event)}
//             />

//           <input
//             type="password"
//             placeholder="Password"
//             name="password"
//             onChange={this.handlePasswordChange}
//           />

//           <button onClick={this.submitLogin}>Submit</button>
//       </form>
//     )
//   };
// }

// export default LoginView;

import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
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
    
(axios.post('http://localhost:3001/api/v1/login', {user}, {withCredentials: true})
    .then(response => {
      if (response.data.id) {
        this.props.handleLogin(response.data)
        this.redirect()
      } else {
        this.setState({
          errors: response.data.errors
        })
      }
    })
    .catch(error => console.log('api errors:', error))
  };
redirect = () => {
    this.props.history.push('/home')
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
      </div>
    );
  }
}
export default Login;