import React from 'react';
import { withRouter } from "react-router-dom";
import Cookies from "universal-cookie"
import "../stylesheets/NavBar.css"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
// import NavDropdown from 'react-bootstrap/NavDropdown'

const cookies = new Cookies();

class NavBar extends React.Component {
  logout() {
    cookies.remove("user")
    // localStorage.clear();
      window.location.href = '/';
  }
  render () {
    return (
      <Navbar bg="dark" variant="dark" >
        <Nav variant="" >
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/register">Register</Nav.Link>
          <Nav.Item>
            <Nav.Link eventKey='link-2'goopg href="/campaigns">Campaigns</Nav.Link>
          </Nav.Item>
          <Nav.Link onClick={() => this.logout()}>Logout</Nav.Link>
        </Nav>
      </Navbar>
      
    )
  };
}

export default withRouter(NavBar);