import Button from 'react-bootstrap/Button';

import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import BASE_URL from '../configuration/Config';



const Login=()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate= useNavigate();

   const handleSubmit=async(e)=>{
    e.preventDefault();
    let api=`${BASE_URL}/Banking/customerlogin`;

    try {
          const response = await axios.post(api, {email:email, password:password});
          console.log(response.data); 
        
          
          toast.success("You are Succesfully login!");
          navigate("/home");
 
    } catch (error) {
        toast.error(error.response.data.msg);
        
    }

   }


    return(
        <>
      
      <div id='build3'>    
      
       
      <h1 style={{color:"black",marginLeft:"200px",marginBottom:"20px",marginTop:"20px"}}>LOGIN</h1>
     
      <h6 style={{maxWidth:"500px",marginLeft:"200px",marginBottom:"20px",color:"grey"}}>Dont'worry your details are safe with us</h6>
     
      <div style={{display:"grid", gridTemplateColumns:"1fr 1fr",width:"70%",margin:"auto"}}>
     
      <div>
      <label id='label' htmlFor="">Email </label><br />
      <input id='inp'type="email" name="email" value={email} 
        onChange={(e)=>{setEmail(e.target.value)}}  placeholder='  e.g Johndoe123@gmail.com'/> <br />
      </div>

   



<div>      <label id='label' htmlFor="">PASSWORD </label><br />
      <input id='inp'
        type="password" name="password" value={password}
        onChange={(e)=>{setPassword(e.target.value)}}  placeholder='  e.g +91 JohnD#123'/> <br />
      </div>
      </div>

      <Button id='bt1'     style={{backgroundColor:" rgb(90, 9, 17)",marginLeft:"200px",marginTop:"30px"}} type="submit" onClick={handleSubmit}>
        Submit
      </Button>
      </div>
  
  

    <ToastContainer />
        </>
    )
}

export default Login;




     