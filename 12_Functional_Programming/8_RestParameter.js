// let add2 = function (a, b) {
//     let sum = 0;
//     for (const i of arguments) {
//         console.log(i);
//         sum += i;
//     }
//     return sum;
// };

// console.log("sum = ", add2(1, 2, 3, 4, 5, 6, 7, 8, 9));

console.log("-----------------------------------------------------");

// Rest Parameter
console.log("Rest Parameter");
let add2 = function (...numbers) {
    console.log(numbers); // rest parameter converts arguments as an single array
    console.log(numbers.join(", "));

    return numbers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);
};

console.log("sum = ", add2(1, 2, 3, 4, 5, 6, 7, 8, 9));

console.log();

function greet(greeting, ...names) {
    console.log(greeting);
    console.log(names);
    return greeting + " " + names.join(", ") + "!";
}

console.log(greet("Hello", "Steve", "Bill", "Elon", "Jeff")); // except first argument all are rest parameter
