let getData = () => {
    // Directly returning a promise
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received");
        }, 1500);
    });
};

let promise = getData();
console.log(promise);

promise.then((msg) => {
    console.log(msg);
}).catch((error) => {
    console.error(error);
}).finally(() => {
    console.log("Promise settled");
});
