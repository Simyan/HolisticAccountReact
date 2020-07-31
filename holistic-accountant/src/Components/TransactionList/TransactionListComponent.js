import React from 'react'
import TransactionTableComponent from './../TransactionTable/TransactionTableComponent'
import {Icon} from "semantic-ui-react"
import {Link} from 'react-router-dom'
import './TransactionList.css'

function TransactionListComponent(){
  return (
    <div>
      <Link className="NavLink" to="/Dashboard"><Icon size="big" name="arrow right" /></Link>
      <TransactionTableComponent></TransactionTableComponent>
    </div>)  
}

export default TransactionListComponent;