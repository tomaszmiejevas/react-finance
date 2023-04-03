import React, { useState, useEffect } from 'react';
import styles from './InterestVisualization.module.css';

const InterestVisualization = () => {

   const [capital, setCapital] = useState(10000);
   const [interestRate, setInterestRate] = useState(6.5);

   const [startButtonText, setStartButtonText] = useState("Start");

   const [buttonIsOn, setButtonIsOn] = useState(false);
   const [buttonText, setButtonText] = useState("Turn ON");
   const [buttonColor, setButtonColor] = useState("green");

   const [totalReturn, setTotalReturn] = useState(capital);

  
   const turnButton = (event) => {
      event.preventDefault();
      if(buttonText === "Turn ON"){
         setButtonText("Turn OFF");
         setButtonColor("red");
      } else {
         setButtonText("Turn ON");
         setButtonColor("green");
      }
      setButtonIsOn(!buttonIsOn);
   }

   const submitHandler = (event) => {
      event.preventDefault();

      if(startButtonText === "Start"){
         setStartButtonText("Restart");
      } else {
         setStartButtonText("Start");
      }

      turnButton(event);

      capitalChangeHandler(event.target.capital.value);
      interestRateChangeHandler(event.target.interestRate.value);
      setTotalReturn(0);
      
   }

   const capitalChangeHandler = (value) => {
      setCapital(value);
   }

   const interestRateChangeHandler = (value) => {
      setInterestRate(value);
   }

   useEffect(() => {
      setTotalReturn(capital);
      if(buttonText === "Turn OFF"){
         const interval = setInterval(() => setTotalReturn((oldCount) => (oldCount * Math.pow(Math.E, ((interestRate/100) * (1/31536000) ))), 1000));
         return () => clearInterval(interval);
      }
   },[buttonText, capital, interestRate])


   return (
      <React.Fragment>
         <form className={styles.form} onSubmit={submitHandler}>
            <div className={styles.wrapper}>
               <div>
                  <label htmlFor="Capital">Capital</label>
                  <span className={styles.inputDollarSign}>
                     <input type="number" name="capital" className={styles.amountInput} placeholder="10,000" min="0" value={capital} onChange={e => capitalChangeHandler(e.target.value)}/>
                  </span>
               </div>
               <div>
                  <label htmlFor="InterestRate">Interest Rate</label>
                  <span className={styles.inputPercentageSign}>
                     <input type="number" name="interestRate" className={styles.yearInput} placeholder="6.5" min="0" max="20" step="0.01" value={interestRate} onChange={e => interestRateChangeHandler(e.target.value)} />
                  </span>
               </div>
               <button type="submit" className={styles.submitButton}>{startButtonText}</button>
               <button className={styles.onOffButton} style={{backgroundColor: buttonColor}}onClick={turnButton}>{buttonText}</button>
            </div>
         </form>
         <div className={styles.outputContainer}>
            <p><strong>Return:</strong> <span className={styles.amount}>${totalReturn - capital}</span></p>
         </div>
      </React.Fragment>
   )
  }
  
  export default InterestVisualization;
  