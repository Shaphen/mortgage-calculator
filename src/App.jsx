import './App.css';
import React, { useState } from 'react';
import { calculateMortgage } from './calculators';

function App() {
  const [values, setValues] = useState({
    homeValue: "",
    downPayment: "",
    term: "",
    interestRate: "",
    mortgage: ""
  });

  const handleChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value });
  }


  const runCalculation = () => {
    const loanBalance = parseInt(values.homeValue) - parseInt(values.downPayment);
    const interestRateNum = parseInt(values.interestRate) / 100;
    const termNum = parseInt(values.term);
    const mortgage = calculateMortgage(loanBalance, interestRateNum, termNum);
    console.log(mortgage);
  }

  return (
    <div className="App">
      <div className="title">Mortgage Calculator</div>

      <form className="form" onSubmit={ runCalculation }>
        <div className="home-value-container">
          <p className="home-value-title">Home Value ($)</p>
          <input 
            type="text" 
            placeholder="350000" 
            className="home-value-input"
            name="homeValue"
            value={ values.homeValue }
            onChange={ handleChange } />
        </div>
        <div className="down-payment-container">
          <p className="down-payment-title">Down Payment ($)</p>
          <input 
            type="text"
            placeholder="70000"
            className="down-payment-input"
            name="downPayment"
            value={ values.downPayment }
            onChange={ handleChange } />
        </div>
        <div className="interest-rate-container">
          <p className="interest-rate-title">Interest Rate (%)</p>
          <input 
            type="text"
            placeholder="5"
            className="interest-rate-input"
            name="interestRate"
            value={ values.interestRate }
            onChange={ handleChange } />
        </div>
        <div className="term-container">
          <p className="term-title">Loan Term (Years)</p>
          <input 
            type="text"
            placeholder="30"
            className="term-input"
            name="term"
            value={ values.term }
            onChange={ handleChange } />
        </div>
        <input type="submit" value="Submit" className="fomr-submit" />
      </form>
    </div>
  );
}

export default App;
