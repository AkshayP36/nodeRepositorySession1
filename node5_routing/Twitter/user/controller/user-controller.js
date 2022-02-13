const userModel = require("../models/user");
const userRepository = require("../repositories/user");

exports.update = (req,res) => {
    const userToUpdate = new userModel(req.body.name, req.body.email, req.body.password, req.body.gender, req.body.id);

    userRepository.update(userToUpdate,()=>{
        res.send("User data updated in db");
    })
}

exports.getById = (req,res) => {
    const id = req.params.id;

    userRepository.getById(id, user=>{
        res.status(200).send(user);
    })
}