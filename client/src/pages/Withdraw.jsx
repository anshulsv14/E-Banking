import React from 'react'
import { useState } from 'react'
import BASE_URL from '../configuration/Config'
import axios from 'axios'

const Withdraw = () => {
    const [gif,setGif] = useState(false)
    const [amount,setAmount] = useState("")
    
    const customerid = localStorage.getItem("userid")
    const handlesubmit = async()=>{
        let api=`${BASE_URL}/Banking/transaction`;
       const res =await axios.post(api,{amount:amount,status:"debit",customerid:customerid})
   
       setGif(true)
    }
    setTimeout(()=>{
      setGif(false)
    },3000)
  return (
    
      <div> 
        
        <h1 style={{marginBottom:"10px"}}>Withdrawal Amount with One Click</h1>
       <div id='bal'>
      
      <label id='label' htmlFor="">Enter withdrawal Amount</label><br />
      <input id='inp' type="text"   name="amount" onChange={(e)=>{setAmount(e.target.value)}}/> 
      <button id='button1' onClick={handlesubmit}>withdraw</button>
      </div>
      {gif && (
 <div style={{marginLeft:"20px",paddingTop:"10px"}}> <img  src="/public/return bank GIF.gif" alt="" height="250px"  /></div>
      )}
    
    </div>
    
  )
}

export default Withdraw
