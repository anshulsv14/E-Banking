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
          navigate("/dashboard");
          localStorage.setItem("username" , response.data.name)
          localStorage.setItem("userid" , response.data._id)
          localStorage.setItem("email" , response.data.email)
 
    } catch (error) {
        toast.error(error.response.data.msg);
        
    }

   }


    return(
        <>
      
      <div id="build3">
      <h1 className="title">LOGIN</h1>
      <h6 className="subtitle">Don't worry, your details are safe with us</h6>

      <div id="form-grid">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="e.g Johndoe123@gmail.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">PASSWORD</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="e.g JohnD#123"
          />
        </div>
      </div>
    

      <Button id='bt1'     style={{backgroundColor:" rgb(90, 9, 17)",marginTop:"30px"}} type="submit" onClick={handleSubmit}>
        Submit
      </Button>
      </div>
  
    
    

    <ToastContainer />
        </>
    )
}

export default Login;




     