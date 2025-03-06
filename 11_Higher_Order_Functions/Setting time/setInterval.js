/*
In JavaScript, we use setInterval higher order function to do some activity continuously with in some interval of time. 
The setInterval global method take a callback function and a duration as a parameter. 
The duration is in milliseconds and the callback will be always called in that interval of time.


// syntax
setInterval(code)
setInterval(code, delay)

setInterval(func)
setInterval(func, delay)
setInterval(func, delay, arg1)
setInterval(func, delay, arg1, arg2)
setInterval(func, delay, arg1, arg2, ..., argN)




function callback() {
  // code goes here
}
setInterval(callback, duration, arg1, arg2, ...);

*/

/* 1) we can use it with no arguments */
// function toSayILoveYou() {
//     console.log("I love you");
// }

// setInterval(toSayILoveYou, 1000); //  1000 milliseconds = 1 second // it prints I love you every 1 second.

console.log("-------------------------------------------------------------------");

/* 2) we can also use it with arguments */
// function toSayILoveYou(name) {
//     console.log(`I love you ${name}`);
// }
// setInterval(() => toSayILoveYou("John"), 1000); // 1000 milliseconds = 1 second // it prints I love you John every 1 second

console.log("-------------------------------------------------------------------");

