const el = document.querySelector("body > div > div:nth-child(1)");
console.log(el.parentElement); // container div

const containerDiv = document.querySelector(".container");
console.log(containerDiv.childElementCount); // 10
console.log(containerDiv.children);


let result = "Siblings of div-1:\n";
let i = 1;
let el2 = document.querySelector("body > div > div:nth-child(1)").nextSibling;
while (el2) {
    result += `${i}. ${el2.nodeName}\n`;
    el2 = el2.nextSibling;
    i++;
}

const output = document.querySelector("output");
output.innerText = result;
