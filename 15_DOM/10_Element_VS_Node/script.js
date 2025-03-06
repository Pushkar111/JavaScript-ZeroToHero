console.log(document.body.children); // HTMLCollection(2) [h1, script]
console.log(document.body.childNodes); // NodeList(5) [text, h1, text, script, script]

document.body.childNodes.forEach((node) => {
    console.log(node, typeof node);
});

console.log("====================================");

document.body.childNodes.forEach((node) => {
    console.dir(node);
});
/*
======================================
Name	                        Value
======================================
1) ELEMENT_NODE	                1       ------> 
2) ATTRIBUTE_NODE	            2       ------> 
3) TEXT_NODE	                3       ------>
4) CDATA_SECTION_NODE	        4
5) PROCESSING_INSTRUCTION_NODE	7
6) COMMENT_NODE	                8       ------>
7) DOCUMENT_NODE	            9       ------>
8) DOCUMENT_TYPE_NODE	        10
9) DOCUMENT_FRAGMENT_NODE	    11
======================================

*/
console.log("====================================");
console.log(document.body.children);
console.dir(document.body.children[0]); // h1
console.log("document.body.children[0].nodeType : " + document.body.children[0].nodeType); // 1
console.dir(document.body.children[0].attributes[0]); // style
console.log("document.body.children[0].attributes[0].nodeType : " + document.body.children[0].attributes[0].nodeType); // 2
console.log(document.nodeType); // 9
console.log(document.nodeValue); // null
console.log(document.nodeName); // #document



console.log("====================================");
/* Instance properties */
// baseURI
console.log(document.body.children[0].baseURI); // h1

// childNodes
console.log(document.body.childNodes); // NodeList(6) [text, h1, text, comment, text, script]

// firstChild
console.log(document.body.firstChild); // #text

// lastChild
console.dir(document.body.lastChild); // script

// nextSibling
console.log(document.body.firstChild.nextSibling); // h1  -- nextSibling of #text is h1
console.log(document.body.firstElementChild.nextSibling); // text -- nextSibling of h1 is #text

// previousSibling
console.log(document.body.lastChild.previousSibling); // #text -- previousSibling of script is #text
console.log(document.body.lastElementChild.previousSibling); // #text -- previousSibling of script is text

// parentElement
console.log(document.body.firstElementChild.parentElement); // body
console.log(document.body.parentElement); // html

// nodeName
console.log(document.body.nodeName); // BODY
console.log(document.body.children[0].nodeName); // H1

// nodeType
console.log(document.body.nodeType); // 1
console.log(document.body.children[0].nodeType); // 1

// nodeValue
console.log(document.body.nodeValue); // null
console.log(document.body.children[0].nodeValue); // null


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
