const fs = require("fs");

//Task1
fs.readFile("./data.txt", (err, data)=>{
    if(err)
        console.log(err);
    else
        console.log(data.toString());    
})

//Task2
console.log("Task2");


//Task3
console.log("Task3");