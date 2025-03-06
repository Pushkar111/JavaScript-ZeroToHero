const higherOrder = (x) => {
    const doSomething = (y) => {
        const whatEver = (z) => {
            return x + "X+" + y + "Y+" + z + "Z";
        };
        return whatEver;
    };
    return doSomething;
};

let ans = higherOrder("3")("2")("");
console.log("ans :", ans);
