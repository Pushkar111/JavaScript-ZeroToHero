const user = {
    name: "John",
    age: 30,
};
console.log("user :", user, " ==>", typeof user);

const json = JSON.stringify(user);
console.log("JSON.stringify(user) :", json, " ==>", typeof json); 

const obj = JSON.parse(json);
console.log("JSON.parse(json) :", obj, " ==>", typeof obj);

console.log("-------------------------------------------------------------------------------------------");

// accessing keys and values -- Object.keys()
Object.keys(user).forEach((key) => {
    console.log(key, ":", user[key]);
});

// accessing values only -- Object.values()
Object.values(user).forEach((value) => {
    console.log(value);
});

console.log("-------------------------------------------------------------------------------------------");

// accessing keys and values -- Object.entries()
Object.entries(user).forEach(([key, value]) => {
    console.log(key, ":", value);
});

console.log("-------------------------------------------------------------------------------------------");

// Object.assign()
Object.assign(user, { name: "Kunal" });
Object.assign(user, { age: 18 });
console.log("Object.assign() :", user);

console.log("-------------------------------------------------------------------------------------------");

// creating a new object using Object.assign() and copying all the properties
function cpyUser() {
    return Object.assign({}, user);
}
console.log(cpyUser(), " ==>", typeof cpyUser());



console.log("-------------------------------------------------------------------------------------------");
// greeting function inside object 
user.greeting1 = function greetings(user) {
    return `Hello ${user.name}!, you are ${user.age} years old.`;
};
console.log(user.greeting1(user));
