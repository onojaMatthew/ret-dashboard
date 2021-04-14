import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ dataArray, color, label }) => {
  const data = {
    labels: [ "01", "02", "03", "04", "05", "06", '07', "08" ],
    datasets: [
      {
        label: label,
        data: dataArray,
        fill: true,
        borderColor: color //"rgba(75,192,192,1)"
      },
    ]
  };

  const legend = {
    display: true,
    position: "bottom",
    labels: {
      fontColor: "#323130",
      fontSize: 12
    }
  };
  
  const options = {
    responsive: true,
    title: {
      display: false,
      text: "Chart Title"
    },
    scales: {
      yAxes: [
        {
          ticks: {
            suggestedMin: 0,
            suggestedMax: 40
          }
        }
      ],
    }
  };
  
  return (
    <div>
      <Bar data={data} height={100} width={400} legend={legend} options={options} />
    </div>
  );
  
}

export default BarChart;