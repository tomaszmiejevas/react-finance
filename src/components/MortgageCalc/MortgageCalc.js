import React, { useState } from 'react';

import styles from './MortgageCalc.module.css';

const OutputInfo = (props) => {

  const [principal, setPrincipal] = useState(430000);
  const [downPayment, setDownPayment] = useState(principal * 0.2);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);


  const principalChangeHandler = (value) => {
    setPrincipal(value);
  }

  const downPaymentChangeHandler = (value) => {
    setDownPayment(value);
  }

  const interestRateChangeHandler = (value) => {
    setInterestRate(value);
  }

  const loanTermChangeHandler = (value) => {
    setLoanTerm(value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if (event.target.principal.value !== ''){
      principalChangeHandler(event.target.principal.value);
    }

    if (event.target.downPayment.value !== ''){
      downPaymentChangeHandler(event.target.downPayment.value);
    }

    if (event.target.interestRate.value !== ''){
      interestRateChangeHandler(event.target.interestRate.value);
    }

    if (event.target.loanTerm.value !== ''){
      loanTermChangeHandler(event.target.loanTerm.value);
    }
  }

 return (
  <div>
    <React.Fragment>
      <form className={styles.form} onSubmit={submitHandler}>
        <div>
          <label htmlFor="Principal">Principal</label>
          <span className={styles.inputDollarSign}>
            <input type="number" name="principal" className={styles.amountInput} placeholder="430,000" min="0" max="250000000" step="10000"/>
          </span>
        </div>
        <div>
          <label htmlFor="DownPayment">Down Payment</label>
          <span className={styles.inputDollarSign}>
            <input type="number" name="principal" className={styles.amountInput} placeholder="86,000" min="0" step=".1"/>
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
          <select name="Compounded" id="Compounded" className={styles.loanTermInput}>
            <option value="30">30 Years</option>
            <option value="20">20 Years</option>
            <option value="15">15 Years</option>
            <option value="10">10 Years</option>
          </select>
        </div>
        <button type="submit" className={styles.submitButton}>Calculate</button>
      </form>
      <div className={styles.outputContainer}>

        <p>Monthly Payment - </p>
      
        {/* <p><span className={styles.amount}>${amount}</span> in <span>{startYear}</span> is worth <span className={styles.amount}>${finalValue}</span> in <span>{endYear}</span></p> */}
      </div>
    </React.Fragment>
  </div>
 )
}

export default OutputInfo;