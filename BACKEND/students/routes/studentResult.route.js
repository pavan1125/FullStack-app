const express=require("express")

const mongoose=require("mongoose")
const {ObjectId}=mongoose.Types
const router=express.Router()
const Result=require("../models/studentResultModel")
const verify=require("../../verify")

router.post("/students/:id/result",verify,async(req,res)=>{
      const id=req.params.id

      const result =new Result(req.body)
      result.Student=id
      result.$isNew
      await result.save()

      res.send(result)
})

router.get("/students/:id/result",verify,async(req,res)=>{
     const id=req.params.id
     if(ObjectId.isValid(id)){
          const result=await Result.find({Student:id}).populate("Student","Name -_id")
          if(result){
              res.send(result)
            }else{
                res.send("no result found")
            }

     }else{
        res.send("no student found with the given id")
     }

})

router.patch("/students/:id/result",verify,async (req,res)=>{
       const id=req.params.id
       if(ObjectId.isValid(id)){
         const result = await Result.findOneAndUpdate({Student:id},req.body).populate("Student","Name -_id")
         if(result){
            res.send(result)
         }else{
            res.send("no result found")
         }
       }else{
        res.send("no student data is found with given id")
       }
})
router.delete("/students/:id/result",verify,async (req,res)=>{
    const id=req.params.id
    if(ObjectId.isValid(id)){
      const result = await Result.findOneAndDelete({Student:id}).populate("Student","Name -_id")
      if(result){
         res.send(result)
      }else{
         res.send("no result found")
      }
    }else{
     res.send("no student data is found with given id")
    }
})

module.exports=router