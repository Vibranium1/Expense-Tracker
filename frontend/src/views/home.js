import React from 'react'
import {
    Link
  } from "react-router-dom";

export default function home() {
  return (
    <div className='bg-secondary-subtle p-5' style={{height:"100vh"}}>
     <div className=' box border bg-white p-4' >
     <h4 className=' p-2 d-flex justify-content-center'>Welcome to Expense Tracker</h4>
     <div className='d-flex justify-content-center'> <Link className='me-3 text-success' to='/addexpense' style={{textDecoration:"none"}} >Add Expense</Link>
     <Link className='text-success' to='/expenselist' style={{textDecoration:"none"}}>Expense List</Link></div>

     <div>Track and manage your expenses effectively. Use the navigation links to add new expenses or view your expense history  </div>


     </div>
    
  
    </div>
  )
}
