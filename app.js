console.log("one");
console.log("two");
setTimeout(() => {
    // Set time out a special function that takes the time that after how much time i should execute the statements.
    // and the statements after that function are executed without waiting for the complition of this funciton . 
    // this is async programming
    
    //console.log("waiting for 4000 milli seconds mean 4 seconds");
}, 4000);
console.log("three");
console.log("four");


// Callbacks in JS
// A function that is passed as a parameter in an other function is called callback function
function sum(a,b){
    console.log(a+b);
}
function callBackFunction(a,b,sumFunction)
{
    sumFunction(a,b);
}

// Now calling the funciton
callBackFunction(2,3,sum);


// Callback hell .  also known as paramid of doom
// a problem related to nested callbacks mean a callback function has another callback function

function getData(dataId, callBackFunction) {
    setTimeout(() => {
        console.log("Data is : ", dataId);
        if(callBackFunction)
        {
            callBackFunction();
        }
    }, 2000);
}

getData(1, ()=>{
    getData(2,()=>{
        getData(3,()=>{
            getData(4);
        })
    })
})


// Promises in JS

// Promise is special type of objects in JS . A promise has 3 states . reject , pending and fulfill/resolve
// Each promise has two parameters that are resolve and reject they themselves are function written by JS.
let promise =new Promise((resolve , reject)=>{
    console.log("I'm a promise");
    resolve("Sucsess");
    
    
    //reject("Some error");
})

// We don't write promises . We use API's and those API's return promises to us and we just handle those promises.

// we use .than and .catch methods to handle promises

let promise2=new Promise((resolve,reject)=>{
    resolve("Success");
})

// catch and then have by default parameters that are res and err respectively.
promise2.then((res)=>{
    console.log("Promise is fulfilled", res);
})
promise.catch((err)=>{
     console.log("Promise is not fulfilled",err);
})