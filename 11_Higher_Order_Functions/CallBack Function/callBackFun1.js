// Learn Call Back Functions ::
//  1.  A callback is a function which can be passed as a parameter to another function
//  2.  It is used to perform some operation after the execution of the main function.
//  3.  The main function is called as a callback function.
//  4.  The callback function is passed as an argument to the main function.

function a(b) {
    console.log(b);
}

a("Hello World");
a({ name: "John", age: 30, occupation: "Developer", address: "New York", phone: "1234567890", email: "john@example.com" });
a(1234567890);
a([1, 2, 3, 4, 5]);


// Output : 
//  Hello World
//  { name: 'John', age: 30, occupation: 'Developer', address: 'New York', phone: '1234567890', email: 'john@example.com' }
//  1234567890
//  [ 1, 2, 3, 4, 5 ]



console.log("-------------------------------------------------------------------------------------------------------------------------");
/* Example of a Call Back Function */

// a callback function, the name of the function could be any name
const callback = (n) => {
    return n ** 2;
} 

// main function that take other function as a callback argument
function cube(n, callback){
    return callback(n) * n;
}

let ans = cube(3, callback);
console.log("cube using callback function is :", ans);

