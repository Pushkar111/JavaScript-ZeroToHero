// XMLHttpRequest is an object in JavaScript that allows us to make HTTP requests to the server without having to reload the page.
// It can be used to request data from a web server.
// It is used before the Fetch API was introduced in ES6.
// It is used to send and receive data from the server asynchronously.
// It can work with any type of server, not just XML servers.
// It can retrieve data from a URL without having to do a full page refresh.


let btn = document.getElementById("btn");
let result = document.getElementById("result");

var xhr = new XMLHttpRequest();

function getRandomPokemonId() {
    return Math.floor(Math.random() * 898) + 1; // There are 898 Pokemon as of now
}

btn.addEventListener("click", () => {
    let pokemonId = getRandomPokemonId();
    xhr.open("GET", `https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/other/home/shiny/${pokemonId}.png`, true); // true for asynchronous // false for synchronous
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.responseURL);
            result.innerHTML = `<img src="${xhr.responseURL}">`;
        }
    };
    xhr.send();
});