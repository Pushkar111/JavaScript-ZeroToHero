// Hosting : hosting is a process in which variable, function and class are declared top of the code before they Execute.
// Notes ====> Always Declaration can be hosted , but initialization can't be hosted
//       ====> Function Expression (= function declaration) can be not hosted.

greet();

function greet() {
    console.log("Hi This is greeting function");
}

// ------------------------------------------------------------------------------------------------
a(); // var -> TypeError: a is not a function
    // let -> ReferenceError: Cannot access 'a' before initialization
    // const ->  ReferenceError: Cannot access 'a' before initialization

var a = function test() { // Functions Expression
    console.log("test() called");
};

a(); // test() called
