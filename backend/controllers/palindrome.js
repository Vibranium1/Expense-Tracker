const express=require("express")
const router = express.Router()

console.log("in")

router.post('/string', async(req,res)=>{
 try{
   console.log(req.body,"value");
   let string1;
   string1=req.body.string;
   let ss=string1.trim()
  //  arr.push(req.body.string);
  //  console.log("00arr",arr)
  //  arr=arr.trim()
   console.log(ss,"string")
// if(arr==arr.reverse)

res.status(200).json()
// }

 }
 catch{
  console.log("err")
  res.status(500).json({message:"err"})
 }


})

module.exports=router;