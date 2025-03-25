import React from "react";
import { useState } from "react";
import BASE_URL from "../configuration/Config";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
const Resetpassword = () => {
  const [input, setInput] = useState({});
  const id = localStorage.getItem("userid");

  const handleinput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(input);
    setInput({ ...input, [name]: value });
  };
  const handlesubmit = async () => {
    try {
      const api = `${BASE_URL}/Banking/passwordreset`;
      const res = await axios.post(api, { ...input, customerid: id });
      toast.success(res.data.msg);
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };
  return (
    <>
      <div
        id="bal"
        style={{
          maxWidth: "700px",
          width: "90%",
          margin: "auto",
          textAlign: "center",
          marginTop: "50px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <h2>Reset Password</h2>
        <label id="label" htmlFor="">
          Enter Old Password
        </label>
        <br />
        <input  style={{ width: "100%", padding: "10px", marginTop: "10px" }}
         id="inp" type="text" name="oldpassword" onChange={handleinput} />
        <br />
        <label id="label" htmlFor="">
          Enter New Password
        </label>
        <br />
        <input
         style={{ width: "100%", padding: "10px", marginTop: "10px" }}
          id="inp" type="text" name="newpassword" onChange={handleinput} />
        <br />
        <label id="label" htmlFor="">
          Confirm New Password
        </label>
        <br />
        <input
         style={{ width: "100%", padding: "10px", marginTop: "10px" }}
          id="inp"
          type="text"
          name="confirmnewpassword"
          onChange={handleinput}
        />
        <br />
        <button 
         style={{
          width: "100%",
          padding: "10px",
          marginTop: "20px",
          fontSize: "1rem",
        }}
         id="button1" onClick={handlesubmit}>
          reset password
        </button>
      </div>
      <ToastContainer />
    </>
  );
};

export default Resetpassword;
