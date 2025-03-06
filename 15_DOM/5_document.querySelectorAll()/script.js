// document.querySelector();

// when user click on eye icon, then password will be visible
let passwordField = document.querySelector("#password-eye-icon");
let passwordInput = document.querySelector("#password-input");
passwordField.addEventListener("click", function () {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
});

// // when user click on sign in button, then form will be reset
// const submitBtn = document.querySelector(".button-submit");
// const form = document.querySelector(".form");
// submitBtn.addEventListener("click", function () {
//     form.reset();
// });

// when user click on any button, submit button then form will be reseat, google btn then open google, apple btn then open apple
const allBtn = document.querySelectorAll(".btn");
console.log(allBtn); // return NodeList(3) [button.button-submit.btn, button.btn, button.btn]
const form = document.querySelector(".form");
allBtn.forEach(function (btn) {
    btn.addEventListener("click", function () {
        if (btn.id === "submit-btn") {
            form.reset();
        } else if (btn.id === "google-btn") {
            window.open("https://www.google.com", "_blank");
        } else if (btn.id === "apple-btn") {
            window.open("https://www.apple.com", "_blank");
        }
    });
});
