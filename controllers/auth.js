const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.signup=(req,res,next)=>{
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    User.findOne({email:email}).then(user=>{
        if(!user){
            bcrypt.hash(password,12).then(hashedPw=>{
                const user = new User({email:email,password:hashedPw,name:name});
                return user.save()
            }).then(response=>{
                res.status(201).json({message:'User created!',userId:response._id})
            }).catch(err=>{
                res.json({Error:"User not created",message:err})
            })
        }

        else{
            res.status(409).json({message:"User already exist"})
        }
    }).catch(err=>{
        res.json({message:"Server error"})
    })
   
}

exports.login=(req,res,next)=>{
    console.log(req.body);
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({email:email}).then((user)=>{
        if(!user){
            const error = new Error("User does not exist");
            error.statusCode = 401;
            res.status(401).json({error:"User does not exist"});
        }
        const loadedUser = user;
        const token = jwt.sign({
            email: loadedUser.email,
            userId:loadedUser._id.toString(),
        },'ecommercesecret',{expiresIn:'1h'});
        
        res.status(200).json({token:token,username:loadedUser.name,userId:loadedUser._id.toString()});
    })
}