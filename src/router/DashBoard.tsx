import { Routes,Route} from "react-router-dom";
import Navbar from '../layouts/Navbar'
import Home from "../pages/Home";
import SingUp from "../pages/SingUp";

const DashBoard = () => {
  return (
    <>
     <Navbar/>
     <Routes>
        <Route path="singUp" element={<SingUp />} />
        <Route path="/" element={<Home />} />
       
      </Routes>
    </>
  )
}

export default DashBoard