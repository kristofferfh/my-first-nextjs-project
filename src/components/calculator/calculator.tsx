import { CalculatorProvider } from "./context/calculatorProvider"
import { ThemeProvider } from "./context/themeProvider"
import CalculatorHeader from "./theme/calculatorTheme"
import CalculatorDisplay from "./elements/calculatorDisplay"
import CalculatorButtons from "./elements/calculatorButtons"

const Calculator = () => {
 return (
  <ThemeProvider>
   <CalculatorProvider>
    <CalculatorHeader />
    <CalculatorDisplay />
    <CalculatorButtons />
   </CalculatorProvider>
  </ThemeProvider>
 )
}

export { Calculator }