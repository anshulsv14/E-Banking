
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registraion";
import Dashboard from "./pages/Dashboard";
import Submitcash from "./pages/Submitcash";
import Withdraw from "./pages/Withdraw";
import Balanceinquiry from "./pages/Balanceinquiry";
import Accountstatement from "./pages/Accountstatement";
import Resetpassword from "./pages/Resetpassword";
import Ministatement from "./pages/Ministatement";
import Accountdetails from "./pages/Accountdetails";





const App=()=>{
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/registration" element={<Registration/>}/>

        </Route>
      </Routes>
      <Routes>
      <Route path="/dashboard" element={<Dashboard/>}>
        <Route path="/dashboard/submit" element={<Submitcash/>}/>
        <Route path="/dashboard/withdraw" element={<Withdraw/>}/>
        <Route path="/dashboard/balanceinquiry" element={<Balanceinquiry/>}/>
        <Route path="/dashboard/accountstatement" element={<Accountstatement/>}/>
        <Route path="/dashboard/resetpassword" element={<Resetpassword/>}/>
        <Route path="/dashboard/ministatement" element={<Ministatement/>}/>
        <Route path="/dashboard/accountdetails" element={<Accountdetails/>}/>
      
      </Route>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App;
