const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const user = require("./models/userModel");
require("dotenv").config();

router.post("/login", async (req, res) => {
  const body = req.body;
  const UserName = body.userName;
  const users = await user.findOne({ userName: UserName });
  if (users) {
    let token = jwt.sign(body, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });
    res.send({
      ...body,
      token,
    });
  } else {
    res.send("user not found");
  }
});

module.exports = router;
