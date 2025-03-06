// Hosting : hosting is a process in which variable, function and class are declared top of the code before they Execute.
// Notes ====> Always Declaration can be hosted , but initialization can't be hosted
//       ====> Function Expression (= function declaration) can be not hosted.

// ---------------------------------------------------------------------------------------------------
// greet1(); // TypeError: greet1 is not a function

// var greet1 = () => {
//     console.log("Hi This is greeting function");
// }

// ---------------------------------------------------------------------------------------------------
// greet2(); // ReferenceError: Cannot access 'greet2' before initialization

// let greet2 = () => {
//     console.log("Hi This is greeting function");
// }
// ---------------------------------------------------------------------------------------------------
greet3(); // ReferenceError: Cannot access 'greet3' before initialization

const greet3 = () => {
    console.log("Hi This is greeting function");
};
