const express = require('express')
const Expense = require('../models/expense'); 
const router = express.Router();

router.post('/create', async(req,res)=>{
    const { expensename,
        amount,
        date,
        desc} = req.body;
 
    try{

        const newExpense = new Expense({
            expensename,
            amount,
            date,
            desc
          });
      
          await newExpense.save();

          res.status(201).json({ message: 'Expense created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error from backedn' });
      }
    
})


router.get('/data',async(req,res)=>{
    try{
     const expense = await Expense.find()
     console.log(expense,"expense")
     res.status(200).json(expense)
    }
    catch{
        res.status(500).json({ message: "Server error", error: error.message });
    }
})

router.put("/update/:id", async (req, res) => {
    try {
        console.log(req.body)
        console.log(req.params.id,"parame")
      const user = await Expense.findByIdAndUpdate(req.params.id, req.body);
      if (!user) return res.status(404).json({ message: "not found" });
  
      res.status(200).json({ message: "updated successfully"});
    } catch (err) {
      res.status(500).json({ message: "Error updating product"});
    }
  });


module.exports=router;