import React, { useState } from 'react';

import styles from './MortgageCalc.module.css';

const OutputInfo = (props) => {

  const [principal, setPrincipal] = useState(430000);
  const [downPayment, setDownPayment] = useState(principal * 0.2);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const principalChangeHandler = (value) => { 
    setPrincipal(value);
  }

  const downPaymentChangeHandler = (value) => {
    setDownPayment(value);
  }

  const downPaymentPercentHandler = (value) => {
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

    console.log(event.target.loanTerm.value);
    if(event.target.principal.value === ''){
      principalChangeHandler(430000);
    }


    if (event.target.principal.value !== ''){
      principalChangeHandler(event.target.principal.value);
    }

    if (event.target.downPayment.value !== ''){
      downPaymentChangeHandler(event.target.downPayment.value);
    }

    if (event.target.downPaymentPercent.value !== ''){
      downPaymentChangeHandler(event.target.downPaymentPercent.value);
    }

    if (event.target.interestRate.value !== ''){
      interestRateChangeHandler(event.target.interestRate.value);
    }

    if (event.target.loanTerm.value !== ''){
      loanTermChangeHandler(event.target.loanTerm.value);
    }

    console.log("Principal: " + event.target.principal.value);
    console.log("Down Payment: " + event.target.downPayment.value);
    console.log("Down Payment As Percent: " + event.target.downPaymentPercent.value);
    console.log("Interest Rate: " + event.target.interestRate.value);
    console.log("Loan Term: " + event.target.loanTerm.value);

    //M payment = P * r(1+r)^n
    //            (1+r)^n-1

    const monthlyInterest = interestRate/12/10;
    const finalPrincipal = principal - downPayment;

    const topPart = (finalPrincipal * monthlyInterest * Math.pow((1 + monthlyInterest), 12 * loanTerm));
    const botPart = Math.pow((1 + monthlyInterest), loanTerm * 12) -1;

    setMonthlyPayment(topPart/botPart);

  }

 return (
    <React.Fragment>
      <form className={styles.form} onSubmit={submitHandler}>
        <div>
          <label htmlFor="Principal">Principal</label>
          <span className={styles.inputDollarSign}>
            <input type="number" name="principal" className={styles.amountInput} placeholder="430,000" min="0" max="250000000" onChange={e => setPrincipal(e.target.value)}/>
          </span>
        </div>
        <div>
          <label htmlFor="DownPayment">Down Payment</label>
          <span className={styles.inputDollarSign}>
            <input type="number" name="downPayment" className={styles.downPaymentInput} placeholder="86,000" min="0"/>
          </span>
        </div>
        <div>
          <label htmlFor="InterestRate">As %</label>
          <span className={styles.inputPercentageSign}>
            <input type="number" name="downPaymentPercent" className={styles.yearInput} placeholder="20" min="0" max="100" step="1"/>
          </span>
        </div>
        <div>
          <label htmlFor="InterestRate">Interest Rate</label>
          <span className={styles.inputPercentageSign}>
            <input type="number" name="interestRate" className={styles.yearInput} placeholder="6.5" min="0" max="30" step="0.1"/>
          </span>
        </div>
        <div>
          <label htmlFor="Amount">Loan Term</label>
          <select name="loanTerm" id="Compounded" className={styles.loanTermInput}>
            <option value="30">30 Years</option>
            <option value="20">20 Years</option>
            <option value="15">15 Years</option>
            <option value="10">10 Years</option>
          </select>
        </div>
        <button type="submit" className={styles.submitButton}>Calculate</button>
      </form>
      <div className={styles.outputContainer}>

        <p><strong>Monthly Payment:</strong> <span className={styles.amount}>${monthlyPayment.toFixed(2)}</span></p>
      
        {/* <p><span className={styles.amount}>${amount}</span> in <span>{startYear}</span> is worth <span className={styles.amount}>${finalValue}</span> in <span>{endYear}</span></p> */}
      </div>
    </React.Fragment>
 )
}

export default OutputInfo;