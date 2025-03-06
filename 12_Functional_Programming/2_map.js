/*

map: Iterate an array elements and modify the array elements. 
     It takes a callback function with elements, index , array parameter and return a new array.

*/

// 1)
const numbers = [1, 2, 3, 4, 5];

let squareNumbers = numbers.map((num) => {
    return num ** 2;
});

console.log("squareNumbers :", squareNumbers);

console.log("-------------------------------------------------------------------------------------------");

// 2)
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];

var upperNames = names.map((name) => {
    return name.toUpperCase();
});

console.log("upperNames :", upperNames);

console.log("-------------------------------------------------------------------------------------------");

// 3)
//Explicit return arrow function
var upperNames = names.map((name) => name.toUpperCase());
console.log("upperNames :", upperNames);

console.log("-------------------------------------------------------------------------------------------");

// 4)
let namesFirstThreeLetters = names.map((name) => name.charAt(0).toUpperCase() + name.slice(1, 3).toLowerCase());
console.log("namesFirstThreeLetters :", namesFirstThreeLetters);

console.log("-------------------------------------------------------------------------------------------");