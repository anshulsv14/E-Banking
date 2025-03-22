import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import axios from "axios";
import BASE_URL from "../configuration/Config";


const Accountstatement = () => {
  const [statement, setStatement] = useState([]);
 


  const loadData = async () => {
   

    try {
        const api = `${BASE_URL}/Banking/accstatement/?userid=${localStorage.getItem("userid")}`;
      let response = await axios.post(api);
      console.log(response.data);
      setStatement(response.data);
     
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);



  return (
    <>
      <Table striped bordered hover>
      <thead>
        <tr>
         
          <th>Transation Date</th>
          <th>Debited Money</th>
          <th>Credited Money</th>
        </tr>
      </thead>
        <tbody>
          {statement.map((key) => (
            
            <tr>
                
              
             <td>{new Date(key.date).toLocaleDateString()}</td>
              <td style={{color:"red"}}>{key.status === "debit" ? key.amount :""}</td>
              <td style={{color:"green"}}>{key.status === "credit" ? key.amount :""}</td>
            </tr>
))}
        </tbody>
      </Table>
      
         
  

    </>
  );
};

export default Accountstatement;