import React, { useEffect, useState } from 'react'
import {Table} from 'semantic-ui-react'


function TransactionTableComponent(){

 const [transactionState, setTransactionState] = useState([]);   


 useEffect(() => {
     const url = "https://holisticaccountant20200802075642.azurewebsites.net/transaction/";
     
     fetch(url)
        .then((resp) => resp.json())
        .then((resp) => {
            console.log(resp)
            setTransactionState(resp)
        })
 }, [setTransactionState])

  return (
  <div>
     
    <Table striped>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Merchant</Table.HeaderCell>
        <Table.HeaderCell>Price</Table.HeaderCell>
        <Table.HeaderCell>Date</Table.HeaderCell>
        <Table.HeaderCell>Type</Table.HeaderCell>
        <Table.HeaderCell>Balance</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
    {transactionState.map( row => 
        { 
            const {merchant, amount, purchasedOn, type, balance} = row
            return(
                <Table.Row>
                <Table.Cell>{merchant}</Table.Cell>
                <Table.Cell>{amount}</Table.Cell>
                <Table.Cell>{purchasedOn}</Table.Cell>
                <Table.Cell>{type}</Table.Cell>
                <Table.Cell>{balance}</Table.Cell>
              </Table.Row> 
            )
        })} 
    </Table.Body>
  </Table>
  </div>)
    
  
}

export default TransactionTableComponent;