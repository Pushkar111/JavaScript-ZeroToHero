const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("arr1 : ", arr1);

// map
const arr2 = arr1.map((element) => {
  return element * element;
});

console.log("arr2 : ", arr2);


console.log("-------------------------------------------------------------------------------------------");


/* 1) Mapping an array of numbers to an array of square roots */
const roots = arr2.map((element) => {
  return Math.sqrt(element);
});
console.log("SQRT of Arr2 : ", roots);


console.log("-------------------------------------------------------------------------------------------");



/* 2) Mapping an array of strings to an array of strings with uppercase, lowercase and the first letter capitalized */
const lang = ["java", "python", "js", "react", "spring", "node"];

const upperLang = lang.map((strElement) => {
  return strElement.toUpperCase();
});
console.log("upperLang : ", upperLang);

const lowerLang = lang.map((strElement) => {
  return strElement.toLowerCase();
});
console.log("lowerLang : ", lowerLang);

const initcapLang = lang.map((strElement) => {
  return strElement.charAt(0).toUpperCase() + strElement.slice(1).toLowerCase();
});
console.log("initcapLang : ", initcapLang);

console.log("-------------------------------------------------------------------------------------------");



/* 3) Using map to reformat objects in an array */
const kvArr = [
  { key: 1, value: "One" },
  { key: 2, value: "Two" },
  { key: 3, value: "Three" },
];

var reformatArr = kvArr.map((obj) => {
  return { key: obj.key, value: obj.value.toUpperCase() };
});
console.log("reformatArr : ", reformatArr);

var reformatArr = kvArr.map(({ key, value }) => ({ [key]: value }));
console.log("reformatArr : ", reformatArr);

console.log("-------------------------------------------------------------------------------------------");



/* 4) Using parseInt() with map() */
let nums = ["1", "2", "3", "4.23", "5", "6.13", "7", "8", "9", "10"];
var parseIntNums = [];

console.log("-- Without using map");
console.log("type : ", typeof nums[0]);
for (let i = 0; i < nums.length; i++) {
    parseIntNums[i] = Number.parseInt(nums[i]);
}
console.log("parseIntNums :: built in function" , parseIntNums, "\ntype : ", typeof parseIntNums[0]);


var parseIntNums = [];
console.log("-- With using map");
console.log("type : ", typeof nums[0]);
nums.map((numStr)=>{
    parseIntNums.push(Number.parseInt(numStr));
})
console.log("parseIntNums :: map function" , parseIntNums, "\ntype : ", typeof parseIntNums[0]);