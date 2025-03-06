console.log("Operators in JS");

// Arithmetic Operators
console.log("Arithmetic Operators");
let a = 45;
let b = 4;
console.log("a + b = ", a + b); // Addition → 49
console.log("a - b = ", a - b); // Subtraction → 41
console.log("a * b = ", a * b); // Multiplication → 180
console.log("a / b = ", a / b); // Division → 11.25
console.log("a ** b = ", a ** b); // Exponentiation → 41,00,625
console.log("a % b = ", a % b); // Modulus → 1
console.log("a++ = ", a++); // Post-Increment → 45
console.log("a-- = ", a--); // Post-Decrement → 46
console.log("++a = ", ++a); // Pre-Increment → 46
console.log("--a = ", --a); // Pre-Decrement → 45

console.log("-------Exercise-------");
// Exercise
let c = 10;
console.log("++c =", ++c); // → 11
console.log("c++ =", c++); // → 11
console.log("--c =", --c); // → 11
console.log("c-- =", c--); // → 11
console.log("c =", c); // → 10
console.log("c-- =", c--); // → 10

console.log("-------------------------------------------------------------------------------------------");

// Assignment Operators
console.log("Assignment Operators");
let d = 8;
d += 5; // same as d = d + 5
console.log("d is now = ", d); // → 13
d -= 5; // same as d = d - 5
console.log("d is now = ", d); // → 8
d *= 5; // same as d = d * 5
console.log("d is now = ", d); // → 40
d /= 5; // same as d = d / 5
console.log("d is now = ", d); // → 8
d **= 5; // same as d = d ** 5
console.log("d is now = ", d); // → 32,768
d %= 5; // same as d = d % 5
console.log("d is now = ", d); // → 3

console.log("-------------------------------------------------------------------------------------------");

// Comparison Operators
console.log("Comparison Operators");
let comp1 = 6;
let comp2 = 7;
console.log("comp1 == comp2 is ", comp1 == comp2); // Equal to → false
console.log("comp1 != comp2 is ", comp1 != comp2); // Not Equal to → true
console.log("comp1 === comp2 is ", comp1 === comp2); // Equal value and type → false
console.log("comp1 !== comp2 is ", comp1 !== comp2); // Not Equal value or Not Equal type → true
console.log("comp1 > comp2 is ", comp1 > comp2); // Greater than → false
console.log("comp1 < comp2 is ", comp1 < comp2); // Less than → true
console.log("comp1 >= comp2 is ", comp1 >= comp2); // Greater than or equal to → false
console.log("comp1 <= comp2 is ", comp1 <= comp2); // Less than or equal to → true

console.log("-------------------------------------------------------------------------------------------");

// Ternary Operator
console.log("Ternary Operator");
let p = 21;
console.log("You can", p < 18 ? "not drive" : "drive"); // Ternary Operator

let age = 20;
let message = age >= 18 ? "You are an adult" : "You are a minor"; // Ternary Operator
console.log(message);

//40>hot
//30>moderate
//20>cool
//freezing
var temp = 45;
temp > 40 ? console.log("hot") : temp > 30 ? console.log("moderate") : temp > 20 ? console.log("cool") : console.log("freezing");

console.log("-------------------------------------------------------------------------------------------");

// Logical Operators
console.log("Logical Operators");
let x = 5;
let y = 6;
console.log(x < y && x == 5); // Logical AND → true
console.log(x > y || x == 5); // Logical OR → true
console.log(!false); // Logical NOT → true
console.log(!true); // Logical NOT → false
console.log("-------------------------------------------------------------------------------------------");
// Comments
// This is a single line comment
/* This is a sample multiline comment and a tutorial
from 
Learn JS Comments */
