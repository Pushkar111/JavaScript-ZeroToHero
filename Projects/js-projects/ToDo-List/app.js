const app = document.getElementById("app");

function createElement(type) {
    return document.createElement(type);
}

const handleInput = (e) => {
    console.log(e.target.value);
};

function getTextField() {
    const textField = createElement("input");

    textField.placeholder = "Enter the Task";

    textField.addEventListener("input", handleInput);
    return textField;
}

function getButton() {
    const btn = createElement("button");

    btn.innerText = "Add ToDo";
    btn.style.marginLeft = "10px";
    return btn;
}

const textField = getTextField();
app.append(textField);

const btn = getButton();
app.append(btn);
