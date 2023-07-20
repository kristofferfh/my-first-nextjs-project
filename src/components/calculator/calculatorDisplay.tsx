import { useCalculatorContext } from './calculatorFunctions'
import style from './calculator.module.css'


export default function CalculatorDisplay() {
 const { memory, input, operator } = useCalculatorContext()
  
 return (
  <div id={style.display}>
   <div id={style.history}>{memory ? memory : "History is empty"} {operator}</div>
   <div id={style.output}>{input === "0" && memory !== "" ? memory : input}</div>
  </div>
 )
}