import React, { useState } from "react";

import InfoInput from "./InfoInput";
import InfoOutput from "./InfoOutput";
import Graph from "./Graph";


const InvestmentCalculator = (props) => {

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
                <InfoOutput info={data} />
                </div>
                <Graph info={data} />
            </div>
        </div>
    )
}

export default InvestmentCalculator;