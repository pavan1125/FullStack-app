const mongoose=require("mongoose")

const schema=mongoose.Schema;

const studentSchema=new schema({
       Name:String,
       Address:String
},{timestamps:true})


const StudentModel=mongoose.model("students",studentSchema)


module.exports=StudentModel