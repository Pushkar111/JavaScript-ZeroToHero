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



// when user click on sign in button, then form will be reset
const submitBtn = document.querySelector(".button-submit");
const form = document.querySelector(".form");
submitBtn.addEventListener("click", function(){
    form.reset();
})
