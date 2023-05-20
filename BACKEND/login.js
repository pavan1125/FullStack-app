const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const user = require("./models/userModel");
const bcrypt=require("bcrypt")
require("dotenv").config();

router.post("/login", async (req, res) => {
  const body = req.body;
  const UserName = body.userName;
  const password=body.password
  const users = await user.findOne({ userName: UserName });
  if (users) {
         
     await bcrypt.compare(password,users.password,function(err,result){
          if(err){
              res.send(new Error({message:"Password MisMatched"}))
          }
          if(result){
            let token = jwt.sign(body, process.env.SECRET_KEY, {
              expiresIn: "1h",
            });
            res.send({token:token});
          }else{
            res.send("Password mismatched")
          }
      })
     
    
  } else {
    res.send("user not found");
  }
});

module.exports = router;
