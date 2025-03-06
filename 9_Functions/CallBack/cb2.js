let fileName = "java.txt";

const textHandler = () => {
    console.log(`Reading File is ${fileName}`);
}

const wordHandler = () => {
    console.log(`Reading File is ${fileName}`);
}

const pdfHandler = () => {
    console.log(`Reading File is ${fileName}`);
}

const test = (a) => {
    console.log(a);
    a();
}

test(textHandler);