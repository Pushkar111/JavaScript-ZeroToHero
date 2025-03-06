const h1 = document.querySelector("h1");
const container = document.querySelector(".container");

let firstImgSrc = container.children[0].src;

for (let i = 2; i <= 10; i++) {
    const img = document.createElement("img");
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/other/home/shiny/${i}.png`;
    container.appendChild(img);
}
