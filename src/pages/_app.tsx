import type { AppProps } from "next/app"
import Header from "@/components/layout/header/header"
import Footer from "@/components/layout/footer/footer"
import "../styles/globals.css"

function MyApp({Component, pageProps}:AppProps) {
 return (
  <>
  <Header />
  <main>
   <Component {...pageProps} />
  </main>
  <Footer />
  </>
 )
}
export default MyApp