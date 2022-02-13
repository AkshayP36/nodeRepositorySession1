const db = require("../../config/mongodb");
const {ObjectId} = require("mongodb");


exports.add = (model, callBackFunction)=>{

    //1. assess the collection
    const collection = db.getCollection("user");

    collection.insertOne({name: model.name, email: model.email, password: model.password, gender: model.gender}).
        then(()=>{
            callBackFunction();
        },
        err=>{throw new Error(err)}
        )
}

exports.update = (model, callBackFunction) => {
    const collection = db.getCollection("user");

    const filter = {_id: ObjectId(model._id)};

    const update = {$set: {name: model.name, password: model.password, gender: model.gender}};

    collection.findOneAndUpdate(filter, update).then(()=>{
        callBackFunction();
    },
    (err)=> {throw new Error(err)})
}

exports.getById = (id, callBackFunction)=>{
    const collection = db.getCollection("user");
    collection.findOne({_id: ObjectId(id)}).then(
        (user)=>{
            callBackFunction(user);
        },
        (err)=>{
            console.error(err);
        })
}