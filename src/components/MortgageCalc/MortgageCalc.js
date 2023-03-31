import React, { useState } from 'react';

import styles from './MortgageCalc.module.css';

const OutputInfo = (props) => {

  const [principal, setPrincipal] = useState('');
  const [downPayment, setDownPayment] = useState('');
  const [downPaymentPercent, setDownPaymentPercent] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState(30);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const principalChangeHandler = (value) => { 
    setPrincipal(value);
  }

  const downPaymentChangeHandler = (value) => {
    setDownPayment(value);
  }

  const downPaymentPercentChangeHandler = (value) => {
    setDownPaymentPercent(value);
  }

  const interestRateChangeHandler = (value) => {
    setInterestRate(value);
  }

  const loanTermChangeHandler = (value) => {
    setLoanTerm(value);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (event.target.principal.value === ''){
      principalChangeHandler(430000);
    }

    if (event.target.downPayment.value === ''){
      downPaymentChangeHandler(86000);
    }

    if (event.target.downPaymentPercent.value === ''){
      downPaymentPercentChangeHandler(20);
    }

    if (event.target.interestRate.value === ''){
      interestRateChangeHandler(6.5);
    }

    console.log("Principal: " + event.target.principal.value);
    console.log("Down Payment: " + event.target.downPayment.value);
    console.log("Down Payment As Percent: " + event.target.downPaymentPercent.value);
    console.log("Interest Rate: " + event.target.interestRate.value);
    console.log("Loan Term: " + event.target.loanTerm.value);
    calculateMonthlyPayment();
  }
  
  
  const calculateMonthlyPayment = () => {
    //M payment = P * r(1+r)^n
    //            (1+r)^n-1

    const monthlyInterest = interestRate/12/100;
    const finalPrincipal = principal - downPayment;
    
    let topPart;
    let botPart;

    if(monthlyInterest === 0){
      topPart = finalPrincipal;
      botPart = loanTerm * 12;
    } else {
        topPart = (finalPrincipal * monthlyInterest * Math.pow((1 + monthlyInterest), 12 * loanTerm));
        botPart = Math.pow((1 + monthlyInterest), loanTerm * 12) -1;
    }

    setMonthlyPayment(topPart/botPart);
  }

 return (
    <React.Fragment>
      <form className={styles.form} onSubmit={submitHandler}>
        <div>
          <label htmlFor="Principal">Principal</label>
          <span className={styles.inputDollarSign}>
            <input type="number" name="principal" className={styles.amountInput} placeholder="430,000" min="0" max="250000000" value={principal} onChange={e => principalChangeHandler(e.target.value)}/>
          </span>
        </div>
        <div>
          <label htmlFor="DownPayment">Down Payment</label>
          <span className={styles.inputDollarSign}>
            <input type="number" name="downPayment" className={styles.downPaymentInput} placeholder="86,000" min="0" max={principal} value={downPayment} onChange={e => downPaymentChangeHandler(e.target.value)}/>
          </span>
        </div>
        <div>
          <label htmlFor="InterestRate">As %</label>
          <span className={styles.inputPercentageSign}>
            <input type="number" name="downPaymentPercent" className={styles.yearInput} placeholder="20" min="0" max="100" value={downPaymentPercent} onChange={e => downPaymentPercentChangeHandler(e.target.value)}/>
          </span>
        </div>
        <div>
          <label htmlFor="InterestRate">Interest Rate</label>
          <span className={styles.inputPercentageSign}>
            <input type="number" name="interestRate" className={styles.yearInput} placeholder="6.5" min="0" max="20" step="0.01" value={interestRate} onChange={e => interestRateChangeHandler(e.target.value)}/>
          </span>
        </div>
        <div>
          <label htmlFor="Amount">Loan Term</label>
          <select name="loanTerm" id="Compounded" className={styles.loanTermInput} value={loanTerm} onChange={e => loanTermChangeHandler(e.target.value)}>
            <option value="30">30 Years</option>
            <option value="20">20 Years</option>
            <option value="15">15 Years</option>
          </select>
        </div>
        <button type="submit" className={styles.submitButton}>Calculate</button>
      </form>
      <div className={styles.outputContainer}>
        <p><strong>Monthly Payment:</strong> <span className={styles.amount}>${monthlyPayment.toFixed(2)}</span></p>
      </div>
    </React.Fragment>
 )
}

export default OutputInfo;