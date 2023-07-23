import { useCalculatorContext } from '../context/calculatorProvider'
import { numbers, buttons } from "../data/keys"
import styles from '../style/calculator.module.css'

export default function CalculatorButtons() {
 const { numberInput, operatorInput } = useCalculatorContext()

 return (
  <form id={styles.input} className={styles.input}>
   {numbers.map((str) => (
    <input 
     type="button" 
     key={str} 
     value={str}
     onClick={numberInput}
    />
   ))}
   {Object.values(buttons).map(obj => (
    <input 
     type="button" 
     key={obj.value} 
     value={obj.value}
     className={obj.name && styles[obj.name]}
     style={obj.css}
     onClick={operatorInput}
    />
   ))}
  </form>
 )
}