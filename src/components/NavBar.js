import React from 'react';
import { withRouter } from "react-router-dom";

class NavBar extends React.Component {
  render () {
    return (
      <nav>
        <a href="/home">Home</a>
        <a href="/login">Login</a>
        <a href="/register">Register</a>
        <a href="/campaigns">Campaigns</a>
      </nav>
    )
  };
}

export default withRouter(NavBar);