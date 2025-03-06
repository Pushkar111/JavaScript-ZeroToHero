let p1 = new Promise((resolve, reject) => {
    resolve('Resolved promise1');
})

let p2 = new Promise((resolve, reject) => {
    resolve('Resolved promise2');
})

let p3 = new Promise((resolve, reject) => {
    resolve('Resolved promise3');
});

setTimeout(() => {
    console.log("hii");
});

const promiseArr = [p1, p2, p3];

Promise.all(promiseArr).then((results) => {
    console.log(results);
}).catch((error) => {
    console.log(error);
});


// Explanation:
// In the above code, we have created three promises p1, p2, and p3. All promises are resolved with a string message.
// We have created an array promiseArr that contains all promises.
// We have used Promise.all() method to resolve all promises in the array.
// We have used setTimeout() method to print a message after 0 milliseconds.
// The Promise.all() method resolves all promises in the array and prints the resolved values in the console.
// The setTimeout() method prints the message after 0 milliseconds. So, the message is printed after the resolved values of promises.

// Because of setTimeout(()=>{}) callback function goes in callBack Queue and promise.then(()=>{}) goes in Microtask Queue.
// So, Microtask Queue is executed first and then CallBack Queue is executed. So, 

// Output:
// [ 'Resolved promise1', 'Resolved promise2', 'Resolved promise3' ]
// hii