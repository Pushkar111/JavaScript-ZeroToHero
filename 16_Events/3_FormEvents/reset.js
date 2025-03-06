const form = document.getElementById("myForm");
const resetMessagePara = document.createElement("p");

form.addEventListener("reset", (event) => {
    // Display the reset message
    resetMessagePara.innerText = "Form has been reset!";
    form.appendChild(resetMessagePara);
    resetMessagePara.classList.add("myPara");

    // Hide the message after 3 seconds
    setTimeout(() => {
        resetMessagePara.style.display = "none";
    }, 3000);
});
