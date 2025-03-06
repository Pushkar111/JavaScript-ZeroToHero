let nums = [1, 2, 3, 4, 5];

function applyOperation(arr, operation) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(operation(arr[i]));
    }
    return result;
}

function double(n) {
    return n * 2;
}

function square(n) {
    return n ** 2;
}

let doubleNums = applyOperation(nums, double);
let squareNums = applyOperation(nums, square);

console.log("doubleNums : ", doubleNums);
console.log("squareNums : ", squareNums);
