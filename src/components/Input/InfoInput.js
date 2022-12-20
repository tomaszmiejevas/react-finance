import React, {useState} from 'react';

import styles from './InfoInput.module.css';

const InfoInput = (props) => {

const [principal, setPrincipal] = useState(10000);
const [years, setYears] = useState(5);
const [returnRate, setReturnRate] = useState(6);
const [yearlyContribution, setYearlyContribution] = useState(1000);

const [compoundingFrequency, setCompoundingFrequency] = useState(1);

const [contributionTime, setContributionTime] = useState('end');
const [contributionFrequency, setContributionFrequency] = useState('month');

const submitHandler = (event) => {
  event.preventDefault();

  const data = {
    principal: principal,
    years: years,
    returnRate: returnRate,
    yearlyContribution: yearlyContribution,
    compoundingFrequency: compoundingFrequency,
    contributionTime: contributionTime,
    contributionFrequency: contributionFrequency
  }

  props.onSendData(data)
}

const principalChangeHandler = (event) => {
  setPrincipal(event.target.value);
}

const yearsChangeHandler = (event) => {
  setYears(event.target.value);
}

const returnRateChangeHandler = (event) => {
  setReturnRate(event.target.value);
}

const yearlyContributionChangeHandler = (event) => {
  setYearlyContribution(event.target.value);
}

const compoundingFrequencyChangeHandler = (event) => {
  setCompoundingFrequency(event.target.value);
}

const contributionTimeChangeHandler = (event) => {
  setContributionTime(event.target.value);
}

const contributionFrequencyChangeHandler = (event) => {
  setContributionFrequency(event.target.value);
}

 return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.leftSide}>
        <label>Starting Principal</label>
        <input type="number"  placeholder="$10,000" value={principal} onChange={principalChangeHandler} min="1" max="99999999999999"/>
        <label>After</label>
        <input type="number" placeholder="10 years" value={years} onChange={yearsChangeHandler} min="0" max="250"/>
        <label>Return Rate</label>
        <input type="number" placeholder="6%" value={returnRate} onChange={returnRateChangeHandler} min="0" max="999"/>
        <label htmlFor="Compounded">Compounded:</label>
        <select name="Compounded" id="Compounded" onChange={compoundingFrequencyChangeHandler}>
         <option value="1">Anually</option>
         <option value="2">Semianually</option>
         <option value="4">Quarterly</option>
         <option value="12">Monthly</option>
         <option value="24">Semimonthly</option>
         <option value="26">Biweekly</option>
         <option value="52">Weekly</option>
         <option value="365">Daily</option>
         <option value="999">Continuously</option>
        </select>
      </div>
      <div className={styles.rightSide}>
        <label>Additional Contribution</label>
        <input className={styles.rightLabel} type="number" placeholder="$1,000" value={yearlyContribution} onChange={yearlyContributionChangeHandler} min="0" max="99999999999"/>
        <p>Contribute at the</p>
        <label className={styles.sameLine}>
          <input type="radio" id="beginning" name="time" value="beginning" onChange={contributionTimeChangeHandler}/> beginning
        </label>
        <label className={styles.sameLine} onChange={contributionTimeChangeHandler}>
          <input type="radio" id="end"  name="time" value="end" onChange={contributionTimeChangeHandler} defaultChecked/> end
        </label>
        <p>of each</p>
        <label className={styles.sameLine}>
          <input type="radio" name="frequency" id="month" value="month" onChange={contributionFrequencyChangeHandler} defaultChecked/> month
        </label>
        <label className={styles.sameLine}>
          <input type="radio" name="frequency" id="year" value="year" onChange={contributionFrequencyChangeHandler}/> year
        </label>
      </div>
      <button action="submit" className={styles.submitButton}>Calculate</button>
    </form>
 )
}

export default InfoInput;
