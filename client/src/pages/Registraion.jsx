

import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BASE_URL from '../configuration/Config';

const Registration = () => {
  const[input,setInput] = useState({})
  


  const handleInput=(e)=>{
    let name = e.target.name;
    let value = e.target.value;
    setInput(values=>({...values,[name]:value}))
    console.log(input)
  }



 const handleSubmit=async(e)=>{
     e.preventDefault();

     let api=`${BASE_URL}/Banking/registration`;
     try {
         const response = await axios.post(api, input);
         console.log(response);
         toast.success(response.data.msg);
       
     } catch (error) {
         console.log(error);
         toast.error(error.response.data.msg)

     }


     
 }
  return (
    <>
       
       
      
    <div id='build3'>    
      
       
      <h1 style={{color:"black",marginLeft:"200px",marginBottom:"20px",marginTop:"30px"}}>REGISTRATION</h1>
     
      <h6 style={{maxWidth:"500px",marginLeft:"200px",marginBottom:"20px",color:"grey"}}>We suggest including an email and phone number.</h6>
     
      <div style={{display:"grid", gridTemplateColumns:"1fr 1fr",width:"70%",margin:"auto"}}>
        <div>
      <label id='label' htmlFor="">FULL NAME</label><br />
      <input id='inp' type="text"   name="name" onChange={handleInput} placeholder='  e.g JohnDoe'/> <br />
      </div>
      <div>
      <label id='label' htmlFor="">Email </label><br />
      <input id='inp' type="text"   name="email" onChange={handleInput}  placeholder='  e.g Johndoe123@gmail.com'/> <br />
      </div>

      <div>
      <label id='label' htmlFor="">ADDRESS </label><br />
      <input id='inp' type="text"   name="address" onChange={handleInput}  placeholder='  e.g gali no. 3 pareshan mohalla'/> <br />
      </div>

      <div>
      <label id='label' htmlFor="">CITY </label><br />
      <input id='inp' type="text"  name='city'  onChange={handleInput} placeholder='  e.g Bhopal'/><br />
      </div>

      <div>
      <label id='label' htmlFor="">PINCODE </label><br />
      <input id='inp' type="text"  name='pincode'  onChange={handleInput} placeholder='  e.g 677865'/><br />
      </div>

<div>
      <label id='label' htmlFor="">STATE </label><br />
      <input id='inp' type="text"  name='state'  onChange={handleInput} placeholder='  e.g MadgyaPradesh'/> <br />
      </div>

     

      <div>      <label id='label' htmlFor="">MOBILE NO. </label><br />
      <input id='inp' type="text"  name="mobile" onChange={handleInput} placeholder='  e.g +91 7769823576'/> <br />
      </div>




      </div>

      <Button  id='bt1'     style={{backgroundColor:" rgb(90, 9, 17)",marginLeft:"200px",marginTop:"30px"}} type="submit" onClick={handleSubmit}>
        Submit
      </Button>
      </div>
      <ToastContainer />
    </>
  )
}

export default Registration
