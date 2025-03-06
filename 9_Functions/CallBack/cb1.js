const demo = () => {
    console.log("Hello");
}

const test = (a) => {
    console.log(a);
    a();
}


test(demo);
