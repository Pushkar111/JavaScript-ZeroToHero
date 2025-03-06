// database with objects

const database = [
    {
        username: "john",
        password: "123",
    },
    {
        username: "sarah",
        password: "456",
    },
    {
        username: "alex",
        password: "789",
    },
];

console.log("database :", database, " ==>", typeof database);

// access username
let unames = database.map((user) => {
    return user.username;
});
console.log("unames :", unames, " ==>", typeof unames);

// convert first letter to uppercase and rest to lowercase
let initnames = unames.map((name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
});
console.log("init unames :", initnames, " ==>", typeof initnames);


console.log("-------------------------------------------------------------------------------------------");

let keys = Object.keys(database);
console.log("keys :", keys, " ==>", typeof keys);

let values = Object.values(database);
console.log("values :", values, " ==>", typeof values);

let entries = Object.entries(database);
console.log("entries :", entries, " ==>", typeof entries);

console.log("-------------------------------------------------------------------------------------------");

// Iterate using map
Object.keys(database).map((key) => {
    console.log(key, ":", database[key]);
});

console.log("-------------------------------------------------------------------------------------------");

// using find - returns object
var isAvail = database.find((user) => {
    return user.username === "john" && user.password === "123" ? true : false;
});
console.log("isAvail :", isAvail, " ==>", typeof isAvail);

// using some - returns true or false
var isAvail = database.some((user) => {
    return user.username === "john" && user.password === "123" ? true : false;
});
console.log("isAvail :", isAvail, " ==>", typeof isAvail);

console.log("-------------------------------------------------------------------------------------------");

console.log(Object.getOwnPropertyNames(database)); // [ '0', '1', '2', 'length' ]

console.log(Object.hasOwn(database, 0)); // check index of object[json] in above case index are 0,1,2 for true else  false

console.log(Object.getOwnPropertyDescriptors(database));
