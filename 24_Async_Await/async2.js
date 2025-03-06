/*
async function makeHttpRequest() {
    // slow request API
    const url = "https://fakeresponder.com/?sleep=3000";
    fetch(url)
        .then((response) => response.json())
        .then((data) => console.log(data))

    console.log("This will be printed first");
}
console.log(makeHttpRequest());

*/

// async ==> will returns a promise
// await ==> will wait for the promise to be resolved or rejected and then returns the promise result/.
      
// ==> async and await are used to handle promises in a more readable and synchronous way. so that the code looks like synchronous code. 

// in Actually the below code is Asynchronous code because it is not in single thread. 
// It is in multiple threads.
// 1. The fetch request is made and it is sent to the server.
// 2. The fetch request is hold until the response is resolved.
// 3. The response is resolved and the data is received.
// 4. The data is printed to the console.

// http://latentflip.com/loupe/
// Callstack ==> Web API ==> Callback Queue ==> Event Loop ==> Callstack



async function makeHttpRequest() {
    const url = "https://fakeresponder.com/?sleep=3000";
    
    let response = await fetch(url);
    console.log(response);
    
    console.log("This will be hold until the promise response is resolved");

    let data = await response.json();
    console.log(data);
};
makeHttpRequest();


// syntax of arrow function using async

// const makeHttpRequest = async () => {
//     const url = "https://fakeresponder.com/?sleep=3000";
    
//     let response = await fetch(url);
//     console.log(response);
    
//     console.log("This will be hold until the promise response is resolved");

//     let data = await response.json();
//     console.log(data);
// };
// makeHttpRequest();