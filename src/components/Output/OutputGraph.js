import React, { useContext } from 'react';
import styles from './OutputGraph.module.css';

import { Line } from 'react-chartjs-2';
import { Chart } from "chart.js/auto";
import DataContext from '../../context/data-context';

const OutputGraph = (props) => {

  const dataContext = useContext(DataContext);

  const yearsLabels = [];
  const valueByYear = [];
  const currentValueByYear = [];

  for (var i = 0; i <= props.info.years; i++){
    yearsLabels.push(i);
    valueByYear.push(dataContext.calculateInterest(props.info.principal, props.info.returnRate, props.info.yearlyContribution, i, props.info.contributionTime, props.info.contributionFrequency, props.info.compoundingFrequency, 0));
    currentValueByYear.push(dataContext.calculateInterest(props.info.principal, props.info.returnRate, props.info.yearlyContribution, i, props.info.contributionTime, props.info.contributionFrequency, props.info.compoundingFrequency, 0) * dataContext.calculateInflation(i, 3.8, 0))
  }

const labels = yearsLabels;
const data = {
  labels: labels,
  datasets: [
    {
      label: "Final Amount",
      data: valueByYear,
      borderColor: "#0ed100",
      tension: 0.1,
      backgroundColor: "white",
    },
    {
      label: "Current Value",
      data: currentValueByYear,
      borderColor: "orange",
      tension: 0.1,
      backgroundColor: "white",
    },
  ],
};

const options = {
  plugins: {
      legend: {
        labels: {
          color: "white",
          font: {
            size: 18
          }
        }
      }
    },
  scales: {
    x: {
      grid: {
        color: 'rgba(255,0,0,0.1)',
        borderColor: 'white'
      },
      ticks: {
        color: 'white'
      }
    },
    y: {
      grid: {
        color: 'rgba(0,255,0,0.1)',
        borderColor: 'white'
      },
      ticks: {
        color: 'white'
      }
    }
  }
};


 return (
    <div className={styles.wrapper}>
      <Line data={data} options={options}/>
    </div>
 )
}

export default OutputGraph;
