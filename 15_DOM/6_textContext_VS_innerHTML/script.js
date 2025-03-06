const p1 = document.querySelector("#p1");
console.log(p1.innerHTML);
console.log(p1.textContent);
console.log(p1.innerText);

const p2 = document.querySelector("#p2");

function changeTextContent() {
    p1.textContent = "<div>I              am the <strong> Frontend Developer </strong>!</div>";
}

function changeInnerHTML() {
    p2.innerHTML = "<div>I              am the <strong> Frontend Developer </strong>!</div>";
}


// ------------------------------
/*
-> element which is display : none 
        textContent : not display that element
        innerText : display that element

-> innerText ==> returns the text which is visible on the browser [not include space, allow one space]
-> textContent ==> returns the text which is present in the element [include space, allow multiple space]
*/