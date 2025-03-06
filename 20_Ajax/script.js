// AJAX stands for Asynchronous JavaScript and XML. It is a technique used in web development to create asynchronous web applications.
// With AJAX, web applications can send and retrieve data from a server asynchronously (in the background) without interfering with the display and behavior of the existing page.

// Here's a brief overview of how AJAX works:

// 1) Client-Side Event: A user action triggers an event, such as clicking a button.
// 2) XMLHttpRequest Object: JavaScript creates an XMLHttpRequest object.
// 3) Request Sent: The XMLHttpRequest object sends a request to the server.
// 4) Server Processing: The server processes the request and sends back a response.
// 5) Response Handling: JavaScript processes the server's response and updates the web page dynamically.

// Here's a simple example of an AJAX request using JavaScript

// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Configure it: GET-request for the URL /article/.../load
xhr.open("GET", "/article/.../load", true); // true means asynchronous // not found 
// xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true); // true means asynchronous // found

// Set up a function to handle the response
xhr.onload = () => {
    if (xhr.status != 200) { // analyze HTTP response status
        alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
    } else { // show the result
        alert(`Done status ${xhr.status}, got ${xhr.response.length} bytes`); // response is the server
    }
};

// Send the request
xhr.send();



