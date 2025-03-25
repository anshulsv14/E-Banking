import React, { useEffect, useState } from 'react'

import axios from 'axios';
import BASE_URL from '../configuration/Config';


const Accountdetails = () => {

  const [mydata, setMydata] = useState([]);


  const id = localStorage.getItem("userid")

  const loadData = async()=>{
    let api = `${BASE_URL}/Banking/accInfo`;

    try {

      const response = await axios.post(api, {custid:id})  
      setMydata(response.data)
      
      
    } catch (error)
    {
      console.log(error);
      
    }
  }

  


 useEffect(()=>{
  loadData();
 },[])

if (!mydata) {
    return <div className="loading">Loading account details...</div>;
  }
 

  return (
    <>
     {/* <div id='bal' style={{width:"700px",margin:"auto",textAlign:"center",marginTop:"50px"}}>
    <div className="account-page">
      <h2 className="account-title">Account Information</h2>
      <div className="account-info">
        <p><span>Account Number:</span> {mydata.account}</p>
        <p><span>IFSC Number:</span> PPB00001133422</p>
        <p><span>Account Holder Name:</span> {mydata.name} </p>
        <p><span>Email:</span> {mydata.email}</p>
        <p><span>Mobile No:</span> {mydata.mobile}</p>
        <p><span>Address:</span> {mydata.address}</p>
        <p><span>City:</span> {mydata.city}</p>
      </div>
    </div> 
    </div> */}

<div className="account-container">
      <div className="account-page">
        <h2 className="account-title">Account Information</h2>
        <div className="account-info">
          <p><span>Account Number:</span> {mydata.account}</p>
          <p><span>IFSC Number:</span> PPB00001133422</p>
          <p><span>Account Holder Name:</span> {mydata.name}</p>
          <p><span>Email:</span> {mydata.email}</p>
          <p><span>Mobile No:</span> {mydata.mobile}</p>
          <p><span>Address:</span> {mydata.address}</p>
          <p><span>City:</span> {mydata.city}</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Accountdetails
