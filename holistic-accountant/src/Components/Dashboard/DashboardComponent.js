import React, {useEffect, useState} from "react";
import TransactionChartComponent from "./../TransactionChart/TransactionChartComponent";
import TransactionPieChartComponent from "./../TransactionPieChart/TransactionPieChartComponent";
import StatsCardComponent from "./../StatsCard/StatsCardComponent";
import "./Dashboard.css";

function DashboardComponent() {
  const [avgMonthly, setAvgMonthly] = useState(0);  
  const [avgDaily, setAvgDaily] = useState(0);  
  const [totalDailyExpense, setTotalDailyExpense] = useState(0);
  
  async function getData (url) {
      let resp = await fetch(url);
      return await resp.json();
  }

  useEffect( async () => {
    const url = "https://localhost:44384/transaction/";
    
    setAvgMonthly(await getData(url + "AverageMonthlyExpenditure"));
    setAvgDaily(await getData(url + "AverageExpenditure"));
    setTotalDailyExpense(await getData(url + "CurrentDayTotalExpenditure"));
    
  }, [setAvgMonthly, setAvgDaily, setTotalDailyExpense])

  return (
    <div>
      <StatsCardComponent value = {avgMonthly} label = 'Average Monthly Expense'/>
      <StatsCardComponent value = {avgDaily} label = 'Average Daily Expense'/>
      <StatsCardComponent value = {totalDailyExpense} label = 'Current Day Expense'/>

      <div className="Container">
        <TransactionChartComponent />
        <TransactionPieChartComponent />
      </div>
    </div>
  );
}

export default DashboardComponent;
