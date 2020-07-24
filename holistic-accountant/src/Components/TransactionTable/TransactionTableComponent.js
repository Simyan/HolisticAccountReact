import React from 'react'

import {Table} from 'semantic-ui-react'


function TransactionTableComponent(){

 const data = {
    records: [
        {merchant: "Nintendo", price: "510", purchaseDate: "20th June 2020 3:20pm"},
        {merchant: "Akiba Dori", price: "50", purchaseDate: "25th June 2020 8:50pm"},
        {merchant: "Grub shack", price: "70", purchaseDate: "29th June 2020 1:43pm"},
    ]
 }

  return (
  <div>
     
    <Table striped>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Merchant</Table.HeaderCell>
        <Table.HeaderCell>Price</Table.HeaderCell>
        <Table.HeaderCell>Date</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
    {data.records.map( row => 
        { 
            const {merchant, price, purchaseDate} = row
            return(
                <Table.Row>
                <Table.Cell>{merchant}</Table.Cell>
                <Table.Cell>{price}</Table.Cell>
                <Table.Cell>{purchaseDate}</Table.Cell>
              </Table.Row> 
            )
        })} 
    </Table.Body>
  </Table>
  </div>)
    
  
}

export default TransactionTableComponent;