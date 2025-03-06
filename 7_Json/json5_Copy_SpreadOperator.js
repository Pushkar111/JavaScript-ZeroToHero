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
