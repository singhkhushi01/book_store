import React, { useState } from 'react';
//import { NavLink } from 'react-router-dom';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';
// import Login_image from "../Account/login.png";


// npm i @mui/material
// npm i @emotion/styled
// npm i @emotion/react


const Account = () => {
  const[username,setUsername]=useState("")
  const[password,setPassword]=useState("")
  
  const navigate=useNavigate()

const handleLogin=()=>{
  navigate('/Dashboard')
}
  return (
    <div className="Account">
      <div className="continer">
        <div className="formComponent">
          <div className="title">
            <h3>Login</h3>
          </div>
          <div className="form">
            <TextField
              id="standard-basic"
              label="Username"
              type="text"
              variant="standard"
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
            />
            <TextField
              id="standard-basic"
              label="Password"
              type="password"
              variant="standard"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <div className="para">
            <p>
              Don't have an Account ? <a href='./Register'>Register</a>
            </p>
          </div>
          <div className="button">
            <Button variant="contained" disabled={!username||!password} onClick={handleLogin}>Login</Button>
          </div>
        </div>
        <div className="imageComponent">
          <img src="" style={{
            height: "360px"
          }} alt="login-img"></img>
        </div>
      </div>
    </div>
  );
}

export default Account