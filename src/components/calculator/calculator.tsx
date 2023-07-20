'use client'
import { CalculatorFunctionProvider } from "./calculatorFunctions"
import { CalculatorThemeProvider } from "./calculatorThemeProvider"
import CalculatorHeader from "./calculatorTheme"
import CalculatorDisplay from "./calculatorDisplay"
import CalculatorButtons from "./calculatorButtons"

export default function Calculator() {
 return (
  <CalculatorThemeProvider>
   <CalculatorFunctionProvider>
    <CalculatorHeader />
    <CalculatorDisplay />
    <CalculatorButtons />
   </CalculatorFunctionProvider>
  </CalculatorThemeProvider>
 )
}