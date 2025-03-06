const myAttributes = document.querySelectorAll("[mySelf]");
console.log(myAttributes);

myAttributes.forEach((element) => {
    console.log(element.attributes);
    console.log(element.attributes.mySelf.value);
    console.log(element.attributes.mySelf.nodeValue);
    console.log(element.getAttribute("mySelf")); // getAttribute
    console.log(element.getAttribute("id")); // getAttribute
});


// getAttribute
const allLabels = document.querySelectorAll("label");
console.log(allLabels);
allLabels.forEach((label) => {  
    console.log(label.getAttribute('for'));
});


// setAttribute
const myH1 = document.getElementById("setAttributeH1");
myH1.setAttribute("title", "Hello World");
console.log(`myH1 title by getAttribute : ${myH1.getAttribute("title")}`);

myH1.setAttribute("mySelf", "Pushkar"); // by setAttribute applied style of mySelf tag to other

const yrPara = document.querySelector(".randomParagrph");
yrPara.setAttribute("id", "randomPara");
console.log(`yrPara.getAttribute("id") : ${yrPara.getAttribute("id")}`); 
console.log(`yrPara.getAttribute("id") : ${yrPara.id}`); // id is also a property of element 
yrPara.id = "changedParaID";
console.log(`yrPara.getAttribute("id") : ${yrPara.getAttribute("id")}`);
console.log(`yrPara.getAttribute("id") : ${yrPara.id}`);


