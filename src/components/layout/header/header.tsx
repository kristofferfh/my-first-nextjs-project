import Link from "next/link"
import style from "./header.module.css"

const Header = () => {
 return (
  <header className={style.header}>
   <div>
    <Link href="/calculator"></Link>
   </div>
   <nav className={style.nav}>
    <ul>
     <li>
      <Link href="/calculator">calculator</Link>
     </li>
     <li>
      <Link href="/wordle">wordle</Link>
     </li>
    </ul>
   </nav>
  </header>
 )
}

export default Header