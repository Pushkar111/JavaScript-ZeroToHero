// DOG Api Website ==>  https://dog.ceo/dog-api/documentation/random

// Dog API ==> https://dog.ceo/api/breeds/image/random

let btn = document.getElementById("btn");
let result = document.getElementById("result");

btn.addEventListener("click", function () {
    fetch("https://dog.ceo/api/breeds/image/random")
    
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            result.innerHTML = `<img src="${json.message}" alt="dog" class="randomImage"/>`;
        });
});

let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", function () {    
    fetch("https://dog.ceo/api/breeds/list/all")
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            result.innerHTML = JSON.stringify(json);
        });
});
