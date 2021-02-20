import React from 'react'
import './App.css';
import { Route, Switch, BrowserRouter, NavLink, Redirect} from "react-router-dom"
import { LoginPage } from './Login/login'
import { DashboardPage } from './Dashboard/dashboard'

function App() {
  return (
    <div className="mainContainer">
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/dashboard" component={DashboardPage} />
          <Redirect from="/" to="/login"/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;