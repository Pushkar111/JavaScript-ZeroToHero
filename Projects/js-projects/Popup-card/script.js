const popBtn = document.querySelector(".pop-btn");
const widther = document.querySelector(".widther");
const closeIcon = document.querySelector(".close-icon");
const beforePopup = document.querySelector(".before-popup");

popBtn.addEventListener("click", () => {
    widther.style.display = "block"; // Make sure it's visible
    widther.classList.add("show"); // Add the class for animation
    beforePopup.classList.add("hide");
});

closeIcon.addEventListener("click", () => {
    widther.classList.remove("show");
    widther.classList.add("hide");

    setTimeout(() => {
        widther.style.display = "none"; // Make sure it's hidden
        widther.classList.remove("hide");
        beforePopup.classList.remove("hide");
    }, 500); // Match the duration of the collapseOverlay animation
});
