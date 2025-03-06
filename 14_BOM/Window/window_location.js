/*
-> The window object is supported by all browsers. It represents the browser's window.
-> All global JavaScript objects, functions, and variables automatically become members of the window object.
-> Global variables are properties of the window object.
-> Global functions are methods of the window object.
-> Even the document object (of the HTML DOM) is a property of the window object
*/

console.log("window Object Properties");
// Property	Description
/*
1. location -> Returns the Location object for the window. [url of the current page]
2. history -> Returns the History object for the window. [history of the browser]
3. innerHeight -> Returns the inner height of a window's content area. [height of the window]
4. innerWidth -> Returns the inner width of a window's content area. [width of the window]
5. open() -> Opens a new browser window.
6. close() -> Closes the current browser window.
7. resizeBy() -> Resizes the window by the specified pixels.
8. resizeTo() -> Resizes the window to the specified width and height.
9. scrollBy() -> Scrolls the document by the specified number of pixels.
10. scroll -> Scrolls the document to the specified coordinates.
11. scrollTo() -> Scrolls the document to the specified coordinates.
12. print() -> Prints the content of the current window.
13. document -> Returns the Document object for the window (the root element of the HTML document).

*/

console.log("======== location ========");
console.log("window location Object Methods");
// Method	Description
/*
1. assign() -> Loads a new document.
    ==> Syntax : window.location.assign("#urlPattern"); or location.assign("#urlPattern");
    ==> window.location.assign("https://www.google.com");
    ==> location.assign("https://www.google.com");

2. reload() -> Reloads the current document.
    ==> Syntax : window.location.reload(); or location.reload();
    ==> window.location.reload();
    ==> location.reload();

3. replace() -> Replaces the current document with a new one.
    ==> Syntax : window.location.replace("#urlPattern"); or location.replace("#urlPattern");
    ==> window.location.replace("https://www.netflix.com/"); 
    ==> location.replace("https://www.netflix.com/");

4. toString() -> Returns the href property of the window location object.
    ==> Syntax : window.location.toString(); or location.toString();
    ==> window.location.toString();
    ==> location.toString();
*/

// 1. assign()
// location.assign("https://www.google.com"); // opens the google.com in the same tab

// 2. reload()
// location.reload(); // reloads the current page infinitely
// setTimeout(() => {
//     location.reload();
// }, 3000); // reloads the current page after 3 seconds

// 3. replace()
// location.replace("https://www.netflix.com/"); // replaces the current page with netflix.com

// 4. toString()
// let result = location.toString();
// console.log(result);
