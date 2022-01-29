const http = require("http");

http.createServer((req,res)=> {
    res.end("This is Sparta!");
}).listen(5600);

console.log("Nodejs server is learning on port 5600");