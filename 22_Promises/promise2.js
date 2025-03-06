const zomato = () => {
    let promise = new Promise((resolve, reject) => {
        // setTimeout(() => {
        //     resolve("Zomato Delivered");
        // }, 1000);
        setTimeout(()=>{
            resolve(
                {
                    dish: "Pizza",
                    restaurant: "xyz",
                    order: "undefined",
                    payment: "done",
                    delivery: "done",
                    deliveryStatus: "delivered"
                }
            )
        }, 1000)
    });

    promise.then((msg) => {
        console.log(msg);
    }).catch((error) => {   
        console.error(error);
    }).finally(() => {
        console.log("Promise is settled");
    });
}

zomato();