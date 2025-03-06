/* 1) substring(startIndex, endIndex) */
//          0123456
var data = "Indiaia";
var x = data.substring(0, 3); // substring(startIndex[inclusive], endIndex[exclusive])
console.log("substring(0, 3) : " + x); // Ind

var x = data.substring(-3); // Negative indices are treated as zero data.substring(0)
console.log("data.substring(-3) : " + x);

var x = data.substring(5, 2); // startIndex > endIndex then substring(startIndex, endIndex) swap the two values like ==> substring(endIndex, startIndex)
console.log("data.substring(5, 2) ==> substring(2, 5) : " + x);



/* 2) slice(startIndex, endIndex) */
var x = data.slice(0, 3);
console.log("slice(0, 3) : " + x); // Ind

var x = data.slice(-3); // return the last three characters of the string.
console.log("data.slice(-3) : " + x);



/* 3) search() */
var x = data.search("d"); // 2
console.log("data.search('d') : " + x);

var x = data.search("Ram"); // -1
console.log("data.search('Ram') : " + x);



/* 4) valueOf() */
var x = data.valueOf();
console.log("data.valueOf() : " + x);



/* 5) replace() */
var x = data.replace("i", "#"); // Ind#aia
console.log("data.replace('i', '#') : " + x);

var x = data.replace(/i/g, "#"); // Ind#a#a // ==> /g --> stands for "global" means all the matches will be replaced
console.log("data.replace(/i/g,'#') : " + x);

var x = data.replaceAll("i", "I");
console.log("data.replaceAll('i', 'I') : " + x);



/* 6) split() */
var x = data.split("i"); // ["Ind", "a", "a"]
console.log("data.split('i') : " + x);

var x = data.split(""); // ["I", "n", "d", "i", "a", "i", "a"]
console.log("data.split('') : " + x);

var add = "C-204, Bhaviknagar Soc, Opp.Ambe Mata Temple, Adinathnagar, Odhav, Ahemdabad, 382415";
var x = add.split(",");
console.log(x);



/* 7) padStart() */
var mob = "27".padStart(10, "X");
console.log("Mobile Number : " + mob);

var AdharDetail = "7856".padStart(16, "*");
console.log("Adhar Number : " + AdharDetail); 

var x = "10".padStart(5, "0");
console.log("'10'.padStart(5, '0') : ", x); // 00010

var x = "10".padStart(5, "a");
console.log("'10'.padStart(5, 'a') : ", x); // aaaaa



/* 8) padEnd() */
var str = "calling";
var x = str.padEnd(10, ".");
console.log("str.padEnd(10, '.') : ", x);

var x = "10".padEnd(5, "#0");
console.log("'10'.padEnd(5, '0') : ", x); // 10#0#

var x = "10".padEnd(15, "AaBbCc");
console.log("'10'.padEnd(15, 'AaBbCc') : ", x); // 10AaBbCcAaBbCcA


