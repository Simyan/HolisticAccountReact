import React, {useState, useEffect} from 'react'
import {Line, Bar} from 'react-chartjs-2';
import './TransactionChart.css';


function TransactionChartComponent()
{
    const [chartDay, setChartDay] = useState([])
    const [chartAmount, setChartAmount] = useState([])
    const [chartMonth, setChartMonth] = useState("")

    const chart = {
        
        data : {
                
        datasets: [
            {
                label: chartMonth,
                backgroundColor: "rgba(0, 0, 255, 0.35)",
                //data: [65, 59, 80, 81, 56, 55, 40]
                data: chartAmount
            }
        ],
        //labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July']            
        labels: chartDay           
    },

    options: {
      responsive: true
    }
    }

   

    useEffect(() => {
        const url = "https://localhost:44384/transaction/MonthlyDailyExpenditure";
        
        fetch(url)
           .then((resp) => resp.json())
           .then((resp) => {
               console.log(resp)
               resp.map( row =>{
                   const {monthText, dayText, amount} = row;
                   setChartDay((prev) => [...prev, dayText ])
                   setChartAmount((prev) => [...prev, amount ])
                   setChartMonth(monthText)
               } )
           })
    }, [setChartDay, setChartAmount, setChartMonth])
   

    return (
    <div id="BarChart">
            <Bar id="chart-inner"
            //{console.log("This is the data content: " + this.state.data.labels)}                              
                data = {chart.data}
            />
    </div>
    )
}

export default TransactionChartComponent;