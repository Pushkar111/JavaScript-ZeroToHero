var n1 = 13;
var n2 = 2;

// min 
let minValue = Math.min(n1, n2);
console.log("minValue : " + minValue); // 2

// max
let maxValue = Math.max(n1, n2);
console.log("maxValue : " + maxValue); // 13

// abs
let avg = Math.abs((n1 + n2) / 2);
console.log("avg : " + avg); // 10

let absValue = Math.abs(n2 - n1);
console.log("absValue : " + absValue); // 11
console.log(Math.abs(-11));

// pow
let powValue = Math.pow(2, 5);
console.log("powValue : " + powValue); // 32

// sqrt
let sqrtValue = Math.sqrt(25);
console.log("sqrtValue : " + sqrtValue); // 5

// cbrt
let cbrtValue = Math.cbrt(27);
console.log("cbrtValue : " + cbrtValue); // 3

// ceil
let ceilValue = Math.ceil(3.2);
console.log("ceilValue : " + ceilValue); // 4

// floor
let floorValue = Math.floor(3.8);
console.log("floorValue : " + floorValue); // 3

// round
var roundValue = Math.round(3.2);
console.log("roundValue : " + roundValue); // 3

var roundValue = Math.round(3.5);
console.log("roundValue : " + roundValue); // 4

var roundValue = Math.round(3.8);
console.log("roundValue : " + roundValue); // 4

// random
var randomValue = Math.random();
console.log("randomValue : " + randomValue); // 0.0 to 1.0 any Value

var randomValue = Math.random() * 100;
console.log("randomValue : " + randomValue); // 0.0 to 100.0 any Value  

var randomValue = Math.floor(Math.random() * 100);
console.log("randomValue : " + randomValue); // 0 to 99

var randomValue = Math.floor(Math.random() * 100) + 1;
console.log("randomValue : " + randomValue); // 1 to 100

// random color
var randomColor = Math.floor(Math.random() * 16777215).toString(16);
console.log("randomColor : #" + randomColor);

// trunc
let truncValue = Math.trunc(11.121);
console.log("truncValue : " + truncValue); // 11

// modulus
var modValue = 10 % 3;
console.log("modValue : " + modValue); // 1

// PI
console.log("PI : " + Math.PI); // 3.141592653589793

// E
console.log("E : " + Math.E); // 2.71828

// LN2
console.log("LN2 : " + Math.LN2); // 0.6931471805599453

// LN10
console.log("LN10 : " + Math.LN10); // 2.302585092994046

// LOG2E
console.log("LOG2E : " + Math.LOG2E); // 1.4426950408889634

// LOG10E
console.log("LOG10E : " + Math.LOG10E); // 0.4342944819032518

// SQRT1_2
console.log("SQRT1_2 : " + Math.SQRT1_2); // 0.7071067811865476

// SQRT2
console.log("SQRT2 : " + Math.SQRT2); // 1.4142135623730951