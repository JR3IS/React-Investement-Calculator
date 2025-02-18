import { useState } from "react";
import Header from "./components/Header";
import Table from "./components/Table";
import UserInput from "./components/UserInput";

function App() {
  // Store the values of the InputBoxes
  const [initialInvestment, setInitialInvestment] = useState("12000");
  const [annualInvestment, setAnnualInvestment] = useState("1500");
  const [expectedReturn, setExpectedReturn] = useState("6");
  const [duration, setDuration] = useState("10");

  const inputIsValid = duration >= 1;

  return (
    <>
      <Header
        title='Investment Calculator'
        imageSrc={"src\\assets\\investment-calculator-logo.png"}
        alt='App Logo'
      />

      <UserInput
        initialInvestment={initialInvestment}
        setInitialInvestment={setInitialInvestment}
        annualInvestment={annualInvestment}
        setAnnualInvestment={setAnnualInvestment}
        expectedReturn={expectedReturn}
        setExpectedReturn={setExpectedReturn}
        duration={duration}
        setDuration={setDuration}
      />

      {!inputIsValid && (
        <p className='center'>Please enter a duration greater than zero.</p>
      )}
      {inputIsValid && (
        <Table
          initialInvestment={initialInvestment}
          annualInvestment={annualInvestment}
          expectedReturn={expectedReturn}
          duration={duration}
        />
      )}
    </>
  );
}

export default App;
