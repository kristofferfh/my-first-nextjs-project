import { useCalculatorContext } from './calculatorFunctions'
import styles from './calculator.module.css'

export default function CalculatorButtons() {
 // instead of running an array with all buttons, I'm splitting it up to have some fun and learn more :)
 // this array would be simpler to render and use, but it's boring.
 // ["7","8","9","DEL","4","5","6","+","1","2","3","-",".","0","/","X","RESET","="]
 // In the case above I'd use a single function that handles all inputs and uses a switch case to compute.
 const { numberInput, operatorInput } = useCalculatorContext()

 interface iButtons {
  value: string,
  name?: string,
  css: {
   gridRow: string | number,
   gridColumn: string | number,
  }
 }

 const numbers = [7,8,9,4,5,6,1,2,3,0]
 const buttons: iButtons[] = [
  {
   value: "del",
   name: "delete",
   css: {gridRow: 1, gridColumn: 4},
  },{
   value: "reset",
   name: "reset",
   css: {gridRow: 5, gridColumn: 'span 2'},
  },{
   value: "=",
   name: "equals",
   css: {gridRow: 5, gridColumn: 'span 2'},
  },{
   value: "+",
   name: "plus",
   css: {gridRow: 2, gridColumn: 4},
  },{
   value: "-",
   name: "minus",
   css: {gridRow: 3, gridColumn: 4},
  },{
   value: "x",
   name: "multiply",
   css: {gridRow: 4, gridColumn: 4},
  },{
   value: "/",
   name: "divide",
   css: {gridRow: 4, gridColumn: 3},
  },{
   value: ".",
   name: "separator",
   css: {gridRow: 4, gridColumn: 1},
  }
 ]

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