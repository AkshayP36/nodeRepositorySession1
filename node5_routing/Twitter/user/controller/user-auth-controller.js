const userModel = require("../models/user");
const repo = require("../repositories/user");

exports.register = (req,res)=>{
    const newUser = new userModel(req.body.name, req.body.email, req.body.password, req.body.gender);

    //call user repository
    repo.add(newUser,()=>{
        res.send("Message from register function. User registration success");
    })
    
}

exports.login = (req,res)=>{
    console.log("this is login calling");
    res.send("Message from login function. User login success");
}