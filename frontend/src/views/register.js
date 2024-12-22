import React,{useState} from 'react'
import {
    Link
  } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function Register() {
 
  const [username, setUsername] = useState('');
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate=useNavigate();

  const CreateUser =async (e)=>{
    e.preventDefault()
    if(!username||!fullname||!email|| !password){
      alert("data missing");
    }

    const userData = {
      username,
     fullname,
      email,
      password,
    };

    try {
      const response = await fetch('http://localhost:5000/api/user/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        alert('User created successfully!');
        navigate('/home')
      } else {
        alert(result.message || 'Something went wrong!');
      }
    } catch (error) {
      console.error("Error:", error);
      alert('error in frontend');
    }
  };
  
   
  

  return (
    <div className=' p-5 bg-secondary-subtle' style={{height:"100vh"}}>
    <div className='box border bg-white container p-3' style={{marginLeft:"410px", marginTop:"20px", width:"450px "}}>
  <h4 style={{paddingLeft:"140px"}}>Registration</h4>
<form className="" onSubmit={CreateUser} >
  <div className="mb-3">
    <label htmlFor="exampleDropdownFormUserName1" className="form-label">Username:</label>
    <input type="text" className="form-control" id="username" placeholder="Enter Username" style={{width:"400px"}} value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleDropdownFormPassword1" className="form-label">Password:</label>
    <input type="password" className="form-control" id="password" placeholder="Enter Password" style={{width:"400px"}} value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleDropdownFormEmail1" className="form-label">Email:</label>
    <input type="email" className="form-control" id="email" placeholder="Enter Email" style={{width:"400px"}} value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleDropdownFormFullName1" className="form-label">Full name:</label>
    <input type="text" className="form-control" id="fullname" placeholder="Enter Full name" style={{width:"400px"}} value={fullname} onChange={(e)=>{setFullname(e.target.value)}}/>
  </div>

  <button type="submit" className="btn btn-primary" style={{width:"400px"}}>Register</button>
</form>

<Link className="d-flex justify-content-center" to="/" style={{textDecoration:'underline',paddingTop:"20px" }}>Already have an account? Login here</Link>
{/* </div> */}

  </div>

  </div>
  )
}
