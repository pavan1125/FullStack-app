const express=require('express')
const mongoose=require("mongoose")
const {ObjectId}=mongoose.Types
const router=express.Router()
const Employee=require("../../models/employeeModel")
const verify=require("../../verify")

router.get("/employees",async (req,res)=>{
            const data= await Employee.find()
            if(data.length>0){
                res.send(data)
            }
            else{
                res.send("no eployees found")
            }
    })
router.post("/employees",verify,async (req,res)=>{
       const data=req.body
       if(data){

           const employee=new  Employee(data)
            employee.$isNew
             await employee.save()
            res.send(employee)    
       
       }else{
        res.send("please upload data")
       }
})
router.get("/employees/:id",async (req,res)=>{
       const id=req.params.id
       if(ObjectId.isValid(id)){

           const employee= await Employee.findById(id)
           if(employee){
            res.send(employee)
           }else{
            res.send(" employee not found")
           }
       }else{
        res.send("employee not found")
       }
})
router.put("/employees/:id",verify,async (req,res)=>{
      const id=req.params.id
       const data=req.body
       if(ObjectId.isValid(id)){
           const employee=await Employee.findByIdAndUpdate(id,data)
           if(employee){
            res.send(employee)
           }else{
            res.send("employee not found")
           }

       }else{
        res.send("employee not found")
       }
})
router.delete("/employees/:id",verify,async(req,res)=>{
       const id=req.params.id
       if(ObjectId.isValid(id)){

           const employee=await Employee.findByIdAndDelete(id)
           if(employee){
            res.send(employee)
           }else{
            res.send("employee not found")
           }
       }else{
        res.send("employee not found")
         
       }
})
module.exports = router