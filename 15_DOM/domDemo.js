// change h1 tag text
document.body.children[0].innerHTML = "Hello World";
console.log(document.body.children[0]); // <h1>Hello World</h1>
console.log(typeof document.body.children[0]); // object


console.log();

/* difference between innerHTML and innerText */
// document.body.children[0].innerHTML = "Hello <i>World</i>";   // print Hello World in italic
// console.log(document.body.children[0].innerHTML); 

// document.body.children[0].innerText = "Hello <i>World</i>";   // print Hello <i>World</i>
// console.log(document.body.children[0].innerHTML); 


/* Difference between innerText and textContent */
// ==================================================================================================
// Sl No. |                  innerText                      |                  textContent
// --------------------------------------------------------------------------------------------------
// 1.     | It returns the visible text contained in a node.| It returns the full text content.
// 2.     | It is much more performance-heavy, as it        | It is not as performance-heavy, as it 
//        | requires layout information to return the result.| doesn’t require layout information.
// 3.     | It is defined only for HTMLElement objects.     | It is defined for all Node objects.
// 4.     | This property is not supported in IE9 and       | This property is not supported in 
//        | earlier.                                        | Internet Explorer 8 and earlier.
// ==================================================================================================
