import { useThemeContext } from '../context/themeProvider'
import theme from '../style/theme.module.css'
import style from '../style/calculator.module.css'

function ThemeSwitcher() {
 const { setTheme } = useThemeContext()

 return (
  <div id={style.themeSelectorContainer}>
   <div>
    <div>1</div>
    <div>2</div>
    <div>3</div>
   </div>
   <div className={style.themeSelector}>
    <div onClick={()=>setTheme(theme.theme1)}></div>
    <div onClick={()=>setTheme(theme.theme2)}></div>
    <div onClick={()=>setTheme(theme.theme3)}></div>
    <span></span>
   </div>
  </div>
 )
}

export default function CalculatorHeader() {
 return (
  <div id={style.header}>
   <h1>calc</h1>
   <div id={style.theme}>
    <div>theme</div>
    <ThemeSwitcher />
   </div>
  </div>
 )
}