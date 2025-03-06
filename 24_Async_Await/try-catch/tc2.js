let a = 10;
let b = 0;

try {
    console.log(a / b);
} catch (error) {
    console.log(error);
} finally {
    console.log("Finally block");
}
