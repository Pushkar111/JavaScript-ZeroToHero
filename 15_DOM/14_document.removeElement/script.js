const container = document.querySelector(".container");

for (let i = 50; i <= 100; i++) {
    let imageDiv = document.createElement("div");
    imageDiv.classList.add("imageDiv");

    const myHTML = `
        <div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/other/home/shiny/${Math.floor(Math.random() * i)}.png" alt="">
            <p>Pokemon ${i - 49}</p>
        </div>
    `;

    // let img = document.createElement("img");
    // img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/other/home/shiny/${Math.floor(Math.random() * i)}.png`;

    // let p = document.createElement("p");
    // p.innerText = `Pokemon ${i-49}`;

    // imageDiv.appendChild(img);
    // imageDiv.appendChild(p);
    imageDiv.innerHTML = myHTML;
    container.appendChild(imageDiv);
}

function removeElement() {
    let elementNo = document.getElementById("elementNo").value;
    const imgDivs = document.querySelectorAll(".imageDiv");
    const paragraphs = document.querySelectorAll(".imageDiv p");

    paragraphs.forEach((p, index) => {
        if (p.innerText == `Pokemon ${elementNo}`) {
            imgDivs[index].remove();
        }
    });
    
    let myForm = document.getElementById("myForm");
    myForm.reset();
}
