
const db = require("../../config/mongodb");
const { ObjectId } = require("mongodb");

const getUserCollection = ()=> {
    return db.getCollection("user");
}

// model - user data
// cb - callback to invoke after data is added
exports.add = (model, cb)=>{
    // Step 1: Access collection.
    getUserCollection().insertOne({name: model.name, email: model.email, password: model.password, gender: model.gender})
        .then(()=>{
            cb();
        },
        err=>{throw new Error(err);})
}

exports.update = (model, cb)=>{

    // Step 2: Define how to find the document
    const filter = {_id: ObjectId(model._id)};

    // Step 3: Define what properties need to be updated
    // set operator updates individual properties of document.
    const update = { $set: {name: model.name, password: model.password, 
        gender: model.gender} };

        getUserCollection().findOneAndUpdate(filter, update)
        .then(()=>{
            cb()
        },
        err=>{console.log(err)})
}

exports.getByID = (id, cb)=>{
    // Step 1: Find data
    getUserCollection().findOne({_id: ObjectId(id)})
        .then(
            (user)=> cb(user),
            err=>{console.log(err)});
}

exports.delete = (id, cb)=>{
    // Step 1: Find data
    getUserCollection().deleteOne({_id: ObjectId(id)})
        .then(
            ()=> cb(),
            err=>{console.log(err)});
}

exports.getByEmail = (email, cb)=>{
    getUserCollection().findOne({email})
        .then(
            (record)=>{
                cb(record);
            },
            err=> {console.log(err)}
        )
}
