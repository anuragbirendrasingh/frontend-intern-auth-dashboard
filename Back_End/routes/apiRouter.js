const express = require("express");
const router   = express.Router();
const userAuth = require("./userAuth")


router.use('/auth',userAuth);


module.exports = router ;