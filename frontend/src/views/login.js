import React, {useState} from 'react'
import {
  Link, useNavigate
} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

export default function Login() {

  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");

  const navigate = useNavigate();
  const ExpenseLogin = async(e)=>{
    e.preventDefault()
    if(!username||!password){
      alert("data missing");
    }

    const loginData = {
      username,
      password,
    };

    try {
      const response = await fetch('http://localhost:5000/api/user/login', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      
        body: JSON.stringify(loginData),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        // alert('Successful Login!');
        toast.success('Signed in Successfully');
        setTimeout(() => {
          navigate('/home');
      }, 2200);
      } else {
        // alert(result.message || 'Something went wrong!');
        toast.error('Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.error("Error:", error);
      alert('error in frontend');
    }

  }

  return (
    <div className='loginpage p-5 bg-secondary-subtle' style={{height:"100vh"}}>
      <div className='box border p-4 bg-white'style={{marginLeft:"410px", marginTop:"80px", width:"450px "}}>
    <h4 className='pt-1' style={{paddingLeft:"140px"}}>Login Page</h4>
  <form className="" onSubmit={ExpenseLogin} >
    <div className="mb-3">
      <label htmlFor="exampleDropdownFormUserName1" className="form-label">Username:</label>
      <input type="text" className="form-control" id="username" placeholder="Enter Username" style={{width:"400px"}} value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleDropdownFormPassword1" className="form-label">Password:</label>
      <input type="password" className="form-control" id="password" placeholder="Enter Password" style={{width:"400px"}} value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
    </div>

    <button type="submit" className="btn btn-success" style={{width:"400px"}}>Sign in</button>
  </form>

  <Link className="d-flex justify-content-center" to="/register" style={{textDecoration:'underline',paddingTop:"20px" }}>New user? Register here</Link>
  
{/* </div> */}

    </div>
    <ToastContainer position="top-right" autoClose={1600} hideProgressBar={false} />
    </div>
  )
}
