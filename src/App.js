import "./App.css";

import InvestmentCalculator from "./components/InvestmentCalculator/InvestmentCalculator";
import ValueByYear from "./components/ValueByYear/ValueByYear";
import MortgageCalc from "./components/MortgageCalc/MortgageCalc";
import InterestVisualization from "./components/InterestVisualization/InterestVisualization";

function App() {

  return (
    <div className="whole-wrapper">
      <InvestmentCalculator/>
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
