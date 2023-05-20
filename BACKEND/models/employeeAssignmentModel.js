const mongoose=require("mongoose")

const schema=mongoose.Schema

const AssignmentSchema=new schema({
       title:String,
       date:{type:Date,default:new Date()},
       subject:String,
       Employee:{type:schema.Types.ObjectId,ref:"Employees"}
},{
     timestamps:true
})

const AssignmentModel=mongoose.model("EmployeeAssignments",AssignmentSchema)

module.exports=AssignmentModel