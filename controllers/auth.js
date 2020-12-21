const User = require("../models/user");

exports.signup=(req,res,next)=>{
    const email = req.body.email;
    const password = req.body.password;
    const name = "Mukesh";

    const user = new User({email:email,password:password,name:name})
    return user.save().then(response=>{
        res.status(201).json({message:'User created!',userId:response._id})
    }).catch(err=>{
        res.json({Error:"User not created",message:err})
    })
}