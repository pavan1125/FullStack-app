const express=require("express")
const user=require("../../models/userModel")
const router=express.Router()
const bcrypt=require("bcrypt")

router.post("/register",async (req,res)=>{
      
    let body=req.body
    let Salt=parseInt(process.env.SALT)
    const hashedPassword= await bcrypt.hash(body.password,Salt)
    body.password=hashedPassword
     let createdUser=new user(body)
     createdUser.$isNew
     createdUser.save()
     .then(result=>res.send("Registration success")).catch(err=>res.send("userName already taken"))
     
})


module.exports=router