import React from 'react'
import TransactionChartComponent from './../TransactionChart/TransactionChartComponent'
import TransactionPieChartComponent from './../TransactionPieChart/TransactionPieChartComponent'
import './Dashboard.css';
function DashboardComponent()
{
    return (
    <div className="Container">     
        <TransactionChartComponent />
        <TransactionPieChartComponent/>
    </div>
    )

}

export default DashboardComponent;