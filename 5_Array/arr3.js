var lang = ["hindi", "english", "kannada", "malayalam", "tamil"];

lang.some((l)=>{
    console.log(l)
})

var x = lang.some((l)=>{
    return l.length > 10; // return predicate.. true or false
})
console.log("l.length > 10 : " + x);


var x = lang.every((l)=>{
    return l.includes("a"); // return predicate.. true or false
})
console.log("l.includes('a') : " + x);


var flag = false;

for (let i = 0; i < lang.length; i++) {
    if (lang[i].length <= 5) {
        flag = false;
        break;
    } else {
        flag = true;
    }
}
console.log(flag);