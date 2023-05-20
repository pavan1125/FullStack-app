const mongoose=require("mongoose")

const schema=mongoose.Schema


const userSchema=new schema({
       "userName":{type:String,require:true,unique:true},
       "password":{type:String,require:true}
})

const userModel=mongoose.model("Users",userSchema)


module.exports=userModel
