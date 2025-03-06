// 01234
var country = "india";

var index = country.indexOf("o"); // not found ==> -1
console.log(index);

var index = country.indexOf("a"); // found ==> return index
console.log(index);

var index = country.indexOf("i", 4); // not found ==> -1
console.log(index);

var ind = -1;
for (let i = 0; i < country.length; i++) {
  if (country[i] == "i") {
    ind = i;
    break;
  }
}
console.log(ind);

// remove duplicate characters

const str = "indiaax";
let result = "";

for (let i = 0; i < str.length; i++) {
  const char = str[i];
  if (result.indexOf(char) === -1) {
    result += char;
  }
}

console.log(result);
