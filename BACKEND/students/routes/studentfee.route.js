const express=require("express")
const mongoose=require("mongoose")
const {ObjectId}=mongoose.Types
const router=express.Router()
const Fee=require("../models/StudentFeemodel")
const verify=require("../../verify")

router.post("/students/:id/fees",async(req,res)=>{
       const id=req.params.id
        if(ObjectId.isValid(id)){
              let fee=new Fee(req.body)
              fee.Student=id
              fee.$isNew
              await fee.save()
              res.send(fee)
        }else{
            res.send("student with given id is not found")
        }
})

router.get("/students/:id/fees", async (req,res)=>{
    const id=req.params.id
    if(ObjectId.isValid(id)){
         let fee= await Fee.findOne({Student:id}).populate("Student","Name -_id")
         if(fee){
            res.send(fee)
  
        }else{
          res.send("no data found")
        }
    }else{
        res.send("student with given id is not found")
    }
})

router.patch("/students/:id/fees",verify,async (req,res)=>{
      let id=req.params.id
      if(ObjectId.isValid(id)){
        let fee= await Fee.findOneAndUpdate({Student:id},req.body)
        if(fee){
            res.send(fee)
  
        }else{
          res.send("no data found")
        }
         
   }else{
       res.send("student with given id is not found")
   }
})


router.delete("/students/:id/fees",verify,async (req,res)=>{
    let id=req.params.id
    if(ObjectId.isValid(id)){
      let fee= await Fee.findOneAndDelete({Student:id})
      if(fee){
          res.send(fee)

      }else{
        res.send("no data found")
      }
 }else{
     res.send("student with given id is not found")
 }
})
module.exports=router