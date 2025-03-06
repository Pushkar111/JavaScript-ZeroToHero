const user = {
    id: 1,
    name: "John",
    age: 25,
    email: "jhon@gmail.com",
    phone: "123456789",
    website: "www.john.com",
};


console.log(user.name); // John
console.log(user.address); // undefined
console.log(user.address.city); // Uncaught TypeError: Cannot read property 'city' of undefined


// Solution 1 - Using if statement
if (user.address) {
    console.log(user.address.city);
} else {
    console.log("Address is not available");
}

// Solution 2 - Using ternary operator
// console.log(user.address ? user.address.city : "Address is not available");
console.log(user.address && user.address.city);

// Solution 3 - Using Optional Chaining
console.log(user.address?.city);