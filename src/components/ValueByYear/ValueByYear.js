import React, { useState, useEffect, useContext } from 'react';

import styles from './ValueByYear.module.css';
import DataContext from '../../context/data-context'

const ValueByYear = () => {

  const dataContext = useContext(DataContext);


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

  useEffect(() => {
    setFinalValue(((dataContext.cpiByYear[endYear - 1913]/dataContext.cpiByYear[startYear - 1913]) * amount).toFixed(2));
  }, [amount, startYear, endYear])

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
    <React.Fragment>
    <form className={styles.form} onSubmit={submitHandler}>
      <div>
        <label htmlFor="Amount">Amount</label>
        <span className={styles.inputDollarSign}>
          <input type="number" name="amount" className={styles.amountInput} placeholder="1000" min="0" step=".1"/>
        </span>
      </div>
      <div>
        <label htmlFor="Amount">Start Year</label>
        <input type="number" name="startYear" className={styles.yearInput} placeholder="1913" min="1913" max="2022"/>
      </div>
      <div>
        <label htmlFor="Amount">End Year</label>
        <input type="number" name="endYear" className={styles.yearInput} placeholder="2022" min="1913" max="2022"/>
      </div>
      <button type="submit" className={styles.submitButton}>Calculate</button>
    </form>


    <div className={styles.outputContainer}>
      <p><span className={styles.amount}>${amount}</span> in <span>{startYear}</span> is worth <span className={styles.amount}>${finalValue}</span> in <span>{endYear}</span></p>
    </div>
    </React.Fragment>

  );
};


export default ValueByYear;
