const express = require("express");

const server = express();
const bodyParser = require("body-parser");
const userAuthRoutes = require("./user/routes/user-auth-routes");
const userRoutes = require("./user/routes/user-routes");
const mongodb = require("./config/mongodb");


//connect to mongodb
mongodb.connect();

server.use(bodyParser.json());

server.use("/api/user/auth", userAuthRoutes);
server.use("/api/user", userRoutes);

server.get("/", (req,res)=>{
    res.send("This is sparta!");
})

server.listen(3000, ()=>{
    console.log("Server started on port 3000");
})