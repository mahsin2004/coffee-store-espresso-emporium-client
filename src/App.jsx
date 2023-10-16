import { Outlet } from "react-router-dom"
import Navbar from "./component/Navbar"
import Footer from "./component/Footer"
import { Toaster } from "react-hot-toast"


function App() {


  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Toaster/>
      <Footer></Footer>
    </>
  )
}

export default App
