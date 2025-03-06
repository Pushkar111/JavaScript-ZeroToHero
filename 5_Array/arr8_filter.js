// filter

const words = ["spray", "elite", "exuberant", "destruction", "present"];
const result = words.filter((word) => word.length > 6);
console.log(result);

/* 1) Filtering out all small values */
let nums = [12, 5, 8, 130, 44];

function isSmall(num) {
  return num < 40;
}

let smallNums = nums.filter(isSmall); // let smallNums = nums.filter((num) => num < 40);
console.log("smallNums : ", smallNums);

console.log("-------------------------------------------------------------------------------------------");

/* 2) Find all prime numbers in an array */
let a = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
}
var primeNums = a.filter(isPrime);
console.log("primeNums : ", primeNums);

console.log("-------------------------------------------------------------------------------------------");

/* 3) Filtering invalid entries from JSON */
const arr = [{ id: 15 }, { id: -1 }, { id: 0 }, { id: 3 }, { id: 12.2 }, {}, { id: null }, { id: NaN }, { id: "undefined" }];

let invalidEntries = 0;

function filterByID(item) {
  if (Number.isFinite(item.id) && item.id !== 0) {
    return true;
  }
  invalidEntries++;
  return false;
}

const filArr = arr.filter(filterByID);
console.log("Filtered Array\n", filArr); //  [ { id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 } ]
console.log("Number of Invalid Entries =", invalidEntries); // 5

console.log("-------------------------------------------------------------------------------------------");

/* 4) Searching in array */
const fruits = ["apple", "banana", "grapes", "mango", "orange"];

function filterItems(fruits, query) {
  return fruits.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}
console.log(filterItems(fruits, "ap"));// [ 'apple', 'grapes' ]
console.log(filterItems(fruits, "an"));// [ 'banana', 'mango', 'orange' ]
