// variable to store our intervalID
let intervalID;

function changeColor() {
  // check if an interval has already been set up
  if (!intervalID) {
    intervalID = setInterval(flashText, 500);
  }
}

function flashText() {
  const oElem = document.getElementById("my_box");
  oElem.className = oElem.className === "go" ? "stop" : "go";
}

function stopTextColor() {
  clearInterval(intervalID);
  // release our intervalID from the variable
  intervalID = null;
}

document.getElementById("start").addEventListener("click", changeColor);
document.getElementById("stop").addEventListener("click", stopTextColor);
