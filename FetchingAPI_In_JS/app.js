// API stands for Application Programming Interface


let fact=document.querySelector(".fact");
let button=document.querySelector(".btn");


let URL="https://cat-fact.herokuapp.com/facts";

// Now we will use this url and send a request to this API using fetch API and receive the result in a promise

let promise=fetch(URL);

// Because getting data from API can take some time so will make is async and use await kery word

const getCatFacts =async () =>{
    console.log("Getting Data from API");
    let response=await fetch(URL);
    console.log(response);// Json Format

    // Now we will parse our JSON data into JS objects . This process is also async

    let data=await response.json();
    fact.innerHTML=data[0].text;
}

button.addEventListener("click",getCatFacts);