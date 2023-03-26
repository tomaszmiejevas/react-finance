import React, { useState } from "react";

import "./App.css";

import InfoInput from "./components/Input/InfoInput";
import OutputInfo from "./components/Output/OutputInfo";
import OutputGraph from "./components/Output/OutputGraph";
import ValueByYear from "./components/ValueByYear/ValueByYear";
import MortgageCalc from "./components/MortgageCalc/MortgageCalc";
import LiveDividend from "./components/LiveDividend/LiveDividend";

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
      <h1>Investment Returns Calculator</h1>
      <div className="wrapper">
        <div className="info-wrapper">
          <InfoInput onSendData={dataHandler} />
          <OutputInfo info={data} />
        </div>
        <OutputGraph info={data} />
      </div>
      <div className="wrapper">
        <h1>CPI Inflation Calculator (1913-2022)</h1>
        <ValueByYear />
      </div>
      <div className="wrapper">
        <h1>Mortgage Calculator</h1>
        <MortgageCalc />
      </div>
      <div>
        <LiveDividend />
      </div>
    </div>
  );
}

export default App;
