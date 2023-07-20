import { createContext,useContext,useState,FC,ReactNode } from "react";
// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/context/
// https://react.dev/reference/react/createContext
// https://legacy.reactjs.org/docs/context.html

type CalculatorContextType = {
 memory: string
 input: string
 operator: string
 numberInput: (e: any) => void
 operatorInput: (e: any) => void
}

type CalculatorProviderChildren = {
 children: ReactNode
}

const CalculatorContext = createContext<CalculatorContextType>(
 {
  memory: "",
  input: "",
  operator: "",
  numberInput(){},
  operatorInput(){},
 }
)

const CalculatorFunctionProvider: FC<CalculatorProviderChildren> = ({ children }) => {
 const [memory, setMemory] = useState("")
 const [input, setInput] = useState("0")
 const [operator, setOperator] = useState("")

 const numberInput = (e: any) => {
  if (input === "0" && e.target.value === "0") {
   return
  }
  if (input.length < 15 ) {
   setInput(input === "0" ? e.target.value : input + e.target.value)
  } else {
   console.log("this calculator only supports 15 digits");
  }
 }

 /**
  * Decides on which operation to handle based on onclick event
  * @param e
  */
 const operatorInput = (e: any) => {
  switch (e.target.value) {
   case "+": 
   case "-":
   case "/":
   case "x":
    setOperator(e.target.value)
    calculateResult()   
    return
   case ".":
    setInput(input.replace(/\./g,'')+".")
    // flytt til number innput og fixx 0.001 = 0001.
    return
   case "del":
    input.length > 1 ? setInput((input) => input.slice(0,-1)) : setInput("0")
    return
   case "reset":
    setMemory("")
    setInput("0")
    setOperator("")
    return
   case "=":
    calculateResult()
    return 
   default: console.log("You have entered an unrecognized character that the calculator cant handle")
  }
 }

 /**
  * Handles calculation based on the operator selected
  * @param prev memory
  * @param curr input
  * @param operator operation
  * @returns string
  */
 const calculateSolve = (prev:any, curr:any, operator:any) => {
  let result
  switch (operator) {
   case "+": result = prev*1 + curr*1; break;
   case "-": result = prev*1 - curr*1; break;
   case "/": result = prev*1 / curr*1; break;
   case "x": result = prev*1 * curr*1; break;
   default: result = curr*1; break;
  }  
  return result.toString()
 }

 const calculateResult = () =>  {
  if (memory === "") {
   setMemory(input)
   setInput("0")
  }
  if (operator !== "") {
   setMemory(calculateSolve(memory, input, operator))
   setInput("0")
   setOperator("")
  }
  //console.log(`memory:${memory} operator:${operator} input:${input} = ${result}`);
 }

 return (
  <CalculatorContext.Provider value={{ memory, input, operator, numberInput, operatorInput }}>
   { children }
  </CalculatorContext.Provider>
 )
}

const useCalculatorContext = () => useContext(CalculatorContext)
export { CalculatorFunctionProvider, useCalculatorContext }