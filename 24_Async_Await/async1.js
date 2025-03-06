/*

function makeHttpRequest(){  
    
}

console.log(makeHttpRequest()); // undefined

*/

/* but when we use async function, it will return a promise, which has PromiseState as "Fulfilled" and PromiseResult as undefined */
async function makeHttpRequest(){

}
console.log(makeHttpRequest()); // Promise {<fulfilled>: undefined}


async function makeHttpRequest2() {
    throw new Error("Error occured at makeHttpRequest2");
}
console.log(makeHttpRequest2()); // Promise {<rejected>: Error: Error occured at makeHttpRequest2 }