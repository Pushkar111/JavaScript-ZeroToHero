function test() {
    console.log("test() called");
}

test();

console.log("-------------------------------------");

function add(a, b) {
    console.log(a);
    console.log(b);
    return a + b;
}

let sum = add(10, 20);
console.log("Addition :", sum); // 10 + 20  = 30

let x = add();
console.log(x); //  undefined +  undefined = NaN

console.log("-------------------------------------");

function introMe(name, age, profession) {
    console.log(`My name is ${name || "Unknown"} and I am ${age} years old. I am a ${profession}.`);
}

introMe("Pushkar", 25, "Software Engineer");
introMe("", 19, "Civil Engineer"); 