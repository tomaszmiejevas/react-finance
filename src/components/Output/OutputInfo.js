import React, { useContext } from 'react';

import styles from './OutputInfo.module.css';

import DataContext from '../../context/data-context';

const OutputInfo = (props) => {

  const dataContext = useContext(DataContext);

  let compoundingFrequency;

  if (parseInt(props.info.compoundingFrequency) === 999){
    compoundingFrequency = 'Continuos';
  } else {
    compoundingFrequency = props.info.compoundingFrequency;
  }

 return (
  <div className={styles.wrapper}>
    <div className={styles.content}>
      <h3>Principal - {props.info.principal}</h3>
      <h3>Years - {props.info.years}</h3>
      <h3>Return Rate - {props.info.returnRate}</h3>
      <h3>Contribution - {props.info.yearlyContribution}</h3>
      <h3>Contribution Time - {props.info.contributionTime} of {props.info.contributionFrequency}</h3>
      <h3>Compounded - {compoundingFrequency}</h3>
      <h1>Total: <span className={styles.finalAmount}>${dataContext.calculateInterest(props.info.principal, props.info.returnRate, props.info.yearlyContribution, props.info.years, props.info.contributionTime, props.info.contributionFrequency, props.info.compoundingFrequency, 0).toFixed(2)}</span></h1>
    </div>
  </div>
 )
}

export default OutputInfo;
