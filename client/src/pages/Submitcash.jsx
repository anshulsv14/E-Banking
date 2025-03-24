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
    <div
      id="bal"
      style={{
        width: "700px",
        margin: "auto",
        textAlign: "center",
        marginTop: "50px",
      }}
    >
      <h1>Deposite Amount with One Click</h1>
      <div>
        <label id="label" htmlFor="">
          Enter Deposite Amount
        </label>
        <br />
        <input
          id="inp"
          type="text"
          name="amount"
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
      </div>
      <div>
        <label id="label" className="addmoney-label">
          Enter Description (Optional)
        </label>
        <div>
          <span className="currency-symbol"></span>
          <input
            id="inp"
            type="text"
            value={description}
            name="description"
            onChange={handleDescription}
          />
        </div>
      </div>
      <button id="button1" onClick={handlesubmit}>
        deposite
      </button>
      <ToastContainer />
    </div>
  );
};

export default Submitcash;
