import React, { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";
import BASE_URL from "../configuration/Config";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Resetpassword = () => {
  
const nav = useNavigate();
const [oldpassword,setOldpassword] = useState("")
const [newpassword,setNewpassword] = useState("")
const [repassword,setRepassword] = useState("")



  const handleSubmit=async()=>{
    let id = localStorage.getItem("userid")
    

    try {

      let api = `${BASE_URL}/Banking/resetpass`;
    let response = await axios.post(api, {custId:id, oldpassword:oldpassword, newpassword:newpassword,repassword:repassword})
    
   toast.success(response.data.msg);
    
    } catch (error) {
  
     toast.error(error.response.data.msg)
    }
    
  }

  return (
    <>
    <div id="bal">
    <h2 className="resetpass-head">Password Reset</h2>
    <label id="label" className="addmoney-label">
    Enter old Password 
    </label>
   <input   style={{ width: "100%", padding: "10px", marginTop: "10px" }}
          id="inp" type="password" value={oldpassword} onChange={(e)=>{setOldpassword(e.target.value)}} />
    <label id="label" className="addmoney-label">
    Enter new Password 
    </label><input   style={{ width: "100%", padding: "10px", marginTop: "10px" }}
          id="inp" type="password"  value={newpassword} onChange={(e)=>{setNewpassword(e.target.value)}} />
   <label id="label" className="addmoney-label">
    Confirm new Password 
    </label><input   style={{ width: "100%", padding: "10px", marginTop: "10px" }}
          id="inp" type="password"  value={repassword} onChange={(e)=>{setRepassword(e.target.value)}} />

   <button id="button1"  style={{
      width: "100%",
      padding: "10px",
      marginTop: "20px",
      fontSize: "1rem",
    }} onClick={handleSubmit}>Change Password</button>
   </div>
      <ToastContainer />
    </>
  );
};

export default Resetpassword;