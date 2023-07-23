import { createContext, useContext, useState, FC, ReactNode } from "react"
import themes from '../style/theme.module.css'
import style from '../style/calculator.module.css'

type CalculatorThemeType = "theme1" | "theme2" | "theme3"

interface ThemeInterface {
 theme: string,
 setTheme: (fn:any) => void
}

const ThemeContext = createContext<ThemeInterface>(
 {
  theme: "",
  setTheme(){}
 }
)

interface ThemeProviderInterface {
 children: ReactNode;
}

const ThemeProvider: FC<ThemeProviderInterface> = ({ children }) => {
 const [theme, setTheme] = useState<string>(themes.theme1)
 // future addition: tie theme choice to local storage for persistance

 console.log(typeof themes.theme1)
 return (
  <ThemeContext.Provider value={{ theme, setTheme }}>
   <div id={style.wrapper}  className={theme}>
    <div id={style.calculator}>
     {children}
    </div>        
   </div>
  </ThemeContext.Provider>
 )
}

const useThemeContext = () => useContext(ThemeContext)
export {ThemeProvider,useThemeContext}