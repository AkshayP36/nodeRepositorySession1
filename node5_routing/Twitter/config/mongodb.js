//import library

const mongoDbClient = require("mongodb").MongoClient;

//mongodb server connection

//const url = "mongodb+srv://nodelearning:test@cluster0.7tsib.mongodb.net/twitterapp?retryWrites=true&w=majority";
//const url = "mongodb+srv://nodelearning:test@cluster0.7tsib.mongodb.net/twitterapp?retryWrites=true&w=majority";
const url = "mongodb://nodelearning:test@cluster0-shard-00-00.7tsib.mongodb.net:27017,cluster0-shard-00-01.7tsib.mongodb.net:27017,cluster0-shard-00-02.7tsib.mongodb.net:27017/twitterapp?ssl=true&replicaSet=atlas-an08by-shard-0&authSource=admin&retryWrites=true&w=majority"


//connect to mongodb server via nodejs
var dbClient;

exports.connect = () =>{
    mongoDbClient.connect(url).then(
        (client)=> {
            dbClient = client;
            console.log("mongodb connected")
        },
        (err) => {console.log(err);}
    )
}

exports.getCollection = (name) => {
    return dbClient.db("twitterapp").collection(name);
}