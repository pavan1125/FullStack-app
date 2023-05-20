const mongoose=require("mongoose")

const schema=mongoose.Schema

const feeSchema=new schema({
    "Amount":Number,
    "PaymentDate":{type:Date,default:new Date()},
    "Status":Boolean,
    Student:{type:schema.Types.ObjectId,ref:"students"}
},{timestamps:true})


const FeeModel=mongoose.model("StudentFees",feeSchema)

module.exports=FeeModel