function add(a, b) {
    console.log(arguments);
    console.log(a + b);
}

add(4, 5, 6, 7, 8, 9);

console.log("----------------------------------------------------------------");

let add2 = function (a, b) {
    let sum = 0;
    for (const i of arguments) {
        console.log(i);
        sum += i;
    }
    return sum;
};

console.log("sum = ", add2(1, 2, 3, 4, 5, 6, 7, 8, 9));
