import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";

import { toast } from "react-toastify";
import BASE_URL from "../configuration/Config";

const Ministatement = () => {
  const [fromDate, setFromDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const id = localStorage.getItem("userid");
  const [ministatement, setMinistatement] = useState([]);

  const handleSubmit = async () => {
    let api = `${BASE_URL}/Banking/ministatement`;

    try {
      let response = await axios.post(api, {
        custid: id,
        fromDate: fromDate,
        endDate: endDate,
      });
      setMinistatement(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
      toast.error(error.response.data, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "dark",
      });
    }
  };

  let ans = ministatement.map((key) => {
    return (
      <>
        <tr>
          <td>
            {new Date(key.date).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </td>
          <td>{key.description}</td>
          <td style={{ color: "red" }}>
            {key.status === "debit" ? key.amount : ""}
          </td>
          <td style={{ color: "green" }}>
            {key.status === "credit" ? key.amount : ""}
          </td>
        </tr>
      </>
    );
  });
  return (
    <>
      <div
        id="bal"
        style={{
          width: "700px",
          margin: "auto",
          textAlign: "center",
          marginTop: "50px",
          marginBottom: "20px",
        }}
      >
        <h1 className="mini-head" style={{ marginBottom: "20px" }}>
          Mini Statement
        </h1>
        <div className="ministate">
          <div className="dates">
            <h3>
              {" "}
              from:{" "}
              <input
                id="inp"
                type="date"
                value={fromDate}
                onChange={(e) => {
                  setFromDate(e.target.value);
                }}
              />
            </h3>
            <h3>
              {" "}
              to:{" "}
              <input
                id="inp"
                type="date"
                value={endDate}
                onChange={(e) => {
                  setEndDate(e.target.value);
                }}
              />
            </h3>
          </div>
          <button
            id="button1"
            onClick={handleSubmit}
            className="ministate-button"
          >
            Get Statement
          </button>
        </div>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Transation Date</th>
            <th>Description</th>
            <th>Debited Money</th>
            <th>Credited Money</th>
          </tr>
        </thead>
        <tbody>{ans}</tbody>
      </Table>
    </>
  );
};

export default Ministatement;
