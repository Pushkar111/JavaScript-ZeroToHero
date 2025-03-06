document.addEventListener("DOMContentLoaded", () => {
    var name = document.getElementById("name");
    if (name) {
        name.addEventListener("input", (e) => {
            console.log(e.target.value);
            let p = document.createElement("p");
            p.innerText = e.target.value;
            document.body.appendChild(p);
            p.classList.add("myPara");
        });
    }
});

let email = document.querySelector("#email");
email.addEventListener("input", (e) => {
    console.log(e.target.value);
    let p = document.createElement("p");
    p.innerText = e.target.value;
    document.body.appendChild(p);
    p.classList.add("myPara");
});
