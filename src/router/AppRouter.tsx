
import { Routes,Route,BrowserRouter} from "react-router-dom";

import Login from "../pages/Login";
import DashBoard from './DashBoard';


const AppRouter: React.FC= () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<DashBoard />} />
      </Routes>
  </BrowserRouter>
  )
}

export default AppRouter