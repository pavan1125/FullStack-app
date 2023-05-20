const mongoose=require("mongoose")

const express=require("express")
const Student=require("../models/studentModel")
const {ObjectId}=mongoose.Types
const router=express.Router()
const verify=require("../../verify")
router.post("/students",async (req,res)=>{
         let body=req.body
        const student= new Student(body)
         student.$isNew
         await student.save()
        res.status(200).send(student)
})
router.get("/students",async (req,res)=>{
           let students= await Student.find()
            if(students.length>0){
                  res.status(200).send(students)
            }else{
                 res.status(401).send("no students found try to add student")
            }
})

router.get("/students/:id",async(req,res)=>{
        let id =req.params.id

        if(ObjectId.isValid(id)){
              let student=await Student.findById(id)
              if(student){
                  res.send(student)
              }else{
                  res.send("student with provided id is not found")
              }
        }else{
             res.send("student not found")
        }

})

router.patch("/students/:id",verify,async (req,res)=>{
      let id =req.params.id

      if(ObjectId.isValid(id)){
            let student=await Student.findByIdAndUpdate(id,req.body)
            if(student){
                res.send(student)
            }else{
                res.send("student with provided id is not found")
            }
      }else{
           res.send("student not found")
      }
})
router.delete("/students/:id",verify,async (req,res)=>{
        let id=req.params.id
        if(ObjectId.isValid(id)){
            let student=await Student.findByIdAndDelete(id,req.body)
            if(student){
                res.send(student)
            }else{
                res.send("student with provided id is not found")
            }
      }else{
           res.send("student not found")
      }
})
module.exports=router