import React from "react";
import { useState } from "react";
import BASE_URL from "../configuration/Config";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
const Withdraw = () => {
  const [gif, setGif] = useState(false);
  const [amount, setAmount] = useState("");
  const [bal,setBal]=useState("")

  const customerid = localStorage.getItem("userid");
  const handlesubmit = async () => {
    let api = `${BASE_URL}/Banking/transaction`;
    try {
      const res = await axios.post(api, {
        amount: amount,
        status: "debit",
        customerid: customerid,
        description: "cash withdraw"
      });
      
     
      setGif(true);
    } catch (error) {
      toast.error(error.res.data.msg);
    }
  
  };
  setTimeout(() => {
    setGif(false);
  }, 3000);
  return (
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
      <h1 style={{ fontSize: "1.5rem" }}>Withdrawal Amount with One Click</h1>
      <div>
        <label id="label" htmlFor="">
          Enter withdrawal Amount
        </label>
        <br />
        <input
         style={{ width: "100%", padding: "10px", marginTop: "10px" }}
          id="inp"
          type="text"
          name="amount"
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
        <button 
         style={{
      width: "100%",
      padding: "10px",
      marginTop: "20px",
      fontSize: "1rem",
    }} id="button1"
     onClick={handlesubmit}>
          withdraw
        </button>
      </div>
      {gif && (
        <div style={{ marginLeft: "20px", paddingTop: "10px" }}>
          {" "}
          <img src="/public/return bank GIF.gif" alt="" height="250px" />
        </div>
      )}
        <ToastContainer />
    </div>

  );
};

export default Withdraw;
