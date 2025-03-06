console.log(fetch("https://dummyjson.com/products")); // returns a promise

// data fetching using fetch
// fetch("https://dummyjson.com/products") // by default fetch makes a GET request
fetch("https://dummyjson.com/products", {
    method: "GET"
}) 
.then((response) => response.json())
.then((data) => console.log(data));


/* adding product using fetch POST request */
fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: { 
        'Content-Type': 'application/json' 
    },
    body: JSON.stringify({
      title: 'BMW Pencil',
      /* other product data */
    })
})
.then((response) => response.json())
.then((data) => console.log(data));


/* updating title of product with id 1 */
fetch('https://dummyjson.com/products/1', {
    method: 'PUT', /* or PATCH */
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: 'iPhone 15 Pro Max'
    })
})
.then(response => response.json())
.then(console.log);


/* deleting product with id 1 */
fetch('https://dummyjson.com/products/1', {
    method: 'DELETE',
})
.then(response => response.json())
.then(console.log);  