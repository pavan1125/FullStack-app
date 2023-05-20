const express=require("express")
const mongoose=require("mongoose")
const {ObjectId}=mongoose.Types
const router=express.Router()
const Assignment=require("../../models/employeeAssignmentModel")
const verify=require("../../verify")


router.post("/employees/:id/assignments",verify,async(req,res)=>{
      const id=req.params.id
      if(ObjectId.isValid(id)){

         let assignment=req.body
         assignment.Employee=id
        let createdAssignment=new Assignment(assignment)
        createdAssignment.$isNew;
          await createdAssignment.save()
        res.send(createdAssignment)
        
      }else{
        res.send("employee not found")
      }
})
router.get("/employees/:id/assignments",verify,async(req,res)=>{
       const id=req.params.id
        if(ObjectId.isValid(id)){
            let Assignments= await Assignment.find({Employee:id}).populate("Employee","firstName -_id")
            res.send(Assignments)
        }else{
            res.send("employee not found")
        }
       
})
router.get("/employees/:id/assignments/:assignmentId",verify,async (req,res)=>{
      const id=req.params.id
      const AssignmentId=req.params.assignmentId
      if(ObjectId.isValid(id)){
           let assignment= await Assignment.findById(AssignmentId).populate("Employee","firstName -_id")
           if(assignment){

             res.send(assignment)
          }else{
            res.send("assignment not found")
          }
      }else{
        res.send("employee not found")
      }
})
router.patch("/employees/:id/assignments/:assignmentId",verify,async (req,res)=>{
     const id=req.params.id
     let assignmentId=req.params.assignmentId
     if(ObjectId.isValid(id)){
         let updatedAssignment=await Assignment.findByIdAndUpdate(assignmentId,req.body)
         if(updatedAssignment){
           
           res.send(updatedAssignment)
         }else{
          res.send("assignment not found")
         }
     }else{
        res.send('employee not found')
     }
})

router.delete("/employees/:id/assignments/:assignmentId",verify,async (req,res)=>{
    const id=req.params.id
    let assignmentId=req.params.assignmentId
    if(ObjectId.isValid(id)){
      
          let deletedAssignment=await Assignment.findByIdAndDelete(assignmentId)
          if(deletedAssignment){
            
            res.send(deletedAssignment)
          }else{
            res.send("assignment not found")
          }
    }else{
       res.send('employee not found')
    }
})
module.exports=router