const mongoose=require("mongoose")

const schema=mongoose.Schema

const employeeSchema=new schema({
      firstName:String,
      middleName:String,
      lastName:String
},{timestamps:true})


const EmployeeModel=mongoose.model("Employees",employeeSchema)


module.exports=EmployeeModel