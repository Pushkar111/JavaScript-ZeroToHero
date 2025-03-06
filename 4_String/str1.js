// Char Array ==> String ==> String is immutable
var str = "JavaScript";
console.log(str);

console.log(str[0]); // J

// iterate string
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}

// 0123456789
// JavaScript
var x = str.charAt(1);
console.log(x); // a

// 0123456789
// JavaScript
var y = str.charCodeAt(1);
console.log(y); // a --> ASCII --> 97

var z = String.fromCharCode(y); // 97 --> a
console.log(z);

var z1 = String.fromCharCode(str.charCodeAt(1) - 32); // a --> A
console.log(z1);

var user = "Amit";
var upperUser = "";
for (let i = 0; i < user.length; i++) {
  if (user.charCodeAt(i) >= 97 && user.charCodeAt(i) <= 122) {
    upperUser += String.fromCharCode(user.charCodeAt(i) - 32);
  } else {
    upperUser += user[i];
  }
}
console.log("User Logic : " + upperUser);

var p1 = "amit";
p1 = p1.toUpperCase();
console.log("toUpperCase() : " + p1);

var q1 = "AMIt";
q1 = q1.toLowerCase();
console.log("toLowerCase() : " + q1);

let str1 = "Royal Technosoft";
let str2 = " P Limited";

var result = str1.concat(str2); // Royal Technosoft P Limited
console.log(result);

var result = str1.concat(", ", str2);
console.log(result);

var result = str1.concat(", ", str2, " - India");
console.log(result);
