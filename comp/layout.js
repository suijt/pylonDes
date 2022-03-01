import Footer from "../pages/Footer"
import Header from "../pages/header"

const Layout=({children})=>{
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
export default Layout