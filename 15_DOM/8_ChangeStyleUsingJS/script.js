function changeStyle() {
    const colors = ["red", "blue", "green", "purple", "orange"];
    const fonts = ["Arial", "Verdana", "Times New Roman", "Georgia", "Courier New"];

    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];

    document.getElementById("title").style.color = randomColor;
    document.getElementById("title").style.fontFamily = randomFont;
    document.getElementById("description").style.color = randomColor;
    document.getElementById("description").style.fontFamily = randomFont;

    document.querySelector(".container").style.backgroundColor = randomColor;
}

const allLinks = document.querySelectorAll("a");
allLinks.forEach((link) => {
    link.addEventListener("mouseover", () => {
        link.style.color = "teal";
        link.style.textDecoration = "none";
    });
    link.addEventListener("mouseout", () => {
        link.style.color = "blue";
        link.style.textDecoration = "underline";
    });

    link.addEventListener("click", () => {
        document.querySelector(".container").style.backgroundColor = "white";
    });
});

const myPara = document.getElementById("myPara");
myPara.style.resize = "both";
myPara.style.fontFamily = "cursive";
myPara.style.fontSize = "20px";
myPara.style.borderRadius = "10px";
myPara.style.boxShadow = "5px 5px 5px 5px magenta";

// this above make an repeated code, so ultimate solution is
console.log(myPara.style.cssText); // this will give all the styles in one line which is write in inline css and above code is write css in inline

// Applied style using cssText backticks and direct copy-pasting
const yourPara = document.getElementById("yourPara");
console.log(yourPara.style.cssText); // blank print because no inline css is write in yourPara
yourPara.style.cssText = `
font-family: Brush Script MT; 
font-size: 20px; 
color: red;
font-weight: bold;  
`; // this will write inline css in yourPara

// Applied style using Given class by className
const yourPara2 = document.getElementById("yourPara2");
console.log(yourPara2.classList);
console.log(yourPara2.className); // blank print because no class is write in yourPara2
console.log(yourPara2.classList);
yourPara2.className = "greenBg";
console.log(yourPara2.classList);
console.log(yourPara2.className); // greenBg
console.log(yourPara2.classList);

const yourPara3 = document.getElementById("yourPara3");
yourPara3.className = "container greenBg wavyText";
yourPara3.style.cssText = `color: white; font-size: 20px; font-family: cursive;`;

console.log(yourPara3.classList);

// add and remove class using classList
const navBar = document.querySelector("body > div > div:nth-child(5) > ul");
console.log(navBar.classList); // blank print because no class is write in navBar
navBar.classList.add("nav-bar");
console.log(navBar.classList);

// toggle : if class is present then remove it and if class is not present then add it
console.log(navBar.classList.toggle("nav-bar")); // false
console.log(navBar.classList.toggle("nav-bar")); // true

// remove class
console.log(navBar.classList);
navBar.classList.remove("nav-bar");
console.log(navBar.classList);

/*
    any style using js applied by 3 ways:
    1. directly write in js
    2. using cssText
    3. using className

    ===> but most preferable way is using classList because it is easy to add, remove and toggle class
*/
