document.addEventListener("DOMContentLoaded", () => {
    const pasteInput = document.getElementById("pasteInput");
    const pasteMessage = document.getElementById("pasteMessage");

    pasteInput.addEventListener("paste", (event) => {
        pasteMessage.innerText = "Text pasted!";
        setTimeout(() => {
            pasteMessage.innerText = "";
        }, 3000);
        console.log("Paste event triggered");
    });
});
