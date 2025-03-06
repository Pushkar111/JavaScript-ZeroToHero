function add(a, b) {
    console.log(a + b);
}

add(4, 5); // 9
add(4, undefined); // NaN (Not a Number) because b is undefined [ 4 + undefined = NaN ]
add(4); // NaN (Not a Number) because b is undefined [ 4 + undefined = NaN ]
add(); // NaN (Not a Number) because a and b are undefined [ undefined + undefined = NaN ]

console.log("----------------------------------------------------------------------------");

// To avoid the NaN, we can set default values for a and b

function add2(a = 0, b = 0) {
    console.log(a + b);
}

add2(4, 5); // 9
add2(4, undefined); // 4 (4 + 0 = 4)
add2(4); // 4 (4 + 0 = 4)
add2(); // 0 (0 + 0 = 0)

console.log("----------------------------------------------------------------------------");

// but if we pass null, it will be considered as null

function mult(a = 0, b = 1) {
    console.log(a * b);
}

mult(4, 5); // 20
mult(4, null); // 4 (4 * null[0] = 0)


console.log("----------------------------------------------------------------------------");

function rollDie(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1;
}

console.log(rollDie()); // 1 to 6