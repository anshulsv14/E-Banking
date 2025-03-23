import React from 'react'
import { useState } from 'react'
import BASE_URL from '../configuration/Config'
import axios from 'axios'
const Resetpassword = () => {
  const [input,setInput ] = useState({})
  const id = localStorage.getItem("userid")
  const handleinput = (e)=>{
    const name = e.target.name
    const value = e.target.value
    console.log(input)
    setInput({...input,[name]:value})
  
  }
  const handlesubmit = async()=>{
       const api = `${BASE_URL}/Banking/passwordreset`;
       const res = await axios.post(api,{oldpassword:oldpassword,newpassword:newpassword,confirmnewpassword:confirmnewpassword});
       

  }
  return (
   <>
   <label id='label' htmlFor="">Enter Old Password</label><br />
    <input id='inp' type="text" name="oldpassword" value={input.oldpassword} onChange={handleinput}/><br />
    <label id='label' htmlFor="">Enter New Password</label><br />
    <input id='inp' type="text" name="newpassword" value={input.newpassword} onChange={handleinput}/><br />
    <label id='label' htmlFor="">Confirm New Password</label><br />
    <input id='inp' type="text" name="confirmnewpassword" value={input.confirmnewpassword} onChange={handleinput}/><br />
    <button onClick={handlesubmit}>reset password</button>
   </>
  )
}

export default Resetpassword
