const container = document.querySelector(".container");
const card = document.querySelector(".card");

const heading = document.querySelector("h1");
// card.appendChild(heading); // cut-paste
// card.appendChild(heading.cloneNode(true)); // copy-paste

// container.appendChild(card)
// container.appendChild(card.cloneNode(true))
// container.appendChild(card.cloneNode())

for (let i = 2; i <= 100; i++) {
    let newCard = card.cloneNode();
    newCard.textContent = `Card ${i}`;
    container.appendChild(newCard);
}




/* Difference between append and appendChild */
/*
================================================================================================
| append()                          |                   appendChild()                          |
================================================================================================
1)  append()
------------  
-> append() method is used to append a set of Node objects or DOMString objects to the parent  
    Node.                                                                                       
-> it is not returning anything.(undefined)        
-> it is also used to append String.           
-> it is used to append multiple elements at once.                                            


2)  appendChild()
----------------
-> appendChild() method is used to append a Node as the last child of a Node.                    
-> it is return that appended elements                                                      
-> it is not used to append String.
-> it is used to append single element at a time.

================================================================================================


*/

/* Example of append string */
// document.body.appendChild("Hello World"); // VM5794:1 Uncaught TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'.
    // at <anonymous>:1:15
    // (anonymous)	@	VM5794:1


// document.body.append("Hello World");


/* but if we want to append a string to the body, we can use the append method. and use appendChild*/
// const textNode = document.createTextNode("Hello World");
// document.body.appendChild(textNode); // Hello World


