const container = document.querySelector(".container");

for (let i = 50; i <= 100; i++) {
    let imageDiv = document.createElement("div");
    imageDiv.classList.add("imageDiv");

    let img = document.createElement("img");
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/other/home/shiny/${Math.floor(Math.random() * i)}.png`;
    
    let p = document.createElement("p");
    p.innerText = `Pokemon ${i-49}`;
    
    imageDiv.appendChild(img);
    imageDiv.appendChild(p);
    container.appendChild(imageDiv);
}
