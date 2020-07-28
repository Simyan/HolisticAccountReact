import React, {useState, useEffect} from 'react'
import {Pie} from 'react-chartjs-2';
import './TransactionPieChart.css';


function TransactionPieChartComponent()
{
    const [chartCategory, setChartCategory] = useState([])
    const [chartMonthlyAmount, setChartMonthlyAmount] = useState([])
   // const [chartMonth, setChartMonth] = useState("")

    const chart = {
        
        data : {
                
            labels: chartCategory,
            datasets: [{
                data: chartMonthlyAmount,
                backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ],
                hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ]
            }]       
    },

    options: {
      responsive: true
    }
    }

   

    useEffect(() => {
        const url = "https://localhost:44384/transaction/MonthlyCategoryExpenditure";
        
        fetch(url)
           .then((resp) => resp.json())
           .then((resp) => {
               console.log(resp)
               resp.map( row =>{
                   const {category, categoryMonthlyAmount, year, month} = row;
                   setChartCategory((prev) => [...prev, category ])
                   setChartMonthlyAmount((prev) => [...prev, categoryMonthlyAmount ])
               } )
           })
    }, [setChartCategory, setChartMonthlyAmount])
   

    return (
    <div id="PieChart">
            <Pie                        
                data = {chart.data}
            />
    </div>
    )
}

export default TransactionPieChartComponent;