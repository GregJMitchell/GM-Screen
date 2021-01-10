import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeView  from "./components/HomeView";
import  NavBar  from "./components/NavBar";
import LoginView from './components/LoginView';
import RegisterView from './components/RegisterView';
import CampaignsView from './components/CampaignsView';

export const NoPageMatch = ({location}) => <h3>No Match for <code>{location.pathname}</code> </h3>

class App extends React.Component {
  renderRoutes = () => {
    return <div>
      <Switch>
        <Route exact path="/home" component={ HomeView }/>
        <Route path="/login" component={ LoginView } />
        <Route path="/register" component={ RegisterView } />
        <Route path="/campaigns" component={ CampaignsView } />
        <Route component={ NoPageMatch } />
      </Switch>
    </div>
  }
  render () {
    return (
      <div>
        <Router>
          <NavBar/>
          {this.renderRoutes()}
        </Router>
      </div>
    )
  }
}

export default App;
