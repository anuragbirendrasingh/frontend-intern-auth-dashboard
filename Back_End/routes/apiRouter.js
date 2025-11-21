const express = require("express");
const router   = express.Router();
const userAuth = require("./userAuth")
const taskRoutes = require("../routes/taskRoutes")


router.use('/auth',userAuth);
router.use('/task',taskRoutes);

module.exports = router ;