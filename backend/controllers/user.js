const express = require('express')
const User = require('../models/user'); 
const bcrypt = require('bcrypt');
const router = express.Router();


router.post('/create', async(req,res)=>{
    const { username,fullname, email, password } = req.body;
 
    try{
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return res.status(400).json({ message: 'Email already exists' });
        }

        const newUser = new User({
            username,
            fullname,
            email,
            password,
          });
      
          await newUser.save();

          res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
      }
    
})

router.post('/login',async(req,res)=>{
  try{
   const {username,password} = req.body;
   const user = await User.findOne({username});
   console.log("user",user)
   if(!user){
    res.status(401).json({message:"username not exist"})
   }
   const ispasswordcorrect = await bcrypt.compare(password,user.password);
   if(!ispasswordcorrect) res.status(401).json({message:"password incorrect"})

   res.status(200).json({message:"logged in"})
  }
  
  catch{
    res.status(500).json();
  
  }
})


module.exports=router;