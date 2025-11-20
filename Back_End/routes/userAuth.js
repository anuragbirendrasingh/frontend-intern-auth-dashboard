const express = require("express") ;
const router = express.Router();
const {signup, signin} = require("../controller/authController");
const { protect } = require("../middleware/authMiddleware");

router.post("/signup",signup);


router.post("/signin",signin);

router.get("/profile",protect ,(req,res)=>{
    res.status(200).json({message :"Profile fetched ",user : req.user});
})

module.exports = router ;