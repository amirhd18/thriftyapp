import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages';
import SigninPage from './pages/signin';
import Amplify from 'aws-amplify';
import config from './aws-exports';
import DashboardPage from './pages/dashboard';
import Expenses from './pages/expenses';
import Budget from './pages/budget';
import Accounts from './pages/accounts';
import Savings from './pages/savings';
Amplify.configure(config);

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
        <Route path="/dashboard" component={DashboardPage} exact />
        <Route path="/expenses" component={Expenses} exact />
        <Route path="/budget" component={Budget} exact />
        <Route path="/accounts" component={Accounts} exact />
        <Route path="/savings" component={Savings} exact />
      </Switch>
    </Router> 
  );
}


export default App;
