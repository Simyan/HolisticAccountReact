import React, {useEffect, useState} from "react";
import TransactionChartComponent from "./../TransactionChart/TransactionChartComponent";
import TransactionPieChartComponent from "./../TransactionPieChart/TransactionPieChartComponent";
import StatsCardComponent from "./../StatsCard/StatsCardComponent";
import "./Dashboard.css";
import {Link} from "react-router-dom";
import {Icon} from "semantic-ui-react"
import {Statistic} from 'semantic-ui-react'

function DashboardComponent() {
  const [avgMonthly, setAvgMonthly] = useState(0);  
  const [avgDaily, setAvgDaily] = useState(0);  
  const [totalDailyExpense, setTotalDailyExpense] = useState(0);
  
  
  async function getData (url) {
    return await fetch(url).json();
}

  useEffect(() => {
 //   let ignore = false;
    const url = "https://holisticaccountant20200802075642.azurewebsites.net/transaction/";

    fetch(url + "AverageMonthlyExpenditure")
           .then((resp) => resp.json())
           .then((resp) => {
            setAvgMonthly(resp)
           })
    fetch(url + "AverageExpenditure")
           .then((resp) => resp.json())
           .then((resp) => {
            setAvgDaily(resp)
           })
    fetch(url + "CurrentDayTotalExpenditure")
           .then((resp) => resp.json())
           .then((resp) => {
            setTotalDailyExpense(resp)
           })

   // return () => { ignore = true; }
  }, [setAvgMonthly, setAvgDaily, setTotalDailyExpense])

  return (
      <div>
      <Link className='NavLink' to="/Transactions"><Icon size="big" name="arrow right" /></Link>
      <div className='StatsCard'>
      {/* <Statistic.Group even widths='three'> */}
      <StatsCardComponent value = {avgMonthly} label = 'Average Monthly Expense'/>
      <StatsCardComponent value = {avgDaily} label = 'Average Daily Expense'/>
      <StatsCardComponent value = {totalDailyExpense} label = 'Current Day Expense'/>
      {/* </Statistic.Group> */}
      </div>
      <div className="Container">
        
        <TransactionChartComponent className="BarChart" />
        <TransactionPieChartComponent className="PieChart"  />
      </div>
    </div>
  );
}

export default DashboardComponent;
