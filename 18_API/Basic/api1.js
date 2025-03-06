// json placeholder free api
let btn = document.getElementById("btn");
let result = document.getElementById("result");

let userData;

btn.addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            result.innerHTML = JSON.stringify(json);
            userData = json;
            console.log(userData, typeof userData); // undefined
        });
});
btn2.addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            result.innerHTML = JSON.stringify(json);
        });
});

// POST request ==> Creating a resource ==> Important: resource will not be really updated on the server but it will be faked as if.
let postBtn = document.getElementById("post-btn");
postBtn.addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
            title: "foo",
            body: "bar",
            userId: 1,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            result.innerHTML = JSON.stringify(json);
        });
});

// PUT request ==> Updating a resource ==> Important: resource will not be really updated on the server but it will be faked as if.
let putBtn = document.getElementById("put-btn");
putBtn.addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "PUT",
        body: JSON.stringify({
            id: 1,
            title: "foo",
            body: "bar",
            userId: 1,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            result.innerHTML = JSON.stringify(json);
        });
});

// PATCH request
let patchBtn = document.getElementById("patch-btn");
patchBtn.addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "PATCH",
        body: JSON.stringify({
            title: "foo",
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            result.innerHTML = JSON.stringify(json);
        });
});
