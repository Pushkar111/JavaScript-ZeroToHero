
debugger
/*
let   ==> Block-scoped     ==> scope  ===> script
var   ==> function-scoped  ==> scope  ===> Global(Anonymous)
const ==> Block-scoped     ==> scope  ===> script

function -scoped:    ==> scope  ===> Global


*/

let username = "Admin";
let password = "admin@123";
// var username = "Admin";
// var password = "admin@123";
// const username = "Admin";
// const password = "admin@123";

function login(){
    console.log(username, password);
}

login();