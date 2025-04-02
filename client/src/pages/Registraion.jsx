import React, { useState } from "react";
import Button from "react-bootstrap/Button";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BASE_URL from "../configuration/Config";

const Registration = () => {
  const [input, setInput] = useState({});

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
    console.log(input);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let api = `${BASE_URL}/Banking/registration`;
    try {
      const response = await axios.post(api, input);
      console.log(response);
      toast.success(response.data.msg);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    }
  };
  return (
    <>
      

        <div id="build3">
      <h1 className="title">REGISTRATION</h1>
      <h6 className="subtitle">
        We suggest including an email and phone number.
      </h6>

      <div id="form-grid">
        <div className="form-group">
          <label htmlFor="name">FULL NAME</label>
          <input
            type="text"
            name="name"
            onChange={handleInput}
            placeholder="e.g John Doe"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">EMAIL</label>
          <input
            type="email"
            name="email"
            onChange={handleInput}
            placeholder="e.g Johndoe123@gmail.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">ADDRESS</label>
          <input
            type="text"
            name="address"
            onChange={handleInput}
            placeholder="e.g gali no. 3 pareshan mohalla"
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">CITY</label>
          <input
            type="text"
            name="city"
            onChange={handleInput}
            placeholder="e.g Bhopal"
          />
        </div>

        <div className="form-group">
          <label htmlFor="pincode">PINCODE</label>
          <input
            type="text"
            name="pincode"
            onChange={handleInput}
            placeholder="e.g 677865"
          />
        </div>

        <div className="form-group">
          <label htmlFor="state">STATE</label>
          <input
            type="text"
            name="state"
            onChange={handleInput}
            placeholder="e.g Madhya Pradesh"
          />
        </div>

        <div className="form-group">
          <label htmlFor="mobile">MOBILE NO.</label>
          <input
            type="text"
            name="mobile"
            onChange={handleInput}
            placeholder="e.g +91 7769823576"
          />
        </div>
      </div>
      <Button
          id="bt1"
          style={{
            backgroundColor: " rgb(90, 9, 17)",
           
            marginTop: "30px",
            margin:"auto"
          }}
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </Button>
    </div>

       
      
      <ToastContainer />
    </>
  );
};

export default Registration;
