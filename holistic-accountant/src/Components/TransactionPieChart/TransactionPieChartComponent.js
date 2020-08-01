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
        legend: { 
            labels: {
                fontSize: 19
            }
        },
      responsive: true,
      scales: {
        xAxes: [
          {
            scaleLabel: {
              display: true,
              fontSize: 20,
              labelString: "Monthly Expenditure",
            },
            ticks: { display: false },
            gridLines: {
              display: false,
              drawBorder: false,
            },
          },
        ],
    
      },
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
                options = {chart.options}
            />
    </div>
    )
}

export default TransactionPieChartComponent;