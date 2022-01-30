// Sync - Main Thread
console.log("Task 1");

// Sync - Main Thread
console.log("Task 2");

const printDataFunction = function printData(err, data){
    if(err){
        console.log(err);
    }else{
        dataFromFile = data;
        console.log(data.toString());
    }
}

// Third Party.
function readFile(num){
    const promise = new Promise((resolve, reject)=>{
        // resolve("This is your data");
        if(num==0){
            reject("Num is 0");
        }
        setTimeout(()=>{
            resolve("this is your data");
            resolve("this is your data");
        }, 4000); 
    });
    return promise;
    
}

const promiseResult = readFile(0);
promiseResult.then(
    (data)=>{
        printDataFunction(null, data);
    },
    (err)=> {console.log(err);}
)

const promiseResult2 = readFile(1);
promiseResult2.then(
    (data)=>{
        printDataFunction(null, data);
    },
    (err)=> {console.log(err);}
)

console.log("Task 4");

