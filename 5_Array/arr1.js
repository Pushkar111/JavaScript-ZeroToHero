let arr = [1, 2, 3, 4, 5, 6, 12, 24, 23, 21];

// iterate
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.log(arr.join(" "));

// find max
// find min
// find sum
let max = arr[0];
let min = arr[0];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
  if (arr[i] < min) {
    min = arr[i];
  }
  sum = sum + arr[i];
}
console.log("max : " + max);
console.log("min : " + min);
console.log("Sum : " + sum);

console.log();
// ------------------------------------------------------
var data = ["java", "python", "javascript", "c++", "react", "spring", "node"];

var x = data.join(" "); // use as a separator
console.log("data.join(' ') : " + x);

var x = data.join(","); // use as a separator
console.log("data.join(',') : " + x);

var x = data.push("c#");
console.log("data.push('c#') : " + x);
console.log(data);

var x = data.pop();
console.log("data.pop() : " + x);
console.log(data);

console.log();
// -------------------------------------------------------------
let a = [5, 4, 3, 2, 1, 79, 9, 8, 7, 6];

a.unshift(100); // works as InsertAtFirst
console.log("a.unshift(100) - [InsertAtFirst] : " + a);

var x = a.shift(); // works as DeleteAtFirst
console.log("First Element : " + x);
console.log("a.shift() - [DeleteAtFirst] : " + a);


