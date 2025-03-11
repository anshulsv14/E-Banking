

import { Outlet } from "react-router-dom";
import Topnav from "./components/Topnav";
import Footer from "./components/Footer";



const Layout=()=>{
    return(
        <>
           <Topnav/>
            <Outlet/>
         <Footer/>
          
        </>
    )
}

export default Layout;
