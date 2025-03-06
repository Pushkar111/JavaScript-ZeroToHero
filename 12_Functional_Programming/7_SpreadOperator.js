// combine arrays
let n1 = [1, 2, 3, 4, 5];
let n2 = [6, 7, 8, 9, 10];

var merge = n1.concat(n2);
console.log(merge);

var merge = [...n1, ...n2];
console.log(merge);



// copy array
let n3 = [...n1];
console.log(n3);




// combining two objects
const obj1 = {
    name: "John",
    age: 30,
};
const obj2 = {
    occupation: "Developer",
    country: "USA",
};
const combined = { ...obj1, ...obj2 }; // spread operator
console.log("combined :", combined);

const combined2 = Object.assign({}, obj1, obj2);
console.log("combined2 :", combined2);

const combined3 = { ...obj1, address: "123 Main St", ...obj2 };
console.log("combined3 :", combined3);



// copy object
const Team = {
    name: "Real Madrid",
    country: "Spain",
    titles: 34,
};

const Team2 = { ...Team };
console.log(Team2);
