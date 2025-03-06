/* Instance methods */
// node.appendChild()
// node.cloneNode()
// node.contains()
// node.hasChildNodes()
// node.insertBefore()
// node.isEqualNode()
// node.removeChild()
// node.replaceChild()
// node.toString()
// node.normalize()
// node.getRootNode()

console.log("-------------------node.appendChild()---------------------");
// node.appendChild()
const paragraph = document.body.appendChild(document.createElement("p"));
paragraph.textContent = "Hello, World!";
console.log(paragraph);



console.log("-----------------node.cloneNode()-----------------------");
// node.cloneNode()
const paragraphClone = paragraph.cloneNode(true);
document.body.appendChild(paragraphClone);
console.log("clone paragraph :", paragraphClone);



console.log("-----------------node.contains()-----------------------");
// node.contains()
console.log(document.body.contains(paragraph)); // true
console.log(document.body.contains(paragraphClone)); // true



console.log("---------------node.isEqualNode()-------------------------");
// node.isEqualNode()
console.log(document.body.hasChildNodes()); // true



console.log("------------------node.insertBefore()----------------------");
// node.insertBefore()
const h1 = document.createElement("h1");
h1.textContent = "Text insertBefore paragraph";
document.body.insertBefore(h1, paragraph);

const h2 = document.createElement("h2");
h2.textContent = "Text insertBefore paragraphClone";
document.body.insertBefore(h2, paragraphClone);



console.log("----------------node.isEqualNode()------------------------");
// node.isEqualNode()
console.log(paragraph.isEqualNode(paragraphClone)); // true



console.log("-----------------node.removeChild()-----------------------");
// node.removeChild()
const newPara= document.querySelector("p");
newPara.textContent = "Text removeChild";
paragraph.appendChild(newPara); // append newPara to paragraph
paragraph.removeChild(newPara); // remove newPara from paragraph



console.log("-----------------node.replaceChild()-----------------------");
// node.replaceChild()
const x = document.body.appendChild(document.createElement("p"));
x.textContent = "Text by x";
const y = document.body.appendChild(document.createElement("p"));   
y.textContent = "Text by y";
document.body.replaceChild(y, x);



console.log("-----------------node.toString()-----------------------");
// node.toString()
console.log(paragraph.toString()); // [object HTMLParagraphElement]



console.log("-----------------node.normalize()-----------------------");
// node.normalize()
const wrapper = document.createElement("div");

wrapper.appendChild(document.createTextNode("Part 1 "));
wrapper.appendChild(document.createTextNode("Part 2 "));

let node = wrapper.firstChild;
console.log(node);
let result = "Before normalization:\n";
while (node) {
    result += ` ${node.nodeName}: ${node.nodeValue}\n`;
    node = node.nextSibling;
}

wrapper.normalize();

node = wrapper.firstChild;
console.log(node);
result += "\n\nAfter normalization:\n";
while (node) {
  result += ` ${node.nodeName}: ${node.nodeValue}\n`;
  node = node.nextSibling;
}

const output = document.createElement("div");
output.id = "result";
output.innerText = result;
document.body.appendChild(output);



console.log("-----------------node.getRootNode()-----------------------");
// node.getRootNode()
const root = paragraph.getRootNode();
console.log(root); // #document

const root2 = newPara.getRootNode();
console.log(root2); // p