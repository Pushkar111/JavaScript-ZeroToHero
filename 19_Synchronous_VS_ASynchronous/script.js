// Synchronous code example
console.log("Start");
console.log("Middle");
console.log("End");

console.log();

// Asynchronous code example
console.log("Start");
setTimeout(() => {
    console.log("Middle");
}, 500);
console.log("End");

console.log("-----------------------------------------------------------------------------------------------------");

// Synchronous code example
// During 5 seconds, the browser will be blocked and the user will not be able to interact with the page
// hense the user do not select the text in the page 
const blockingBtn = document.querySelector(".blocking-btn");
blockingBtn.addEventListener("click", () => {
    let startTime = Date.now();
    let currentTime = startTime;

    while (startTime + 5000 > currentTime) {
        currentTime = Date.now();
    }
});

console.log("-----------------------------------------------------------------------------------------------------");

const slowApiBtn = document.querySelector(".slow-api-btn");
const xhr = new XMLHttpRequest();
slowApiBtn.addEventListener("click", () => {
    xhr.open("GET", "https://procodrr.vercel.app/?sleep=5000", false); // false means synchronous request [blocking]
    xhr.send();
});