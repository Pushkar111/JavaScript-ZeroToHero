/*
=> forEach
forEach: Iterate an array elements. We use forEach only with arrays. 
         It takes a callback function with elements, index parameter and array itself. The index and the array optional.
*/

const arr = [10, 20, 30, 40, 50];

// 1)
arr.forEach((index, element, arr) => {
    console.log(index, element, arr);
});

console.log("-------------------------------------------------------------------------------------------");

// 2)
let sum = 0;
arr.forEach((element) => {
    sum += element;
});
console.log(arr, "=> sum :", sum);

console.log("-------------------------------------------------------------------------------------------");

// 3)
const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"];
let upperCountries = [];
countries.forEach((element) => {
    upperCountries.push(element.toUpperCase());
});
console.log(upperCountries);
