import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import BASE_URL from '../configuration/Config'
const Submitcash = () => {
    const [amount,setAmount] = useState("")
    const customerid = localStorage.getItem("userid")
console.log(customerid)
    const handlesubmit = async()=>{
        let api=`${BASE_URL}/Banking/transaction`;
        const res = await axios.post(api,{amount:amount,status:"credit",customerid:customerid})
        alert("Amount credited successfully")
        console.log(res)
        setAmount("")
    }
  return (
    <div>
      <h1>Deposite Amount with One Click</h1>
       <div id='bal'>
      <label id='label' htmlFor="">Enter Deposite Amount</label><br />
      <input id='inp' type="text"   name="amount" onChange={(e)=>{setAmount(e.target.value)}}/> 
      <button id='button1' onClick={handlesubmit}>deposite</button>
      </div>
    </div>
  )
}

export default Submitcash
