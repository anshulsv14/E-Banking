import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
function Dashboard() {
  const nav = useNavigate();
  let username = localStorage.getItem("username");
  let email = localStorage.getItem("email");

  const logout = () => {
    nav("/login");
    localStorage.clear();
  };
  useEffect(() => {
    if (!localStorage.getItem("email")) {
      nav("/login");
    }
  }, []);
  function navigate1() {
    nav("/dashboard/submit");
  }
  function navigate2() {
    nav("/dashboard/withdraw");
  }
  function navigate3() {
    nav("/dashboard/balanceinquiry");
  }
  function navigate4() {
    nav("/dashboard/accountstatement");
  }
  function navigate6() {
    nav("/dashboard/resetpassword");
  }
  function navigate7() {
    nav("/dashboard/ministatement");
  }
  function navigate5() {
    nav("/dashboard/accountdetails");
  }
  return (
    <>
     

<div className="container">
      {/* Upper Bar */}
      <div className="upperbar">
        <img src="/public/logo-with-text.png" alt="Logo" className="logo" />
        {/* <div className="welcome-text">
          <h1>Welcome:</h1>
          <h1 className="username">{username}</h1>
        </div> */}
      </div>
      
      {/* Main Section */}
      <div className="section">
        {/* Left Sidebar */}
        <div className="leftbar">
          <button className="nav-button" onClick={navigate1}>Submit Cash</button>
          <button className="nav-button" onClick={navigate2}>Withdraw Cash</button>
          <button className="nav-button" onClick={navigate3}>Balance Enquiry</button>
          <button className="nav-button" onClick={navigate4}>Account Statements</button>
          <button className="nav-button" onClick={navigate7}>Mini Statements</button>
          <button className="nav-button" onClick={navigate5}>Account Details</button>
          <button className="nav-button" onClick={navigate6}>Reset Password</button>
          <button className="logout-button" onClick={logout}>Logout</button>
        </div>
        
        {/* Right Content Area */}
        <div className="rightbar">
          <Outlet />
        </div>
      </div>
    </div>
    </>
  );
}
export default Dashboard;
