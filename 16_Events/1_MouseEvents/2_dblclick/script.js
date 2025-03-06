function clickMe() {
    window.location.href = "https://www.google.com";
}

function printPage() {
    window.print();
}

const entireParaSelect = () => {
    const para = document.querySelector("p");
    para.style.cssText = `
        font-size: 20px;
        color: red;
        background-color: yellow;
        padding: 10px;
        border: 1px solid black;
        border-radius: 5px;
    `;    
};
