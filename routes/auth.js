const express = require("express");
const authController = require("../controllers/auth")

const router = express.Router();

router.get("/signuptest",(req,res,next)=>{
    res.json({status:'Ok'})
})

router.post("/signup",authController.signup)

router.post("/login",authController.login)

module.exports = router