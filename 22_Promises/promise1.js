let promise = new Promise((resolve, reject) => {
    // for Asynchronous
    let success = true;
    if (success) {
        resolve("Success");
    } else {
        reject("Failed");
    }
});

console.log(promise);

promise
    .then((msg) => {
        // call when promise is resolve
        console.log(msg);
    })
    .catch((error) => {
        // call when promise is reject
        console.error(error);
    })
    .finally(() => {
        // always call
        console.log("Operation is Completed");
    });

console.log("-------------------------------------------------------------------------------------");

const resolveBtn = document.querySelector(".resolve-btn");
const rejectBtn = document.querySelector(".reject-btn");
let p = new Promise((resolve, reject) => {
    resolveBtn.addEventListener("click", () => {
        resolve("Resolve Button is Clicked");
        console.log("After click : ", p); // after click promise state is fulfilled
    }) 
    rejectBtn.addEventListener("click", ()=>{
        reject("Reject Button is Clicked");
        console.log("After click : ", p); // after click promise state is rejected
    })
});

console.log("Before click", p); // before click promise state is pending

p.then((msg) => {
    console.log(msg);
}).catch((error) => {
    console.error(error);
}).finally(() => {
    console.log("Operation is Completed");
})