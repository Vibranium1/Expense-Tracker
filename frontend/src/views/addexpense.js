import React,{useState} from 'react'
import { useNavigate,Link } from 'react-router-dom';

export default function Addexpense() {

  const [expensename, setExpensename] = useState('');
  const [amount, setAmount] = useState('');
  const [desc, setDesc] = useState('');
  const [date, setDate] = useState('');

  const navigate= useNavigate();


  const AddExpense=async(e) =>{

    e.preventDefault()
    if(!expensename|!amount||!date|| !desc){
      alert("data missing");
    }

    const expenseData = {
      expensename,
      amount,
      date,
      desc,
    };

    try {
      const response = await fetch('http://localhost:5000/api/expense/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(expenseData),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        alert(' Expense created successfully!');
        navigate('/expenselist')
      } else {
        alert(result.message || 'Something went wrong!');
      }
    } catch (error) {
      console.error("Error:", error);
      alert('frontend');
    }

  };

  return (
    <div className='p-4 bg-secondary-subtle'style={{height:"100vh"}}>
      <div className='bg-white border p-4' style={{ marginTop:"5px", marginLeft:"30px",width:"1250px",marginRight:"0px", height:"530px"}}>

      <h4 className=' p-2 d-flex justify-content-center'>Add New Expense</h4>
    
    <form className=""  onSubmit={AddExpense}>
  <div className="mb-3">
    <label htmlFor="exampleDropdownFormExpenseName1" className="form-label">Expense Name:</label>
    <input type="text" className="form-control" id="expensename" placeholder="Enter expense name" style={{width:"1150px"}} value={expensename} onChange={(e)=>{setExpensename(e.target.value)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleDropdownFormAmount1" className="form-label">Amount:</label>
    <input type="number" className="form-control" id="amount" placeholder="Enter amount" style={{width:"1150px"}} value={amount} onChange={(e)=>{setAmount(e.target.value)}}/>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleDropdownFormAmount1" className="form-label">Date:</label>
    <input type="date" className="form-control" id="date" placeholder="Select date" style={{width:"1150px"}} value={date} onChange={(e)=>{setDate(e.target.value)}}/>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleDropdownFormAmount1" className="form-label">Description:</label>
    <textarea type="text" className="form-control" id="desc" style={{width:"1150px", height:"70px"}} value={desc} onChange={(e)=>{setDesc(e.target.value)}}/>
  </div>

  <button type="submit" className="btn btn-success" style={{width:"1150px"}}>Add Expense</button>
</form>

<Link className="text-primary"       
              to ="/expenselist"
              style={{textDecoration:"none"}}
            >
             Want to see existing expense list?
            </Link>

      </div>
     
    


       </div>
  )
}
