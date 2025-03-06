/*
Syntax of Function Declaration
=====================================
1) without argument and without return type

    function functionName() {
        // function body
    }
    
2) with argument and without return type
    function functionName(parameterName1, parameterName2, .....) { 
        // function body
    }

3) without argument and with return type
    function functionName() : returnType {
        // function body
    }

4) with argument and with return type
    function functionName(parameterName1, parameterName2, .....) : returnType {
        // function body
    }
*/

// Calc using function
function add() {
    let a = 10;
    let b = 20;

    let ans = a + b;

    result.innerHTML = ans;

    console.log("Addition :", result);
}

function sub(a, b) {
    let ans = a - b;
    result.innerHTML = ans;
console.log("Subtraction :", result);
}

function mult() {
    let a = 10;
    let b = 20;
    let ans = a * b;
    return ans;
}

function div(a, b) {
    ans = b !== 0 ? a / b : "Error! Division by zero is not allowed.";
    return ans;
}

// calling the functions
add();
sub(10, 20);
console.log("Multiplication :", mult());
console.log("Division :", div(10, 20));
