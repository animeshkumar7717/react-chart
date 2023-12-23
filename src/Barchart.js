import React, { useRef } from "react";
import { Bar, getElementAtEvent } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js/auto";
ChartJS.register(
  BarElement, CategoryScale, LinearScale, Tooltip, Legend 
)

function BarChart({ chartData }) {

  const options = {};
  const chartRef =useRef();
  const onClick = (e) => {
    if(getElementAtEvent(chartRef.current, e).length > 0) {
    console.log(getElementAtEvent(chartRef.current, e));
    const dataindex = getElementAtEvent(chartRef.current, e)[0].datasetIndex;
    const datapoint =getElementAtEvent(chartRef.current, e)[0].index;
    console.log(dataindex, datapoint);
    console.log(chartData.datasets[dataindex].links[datapoint]);
    window.location.href = chartData.datasets[dataindex].links[datapoint];
    }
  }
  
  return <Bar data={chartData} options={options} onClick={onClick} ref={chartRef} />;
}

export default BarChart;