/*
==> CallBack Hell : When we have multiple nested callbacks, it becomes difficult to read and maintain the code. This is called callback hell.
    --------------
->  Callback hell refers to a situation in JavaScript where multiple nested callbacks make the code difficult to read and maintain. 
    This typically happens when asynchronous operations are chained together, leading to deeply nested structures. 
    Here's an example to illustrate:
->  Example of Callback Hell:

x(function(result1) {
    y(result1, function(result2) {
        z(result2, function(result3) {
            w(result3, function() {
                // Continue with more nested callbacks...
            });
        });
    });
});


==> Problems with Callback Hell:
    ---------------------------
-> Readability: The code becomes hard to read due to deep nesting.
-> Maintainability: Making changes or debugging becomes challenging.
-> Scalability: Adding more asynchronous operations increases complexity.

==> Solutions:
    ----------
-> Promises: Use Promises to flatten the structure.
-> Async/Await: Use async and await for a more synchronous-like flow.

-> 1) Example with Promises:

x()
    .then(result1 => y(result1))
    .then(result2 => z(result2))
    .then(result3 => w(result3))
    .catch(error => console.error(error));


-> 2) Example with Async/Await:

async function executeTasks() {
    try {
        const result1 = await x();
        const result2 = await y(result1);
        const result3 = await z(result2);
        await w(result3);
    } catch (error) {
        console.error(error);
    }
}

executeTasks();
*/

// Solution with fetch API:
fetch('https://dummyjson.com/users/1')
    .then(response => response.json())
    .then(data => {
        console.log(data.firstName + " world");
        return fetch('https://dummyjson.com/users/2');
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.firstName + "!");
        return fetch('https://dummyjson.com/users/3');
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.firstName + " How are you?");
        return fetch('https://dummyjson.com/users/4');
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.firstName + " I'm fine.");
    })
    .catch(error => {
        console.log(error);
    });
