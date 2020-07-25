import React from 'react';
import TransactionListComponent from './Components/TransactionList/TransactionListComponent'
import TransactionDashboardComponent from './Components/Dashboard/DashboardComponent'
import './App.css';

function App() {
  return (
    <div>
      <TransactionListComponent/>
      <TransactionDashboardComponent/>
    </div>
  );
}

export default App;
