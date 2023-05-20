const mongoose=require("mongoose")

const schema=mongoose.Schema

const resultSchema=new schema({
    "Hindi":Number,
    "Eng":Number,
    "Math":Number,
    "Total":Number,
    "Grade":String,
    Student:{type:schema.Types.ObjectId,ref:"students"}
},{timestamps:true})


const resultModel=mongoose.model("StudentResults",resultSchema)


module.exports=resultModel