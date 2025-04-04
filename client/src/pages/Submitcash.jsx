import React from "react";
import axios from "axios";
import { useState } from "react";
import BASE_URL from "../configuration/Config";
import { ToastContainer, toast } from "react-toastify";
const Submitcash = () => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(false);
  const customerid = localStorage.getItem("userid");
  console.log(customerid);
  const handlesubmit = async () => {
    let api = `${BASE_URL}/Banking/transaction`;
    const res = await axios.post(api, {
      amount: amount,
      status: "credit",
      description: status == true ? description : "Add to Cash",
      customerid: customerid,
    });
    toast.success("Cash successfully credited");
    console.log(res);
    setAmount("");
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
    console.log(description);
    setStatus(true);
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
  <h1 style={{ fontSize: "1.5rem" }}>Deposit Amount with One Click</h1>
  <div>
    <label id="label" htmlFor="inp">
      Enter Deposit Amount
    </label>
    <br />
    <input
      id="inp"
      type="text"
      name="amount"
      style={{ width: "100%", padding: "10px", marginTop: "10px" }}
      onChange={(e) => {
        setAmount(e.target.value);
      }}
    />
  </div>
  <div style={{ marginTop: "20px" }}>
    <label id="label" className="addmoney-label">
      Enter Description (Optional)
    </label>
    <div>
      <input
        id="inp"
        type="text"
        value={description}
        name="description"
        style={{ width: "100%", padding: "10px", marginTop: "10px" }}
        onChange={handleDescription}
      />
    </div>
  </div>
  <button
    id="button1"
    style={{
      width: "100%",
      padding: "10px",
      marginTop: "20px",
      fontSize: "1rem",
    }}
    onClick={handlesubmit}
  >
    Deposit
  </button>
</div>

    </>
  );
};

export default Submitcash;
