import React, { useState, useEffect,useRef} from "react";
import {
  Link
} from "react-router-dom";


export default function Expenselist() {
  const [data, setData] = useState([]);
  const [editData, setEditData] = useState({
    expensename: "",
    amount: 0,
    date: "",
    desc: "",
  });
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const ref = useRef(null);
  const handleClick = () => {
ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/expense/data");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);


  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    console.log(selectedProduct)
    const updatedProduct = { ...editData };
    try {
      const response = await fetch(
        `http://localhost:5000/api/expense/update/${selectedProduct._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedProduct),
        }
      );
    console.log(response,"response received")
      if (response.ok) {
        alert("Expense updated successfully!");
        setIsEditing(false);
        window.location.reload();
      } else {
        alert("Failed to update expense frontend");
      }
    } catch (error) {
      console.error("Error updating expense:", error);
    }
  };

  return (
    <div>
    <div className="p-5 bg-secondary-subtle" style={{height:"200vh"}}>
      <div className="container bg-white p-4">
        
        <h4 className="d-flex justify-content-center">Expense List</h4>
        {Array.isArray(data) && data.length > 0 ? (
        data.map((list) => (
          <div className="mb-4" key={list._id}>
            <h4 className="text-success">{list.expensename}</h4>
            <div className="d-flex">
              <label >description:</label>
              <div className="mx-1">{list.desc}</div>
            </div>
            <div className="d-flex">
              <label>amount:</label>
              <div className="mx-1">{list.amount}</div>
            </div>
            <div className="d-flex">
              <label>date: </label>
              <div className="mx-1">{list.date}</div>
              <Link
              className=""
              onClick={() => {
                setEditData({
                  expensename: list.expensename,
                  amount: list.amount,
                  date: list.date,
                  desc: list.desc,
                });
                setSelectedProduct(list);
                setIsEditing(true);
                handleClick();
              }}
              to ="#update"
              style={{textDecoration:"none", marginLeft:"100px"}}
            >
              Want to update this expense ?
            </Link>
            </div>
            
            <hr/>
            
          </div>
          
        ))
      ) : (
        <div>

           <p>no data </p>
           <Link
              className="text-success"
            
              to ="/home"
              style={{textDecoration:"none"}}
            >
             Want to go home page?
            </Link>
        </div>
        
      )}
        <Link
              className="text-success"
            
              to ="/home"
              style={{textDecoration:"none"}}
            >
             Want to go home page?
            </Link>

      </div>
      

         {/* {data.map((list) => (
//               <div className="mb-4" key={list._id}>
      
//                     <h6 className="">{list.expensename}</h6>
                
//                     <div className='d-flex'>
//                       <label>Amount:</label>
//                     <div className=''>{list.amount}</div>
//                     </div>

//                     <div className='d-flex'>
//                       <label>Date:</label>
//                     <div className=''>{list.date}</div>
//                     </div>
                    
//                 </div>
  
//             ))} */}
  
      

    
      {isEditing && (
        <div className="container mt-4 bg-white p-4" id="update" ref={ref}>
          <h5>Update Expense</h5>
          <form onSubmit={handleUpdateProduct}>
            <div className="mb-3">
              <label htmlFor="expensename" className="form-label">
                Expense Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="expensename"
                value={editData.expensename}
                onChange={(e) =>
                  setEditData({ ...editData, expensename: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="amount" className="form-label">
                Amount:
              </label>
              <input
                type="number"
                className="form-control"
                id="amount"
                value={editData.amount}
                onChange={(e) =>
                  setEditData({ ...editData, amount: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="date" className="form-label">
                Date:
              </label>
              <input
                type="date"
                className="form-control"
                id="date"
                value={editData.date}
                onChange={(e) =>
                  setEditData({ ...editData, date: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="desc" className="form-label">
                Description:
              </label>
              <textarea
                className="form-control"
                id="desc"
                value={editData.desc}
                onChange={(e) =>
                  setEditData({ ...editData, desc: e.target.value })
                }
              />
            </div>
            <button type="submit" className="btn btn-success me-2">
              Update
            </button>
            <button
              type="button"
              className="btn btn-secondary mx-2"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </form>
        </div>
      )}
      </div>
    
    </div>
  );
}

