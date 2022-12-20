import React from 'react';

const DataContext = React.createContext({
  finalValue: 0
})

export const DataContextProvider = (props) => {

  const cpiByYear = [
    9.9, 10, 10.1, 10.9, 12.8, 15, 17.3, 20, 17.9, 16.8, 17.1, 17.1, 17.5, 17.7, 17.4, 17.2, 17.2, 16.7, 15.2, 13.6, 12.9, 13.4, 13.7, 13.9, 14.4, 14.1, 13.9, 14, 14.7, 16.3, 17.3, 17.6, 18, 19.5, 22.3, 24, 23.8, 24.1, 26, 26.6, 26.8, 26.9, 26.8, 27.2, 28.1, 28.9, 29.2, 29.6, 29.9, 30.3, 30.6, 31, 31.5, 32.5, 33.4, 34.8, 36.7, 38.8, 40.5, 41.8, 44.4, 49.3, 53.8, 56.9, 60.6, 65.2, 72.6, 82.4, 90.9, 96.5, 99.6, 103.9, 107.6, 109.6, 113.6, 118.3, 124, 130.7, 136.2, 140.3, 144.5, 148.2, 152.4, 156.9, 160.5, 163, 166.6, 172.2, 177.1, 179.9, 184, 188.9, 195.3, 201.6, 207.3, 215.3, 214.5, 218.1, 224.9, 229.6, 233, 236.7, 237, 240, 245.1, 251.1, 255.7, 258.8, 271, 294.4
  ]

  function calculateInterest(principal, returnRate, contribution, years, contributionTime, contributionFrequency, compoundingFrequency, i){
    let bottomNoPrincipal;
    let power;
    let newPrincipal;
    let numberOfContribution;
    let period;

    if (contributionFrequency === 'month'){
      numberOfContribution = years * 12;
      period = 1/12
    } else {
      numberOfContribution = years;
      period = 1;
    }

    if (parseInt(compoundingFrequency) !== 999){
      power = compoundingFrequency * period;
      bottomNoPrincipal = (1 + ((returnRate/100)/compoundingFrequency));
    } else {
      power = (returnRate/100) * period;
      bottomNoPrincipal = Math.E;
    }

    if (i !== numberOfContribution){
      i = i + 1;
      if(contributionTime === 'beginning'){
        principal += parseInt(contribution);
        newPrincipal = principal * Math.pow(bottomNoPrincipal, power)
        return calculateInterest(newPrincipal, returnRate, contribution, years, contributionTime, contributionFrequency, compoundingFrequency, i);
      } else {
        newPrincipal = principal * Math.pow(bottomNoPrincipal, power) + parseInt(contribution);
        return calculateInterest(newPrincipal, returnRate, contribution, years, contributionTime, contributionFrequency, compoundingFrequency, i);
      }
    } else {
      return principal;
    }
  }

  function calculateInflation(years, inflationRate, i){
    const power = (inflationRate/100) * (years);
    const totalInflationRate = (Math.pow(Math.E, power));
    return (1/totalInflationRate);
  }

  return (
    <DataContext.Provider value={{calculateInflation: calculateInflation, calculateInterest: calculateInterest, cpiByYear: cpiByYear}}>
      {props.children}
    </DataContext.Provider>

  )

}

export default DataContext;
