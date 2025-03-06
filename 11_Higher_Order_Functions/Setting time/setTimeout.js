/*

In JavaScript, we use setTimeout higher order function to do some activity after some interval of time. 
The setTimeout global method take a callback function and a duration as a parameter. 
The duration is in milliseconds and the callback will be always called in that interval of time.



// syntax
setInterval(code)
setInterval(code, delay)

setInterval(func)
setInterval(func, delay)
setInterval(func, delay, arg1)
setInterval(func, delay, arg1, arg2)
setInterval(func, delay, arg1, arg2, ..., argN)



*/

/* 1) we can use it with no arguments */
// function toSayILoveYou() {
//     console.log("I love you");
// }
// setTimeout(toSayILoveYou, 3000);

console.log("-------------------------------------------------------------------");

/* 2) we can use it with arguments */
// function toSayILoveYou(name) {
//     console.log(`I love you ${name}`);
// }
// setTimeout(toSayILoveYou, 3000, "Jhon");

console.log("-------------------------------------------------------------------");

setTimeout(() => {
    console.log("this is the first message");
}, 5000);
setTimeout(() => {
    console.log("this is the second message");
}, 3000);
setTimeout(() => {
    console.log("this is the third message");
}, 1000);

// Output:

// this is the third message
// this is the second message
// this is the first message
