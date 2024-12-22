import React,{useState} from 'react'

export default function Update({data}) {
   console.log("data from update", data)
    const [expensename, setExpensename] = useState('');
    const [amount, setAmount] = useState('');
    const [desc, setDesc] = useState('');
    const [date, setDate] = useState('');
  
    const UpdateExpense = async(e)=>{
      e.preventDefault();
      
      
      try{

      }
      catch{}
    }

  return (
<div className='container'>
     
     <h4 className=' p-2 d-flex justify-content-center'>Update Expense</h4>
     
     <form className=""  onSubmit={UpdateExpense}>
   <div className="mb-3">
     <label htmlFor="exampleDropdownFormExpenseName1" className="form-label">Expense Name:</label>
     <input type="text" className="form-control" id="expensename" placeholder="Enter expense name" style={{width:"500px"}} value={expensename} onChange={(e)=>{setExpensename(e.target.value)}}/>
   </div>
   <div className="mb-3">
     <label htmlFor="exampleDropdownFormAmount1" className="form-label">Amount:</label>
     <input type="number" className="form-control" id="amount" placeholder="Enter amount" style={{width:"500px"}} value={amount} onChange={(e)=>{setAmount(e.target.value)}}/>
   </div>
 
   <div className="mb-3">
     <label htmlFor="exampleDropdownFormAmount1" className="form-label">Date:</label>
     <input type="date" className="form-control" id="date" placeholder="Select date" style={{width:"500px"}} value={date} onChange={(e)=>{setDate(e.target.value)}}/>
   </div>
 
   <div className="mb-3">
     <label htmlFor="exampleDropdownFormAmount1" className="form-label">Description:</label>
     <input type="text" className="form-control" id="desc" style={{width:"500px", height:"150px"}} value={desc} onChange={(e)=>{setDesc(e.target.value)}}/>
   </div>
 
   <button type="submit" className="btn btn-success">Update Expense</button>
 </form>
 
 
 
        </div>
  )
}
