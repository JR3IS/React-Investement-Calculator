import InputBox from "./inputBox";

export default function UserInput({
  initialInvestment,
  setInitialInvestment,
  annualInvestment,
  setAnnualInvestment,
  expectedReturn,
  setExpectedReturn,
  duration,
  setDuration,
}) {
  // Update the values stored in the state variables when the input changes
  function handleChange(event, setState) {
    setState(event.target.value);
  }
  return (
    <div id='user-input'>
      <div className='input-group'>
        <InputBox
          label='Initial Investment'
          value={initialInvestment}
          onChange={(event) => handleChange(event, setInitialInvestment)}
        />
        <InputBox
          label='Annual Investment'
          value={annualInvestment}
          onChange={(event) => handleChange(event, setAnnualInvestment)}
        />
        <InputBox
          label='Expected Return'
          value={expectedReturn}
          onChange={(event) => handleChange(event, setExpectedReturn)}
        />
        <InputBox
          label='Duration'
          value={duration}
          onChange={(event) => handleChange(event, setDuration)}
        />
      </div>
    </div>
  );
}
