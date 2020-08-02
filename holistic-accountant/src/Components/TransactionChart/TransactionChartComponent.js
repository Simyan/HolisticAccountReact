import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import "./TransactionChart.css";

function TransactionChartComponent() {
  const [chartDay, setChartDay] = useState([]);
  const [chartAmount, setChartAmount] = useState([]);
  const [chartMonth, setChartMonth] = useState("");

  const monthMapping = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const chart = {
    data: {
      datasets: [
        {
          label: "Daily Expenditure",

          backgroundColor: "#e63946",
          //data: [65, 59, 80, 81, 56, 55, 40]
          barThickness: 15,
          data: chartAmount,
        },
      ],
      //labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July']
      labels: chartDay,
    },

    options: {
      legend: {
        labels: {
          fontSize: 20,
        },
      },
      responsive: true,
      scales: {
        xAxes: [
          {
            scaleLabel: {
              display: true,
              fontSize: 20,
              labelString: monthMapping[parseInt(chartMonth) - 1],
            },
            ticks: { display: true },
            gridLines: {
              display: false,
              drawBorder: false,
            },
          },
        ],
        yAxes: [
          {
            ticks: { display: true },
            gridLines: {
              display: false,
              drawBorder: false,
            },
          },
        ],
      },
    },
  };

  useEffect(() => {
    const url = "https://holisticaccountant20200802075642.azurewebsites.net/transaction/MonthlyDailyExpenditure";

    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(resp);
        resp.map((row) => {
          const { monthText, dayText, amount } = row;
          setChartDay((prev) => [...prev, dayText]);
          setChartAmount((prev) => [...prev, amount]);
          setChartMonth(monthText);
        });
      });
  }, [setChartDay, setChartAmount, setChartMonth]);

  return (
    <div id="BarChart">
      <Bar
        id="chart-inner"
        //{console.log("This is the data content: " + this.state.data.labels)}
        data={chart.data}
        options={chart.options}
      />
    </div>
  );
}

export default TransactionChartComponent;
