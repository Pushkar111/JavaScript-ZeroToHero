const input = document.getElementById("input");
input.addEventListener("keypress", (event) => {
    console.log("Key Pressed");
    console.log(event.key);
});

let heading = document.getElementById("heading"); // This is the heading element press shift+tab to focus on heading element
heading.addEventListener("keypress", (event) => {
    console.log("Key Pressed");
    console.log(event.key);
});

