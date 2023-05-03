import { ArcElement, CategoryScale, Chart } from "chart.js";
import React, { useState } from 'react'
import {  Pie } from 'react-chartjs-2';

export const CharDemo2 = () => {
    Chart.register(ArcElement, CategoryScale);
    var data = {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            borderWidth: 1,
          },
        ],
      };
      var style = {
        width: "300px",
        height: "300px",
      }
      const [chartData, setchartData] = useState(data)
  return (
    <div style={style}>CharDemo2
        <Pie data={chartData} />;
    </div>
  )
}
