import { createContext, useContext, useState, FC, ReactNode } from "react"
import themes from './calculatorTheme.module.css'
import style from './calculator.module.css'

type CalculatorThemeType = "theme1" | "theme2" | "theme3"

interface CalculatorThemeInterface {
 theme: string,
 setTheme: (fn:any) => void
}

const CalculatorThemeContext = createContext<CalculatorThemeInterface>(
 {
  theme: "",
  setTheme(){}
 }
)

interface CalculatorThemeProviderInterface {
 children: ReactNode;
}

const CalculatorThemeProvider: FC<CalculatorThemeProviderInterface> = ({ children }) => {
 const [theme, setTheme] = useState<string>(themes.theme1)
 // future addition: tie theme choice to local storage for persistance

 console.log(typeof themes.theme1)
 return (
  <CalculatorThemeContext.Provider value={{ theme, setTheme }}>
   <div id={style.wrapper}  className={theme}>
    <div id={style.calculator}>
     {children}
    </div>        
   </div>
  </CalculatorThemeContext.Provider>
 )
}

const useCalculatorThemeContext = () => useContext(CalculatorThemeContext)
export {CalculatorThemeProvider,useCalculatorThemeContext}