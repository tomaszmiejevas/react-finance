import React, { useState } from 'react';

import styles from './MortgageCalc.module.css';

const OutputInfo = (props) => {

  const [amount, setAmount] = useState(1000);
  const [startYear, setStartYear] = useState(1913);
  const [endYear, setEndYear] = useState(2022);
  const [finalValue, setFinalValue] = useState(99000);


  const amountChangeHandler = (value) => {
    setAmount(value);
  }

  const startYearChangeHandler = (value) => {
    setStartYear(value);
  }

  const endYearChangeHandler = (value) => {
    setEndYear(value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if (event.target.amount.value !== ''){
      amountChangeHandler(event.target.amount.value);
    }

    if (event.target.startYear.value !== ''){
      startYearChangeHandler(event.target.startYear.value);
    }

    if (event.target.endYear.value !== ''){
      endYearChangeHandler(event.target.endYear.value);
    }
  }

 return (
  <div>
        <React.Fragment>
    <form className={styles.form} onSubmit={submitHandler}>
      <div>
        <label htmlFor="Amount">Principal</label>
        <span className={styles.inputDollarSign}>
          <input type="number" name="amount" className={styles.amountInput} placeholder="1000" min="0" step=".1"/>
        </span>
      </div>
      <div>
        <label htmlFor="Amount">Down Payment</label>
        <span className={styles.inputDollarSign}>
          <input type="number" name="amount" className={styles.amountInput} placeholder="1000" min="0" step=".1"/>
        </span>
      </div>
      <div>
        <label htmlFor="Amount">Interest Rate</label>
        <input type="number" name="startYear" className={styles.yearInput} placeholder="1913" min="1913" max="2022"/>
      </div>
      <div>
        <label htmlFor="Amount">Loan Term</label>
        <input type="number" name="endYear" className={styles.yearInput} placeholder="2022" min="1913" max="2022"/>
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