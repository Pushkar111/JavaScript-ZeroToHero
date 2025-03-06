/*
-> Primitives Data types → 7 Types
========================
nn ss bb u
1. Null
2. Number
3. Symbol
4. String
5. Boolean
6. BigInt
7. Undefined
*/
let a = null;
let b = 345;
let c = Symbol("I am a nice symbol");
let d = "JavaScript";
let e = true;
let f = BigInt("567") + BigInt("3");
let g = undefined; // let g; // same as let g = undefined;
console.log(a, b, c, d, e, f, g);
console.log("type of a :", typeof a);
console.log("type of b :", typeof b);
console.log("type of c :", typeof c);
console.log("type of d :", typeof d);
console.log("type of e :", typeof e);
console.log("type of f :", typeof f);
console.log("type of g :", typeof g);

// objects in js (non-primitive data types)
const item = {
    "JavaScript": true,
    "Shubh": false,
    "Lovish": 67,
    "Rohan": undefined
}


console.log(item["JavaScript"]);
console.log(item["Shubh"]);
console.log(item["Lovish"]);
console.log(item["Rohan"]);