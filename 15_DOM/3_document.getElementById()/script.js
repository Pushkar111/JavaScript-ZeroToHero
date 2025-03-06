let normalBtn = document.getElementById("normal-btn");
console.log(normalBtn);
normalBtn.addEventListener("click", function () {
    alert("Normal button clicked");
});

let printBtn = document.getElementById("print-btn");
console.log(printBtn);
printBtn.addEventListener("click", function () {
    window.print();
});

console.log("DOM loaded");
