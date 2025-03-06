const fruits = ["apple", "banana", "grapes", "mango", "orange"];
const shallowCopy = [...fruits]; // shallow copy
const deepCopy = JSON.parse(JSON.stringify(fruits)); // deep copy

console.log("Shallow Copy\n", shallowCopy); //  [ 'apple', 'banana', 'grapes', 'mango', 'orange' ]
console.log("Deep Copy\n", deepCopy); //  [ 'apple', 'banana', 'grapes', 'mango', 'orange' ]