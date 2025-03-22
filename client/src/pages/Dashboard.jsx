import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
 function Dashboard() {
  const nav = useNavigate();
  let username = localStorage.getItem("username")
  let email = localStorage.getItem("email")


  const logout = ()=>{
      navigate("/login")
      localStorage.clear()
     
  }
  useEffect(()=>{
      if(!localStorage.getItem("email"))
          {
              nav("/login")
          }
  },[])
  function navigate1 (){
    nav("/dashboard/submit")
  
  }
  function navigate2 (){
   
    nav("/dashboard/withdraw")
  
  }
  function navigate3 (){
  
    nav("/dashboard/balanceinquiry")
  }
  function navigate4 (){
  
    nav("/dashboard/accountstatement")
  }
  return (
    <>
    <div id="container">
      <div id="upperbar">
        <img src="/public/logo-with-text.png" alt="" />
        <div style={{display:"flex",gap:"10px"}}>
        <h1>welcome : </h1> <h1>{  username}</h1>
        </div>
        
        
      </div>
        <div id="section" style={{display:"flex"}}>
          <div id="leftbar" style={{width:"20%"}}>
            <button id="b1"  onClick={navigate1}>submit cash</button><br />
            <button  id="b1" onClick={navigate2}>withdraw cash</button><br />
            <button  id="b1" onClick={navigate3}>balance enquiry</button><br />
            <button  id="b1" onClick={navigate4}>Account statements</button><br />
            <button  id="b1" onClick={navigate3}>account details</button><br />
            <button  id="b1" onClick={navigate3}>reset password</button><br />
            <button  id="b1" onClick={logout}>logout</button>
          </div>
          <div id="rightbar" style={{width:"80%"}}>
            <div id="r1">
            <Outlet/>
          </div>
          </div>
                  </div>
        </div>
    </>
  );
}
export default Dashboard