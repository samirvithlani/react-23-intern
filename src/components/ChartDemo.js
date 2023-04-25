import { ArcElement, CategoryScale, Chart } from "chart.js";
import React, { useState } from "react";
import { PieChart } from "./PieChart";

export const ChartDemo = () => {
  Chart.register(ArcElement, CategoryScale);

  var data = {
    labels: [2010, 2011, 2012, 2013, 2014, 2015, 2016],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [10,10,10,20,45],
      },
    ],
  };

  const [chartData, setchartData] = useState("");
  return (
    <div>
      <PieChart data={data} />
    </div>
  );
};
