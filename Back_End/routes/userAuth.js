const express = require("express") ;
const router = express.Router();
const User = require("../models/Users") ;
const {validateSignUpData} = require("../utils/validation")



router.post("/signup",async (req,res)=>{
    //json & jwt
    res.send("Signup route placeholder")
}) 

router.post("/login",async(req,res)=>{
    res.send("Logon route pkaceholder")
})

module.exports = router ;