/*
let can be updated but not re-declared.

var is globally scoped while let and 
var => Before ES6 (ECMAScript 6)
var can be updated and re-declared within its scope.
var variables are initialized with undefined whereas let and const variables are not initialized.

const are block scoped.
const must be initialized during declaration unlike let and var.
const must be initialized with a value during declaration.
const must be assigned a value during runtime.
const can neither be updated nor be re-declared.
     

 */
// 1. var, let, const
var x = 100;
console.log("value of x : ", x);

{
    console.log("value of x inside block : ", x);
    var y = 200;
    console.log("value of y inside block : ", y);
    {
        var z = 300;
        console.log("value of z : ", z);
    }
}

console.log("value of y outside block : ", y);
console.log("value of z outside block : ", z);

var y = 400;
console.log("value of y : ", y);

console.log("--------------------------------------------------");

// 2. let
let a = 100;
console.log("value of a : ", a);

{
    console.log("value of a inside block : ", a);
    let b = 200;
    console.log("value of b inside block : ", b);
    {
        let c = 300;
        console.log("value of c : ", c);
        console.log("value of b inside-inside block : ", b);
        console.log("value of a inside-inside block : ", a);
    }
}

// console.log("value of b outside block : ", b);  // ReferenceError: b is not defined
// console.log("value of c outside block : ", c);  // ReferenceError: c is not defined

console.log("--------------------------------------------------");

// 2. const
var p = 45;
const type = "JavaScript"; // <|constant cannot be changed|>
let q = "JavaScript";
var r = null;
var s = undefined;
{
    let q = "this";
    console.log(q); // print this 
}
console.log(q); // print JavaScript
