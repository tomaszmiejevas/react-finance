import InfoInput from "./InfoInput";
import InfoOutput from "./InfoOutput";
import Graph from "./Graph";

const dataHandler = (value) => {
    setData(value);
  };


const InvestmentCalculator = (props) => {

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