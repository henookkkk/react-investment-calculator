import { calculateInvestmentResults } from "../util/investment"

export default function Results({input}) {
   const resultData = calculateInvestmentResults(input);
  return (
    <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest(Year)</th>
                <th>Total Investment</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
           {resultData.map((yearData)=>{
            return(
                <tr key={yearData.year}>
                    <td>{yearData.year}</td>
                    <td>{yearData.valueEndOfYear}</td>
                    <td>{yearData.interest}</td>
                    <td></td>
                    <td></td>
                </tr>
            )
           })}
        </tbody>
    </table>
  )
}
