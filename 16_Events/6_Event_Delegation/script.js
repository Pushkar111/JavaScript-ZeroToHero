
const addElement = () => {
    // const PlusCardBtn = document.querySelector('.PlusCardBtn'); 
    let imageDiv = document.createElement("div");
    imageDiv.classList.add("imageDiv");
    
    const myHTML = `
        <div>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/other/home/shiny/${Math.floor(Math.random() * 500)}.png" alt="">
        <p>Pokemon ${Math.floor(Math.random() * 500) - 49}</p>
        </div>
    `;
    imageDiv.innerHTML = myHTML;
    
    const container = document.querySelector(".container");
    container.appendChild(imageDiv);


    let imageDivs = document.querySelectorAll(".imageDiv");
    imageDivs.forEach((i)=>{
        i.addEventListener("click", (e)=>{
            i.remove();
            console.log(i); // parent div
            let childPara = i.querySelector("div > p");
            console.log(`${childPara.textContent} image is deleted`);
        })
    })

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
