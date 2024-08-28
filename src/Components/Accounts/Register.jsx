import React, { useState } from 'react';
import './Register.css';
//import { NavLink } from 'react-router-dom';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';
// import Login_image from "../Account/login.png";

const Register = () => {
const[username,setUsername]=useState("")
const[email,setEmail]=useState("")
const[password,setPassword]=useState("")
const[confirmpassword,setConfirmpassword]=useState("")

const navigate=useNavigate()
const handleRegister=()=>{
  if(!username||!email||!password||!confirmpassword){
    return
  }else if(confirmpassword!==password){
    alert("Passowrd and confirm password doesn't match. Provide same password.")
    return
  }else{
    navigate('/')
  }
  
}
 return (
  <div className="Account">
    <div className="continer">
      <div className="formComponent">
        <div className="title">
          <h3>Register</h3>
        </div>
        <div className="form">
          <TextField
            id="standard-basic"
            label="Username"
            type="text"
            variant="standard"
            required
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
          />
          <TextField
            id="standard-basic"
            label="Email"
            type="text"
            variant="standard"
            required
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <TextField
            id="standard-basic"
            label="Password"
            type="password"
            variant="standard"
            required
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
           <TextField
            id="standard-basic"
            label="Confirm Password"
            type="password"
            variant="standard"
            required
            value={confirmpassword}
            onChange={(e)=>setConfirmpassword(e.target.value)}
          />
        </div>
        <div className="para">
            <p>
              Already have an Account ? <a href='./'>Login</a>
            </p>
          </div>
        <div className="button">
          <Button variant="contained" disabled={!username||!email||!password||!confirmpassword} onClick={handleRegister}>Register</Button>
        </div>
      </div>
      <div className="imageComponent">
        <img src="" style={{
          height: "360px"
        }} alt="login-img"></img>
      </div>
    </div>
  </div>
  )
}

export default Register