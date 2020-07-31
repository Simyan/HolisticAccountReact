import React from 'react';
import TransactionListComponent from './Components/TransactionList/TransactionListComponent'
import TransactionDashboardComponent from './Components/Dashboard/DashboardComponent'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route path="/Transactions">
          <TransactionListComponent/>
        </Route>
        <Route path="/Dashboard">
          <TransactionDashboardComponent/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
