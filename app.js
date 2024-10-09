console.log("one");
console.log("two");
setTimeout(() => {
    // Set time out a special function that takes the time that after how much time i should execute the statements.
    // and the statements after that function are executed without waiting for the complition of this funciton . 
    // this is async programming
    console.log("waiting for 4000 milli seconds mean 4 seconds");
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