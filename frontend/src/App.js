import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Login from "./views/login"
import Register from "./views/register"
import Home from "./views/home"
import AddExpense from "./views/addexpense"
import ExpenseList from "./views/expenselist"
import Update from "./views/update"

function App() {
  return (
    <div className="App">
           {/* <Login/> */}

           <Router>
  

      
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        <Route path="/home" element={<Home/>} /> 
          <Route path="/expenselist" element={<ExpenseList/>} />
          <Route path="/addexpense" element={<AddExpense/>} />
          <Route path="/update" element={<Update/>} /> 
        </Routes>
    
    </Router>

         </div>
  );
}

export default App;
