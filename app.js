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
