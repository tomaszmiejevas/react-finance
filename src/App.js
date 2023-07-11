import React, { useState } from "react";

import "./App.css";

import InvestmentCalculator from "./components/InvestmentCalculator/InvestmentCalculator";
import ValueByYear from "./components/ValueByYear/ValueByYear";
import MortgageCalc from "./components/MortgageCalc/MortgageCalc";
import InterestVisualization from "./components/InterestVisualization/InterestVisualization";

function App() {
  const [data, setData] = useState({
    principal: 0,
    years: 0,
    returnRate: 0,
    yearlyContribution: 0,
    compoundingFrequency: 1,
    contributionTime: 'end',
    contributionFrequency: 'month'
  });

  const dataHandler = (value) => {
    setData(value);
  };

  return (
    <div className="whole-wrapper">
      <InvestmentCalculator />
      <div className="wrapper">
        <h1>CPI Inflation Calculator (1913-2022)</h1>
        <ValueByYear />
      </div>
      <div className="wrapper">
        <h1>Mortgage Calculator</h1>
        <MortgageCalc />
      </div>
      <div className="wrapper">
      <h1>Interest Visualization</h1>
        <InterestVisualization />
      </div>
    </div>
  );
}

export default App;
