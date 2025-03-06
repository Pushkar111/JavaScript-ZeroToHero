// Example 1 : Basic Syntax

const setIntervalID = setInterval(callback, 500, "Parameter1", "Parameter2");

function callback(param1, param2) {
    console.log(param1, param2);

    if (param1 === "Parameter1" && param2 === "Parameter2") {
        clearInterval(setIntervalID);
    }
}
