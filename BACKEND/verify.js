const jwt=require("jsonwebtoken")

function verify(req,res,next){
        const token=req.headers["authorization"].split(" ")[1]
 
        jwt.verify(token,process.env.SECRET_KEY,(err,decode)=>{
            if(err){
                res.send("unAuthorized")
            }else{
                 req.user=decode
                 next();
                }
            })
            

        }
           

module.exports=verify