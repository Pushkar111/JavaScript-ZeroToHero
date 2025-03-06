const colours = ["red", "green", "blue", "yellow", "orange"];

let firstColour = colours[0];
console.log(firstColour);
let secondColour = colours[1];
console.log(secondColour);
let thirdColour = colours[2];
console.log(thirdColour);
let fourthColour = colours[3];
console.log(fourthColour);
let fifthColour = colours[4];
console.log(fifthColour);

console.log();

const [first, second, third, fourth, fifth] = colours;

console.log([first, second, third, fourth, fifth]);
console.log(first);
console.log(second);
console.log(third);
console.log(fourth);
console.log(fifth);

console.log();

const [, , , fourthColour2] = colours;

console.log(`[,,,fourthColour2] : `, fourthColour2);

console.log("------------------ ------------------ ------------------");
console.log();

// need some values from array
function getColour([a, b, , d]) {
    console.log(a, b, d);
}

getColour(colours);
