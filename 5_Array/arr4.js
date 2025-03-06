var lang = ["hindi", "english", "kannada", "malayalam", "tamil"];

// Loops

// Simple for loop
console.log("Iterate using Simple For loop");
for (let i = 0; i < lang.length; i++) {
  console.log(lang[i]);
}

console.log();

// for of loop
console.log("Iterate using forOf");
for (const i of lang) {
  console.log(i);
}

console.log();

// for in loop
console.log("Iterate using forin");
for (const i in lang) {
  console.log(lang[i]);
}

console.log();

// forEach
console.log("Iterate using forEach");
lang.forEach((l) => {
  console.log(l);
});

console.log();

// map
console.log("Iterate using map");
lang.map((l) => {
  console.log(l);
});

console.log();

var lang = lang.map((l) => {
  return l.toUpperCase();
});
console.log("lang in uppercase : ", lang);

console.log();

// filter
var lang = ["hindi", "english", "kannada", "malayalam", "tamil"];

console.log("Iterate using filter");
lang.filter((l) => {
  console.log(l);
});

console.log();

var l1 = lang.filter((l) => {
  return l.length > 2;
});
console.log("l1 with filter : ", l1);

console.log();

var l1 = [];
for (let i = 0; i < lang.length; i++) {
  if (lang[i].length > 2) {
    l1.push(lang[i]);
  }
}
console.log("l1 without filter : ", l1);

console.log();

var l2 = lang.filter((l) => {
  return l.includes("h");
});
console.log("l2 - [l.includes('h')] : ", l2);

// ---------------------------------------------------------

// Palindrome Custom Function

// 1) without regex
const isPalindrome = (str) => {
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return str === str.split("").reverse().join("");
};

console.log("isPalindrome('madam') : " + isPalindrome("madam"));

// 2) using logic
const isPalindrome2 = (str) => {
  let rev = "";
  
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  //   console.log("Reverse String : " + rev);
  
  if (str == rev) {
    return true;
  } else {
    return false;
  }
};
console.log("isPalindrome2('madam') : " + isPalindrome2("madam"));

console.log();
// ---------------------------------------------------------

// reduce
var marks = [34, 98, 65, 64, 28];

console.log("without reduce");
var total = 0;
for (let i = 0; i < marks.length; i++) {
  total = total + marks[i];
}
console.log(total)

console.log();

console.log("with reduce");
var total = marks.reduce((a, b) => {
    return a + b;
})
console.log(total)