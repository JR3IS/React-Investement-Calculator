import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Table({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  // Parse inputs as numbers
  const parsedInitialInvestment = parseFloat(initialInvestment) || 0;
  const parsedAnnualInvestment = parseFloat(annualInvestment) || 0;
  const parsedExpectedReturn = parseFloat(expectedReturn) || 0;
  const parsedDuration = parseInt(duration, 10) || 0;

  // Calculate the investment results
  const calculatedResults = calculateInvestmentResults({
    initialInvestment: parsedInitialInvestment,
    annualInvestment: parsedAnnualInvestment,
    expectedReturn: parsedExpectedReturn,
    duration: parsedDuration,
  });

  // Calculate the initial investment
  const initialCapital =
    calculatedResults[0].valueEndOfYear -
    calculatedResults[0].interest -
    calculatedResults[0].annualInvestment;

  return (
    <table id='result'>
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {calculatedResults.map((result) => {
          /* Calculate Total Interest */
          const totalInterest =
            result.valueEndOfYear -
            result.annualInvestment * result.year -
            initialCapital;
          /* Calculate Total Amount Invested */
          const totalAmountInvested = result.valueEndOfYear - totalInterest;

          return (
            <tr key={result.year}>
              <td>{result.year}</td>
              <td>{formatter.format(result.valueEndOfYear)}</td>
              <td>{formatter.format(result.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
