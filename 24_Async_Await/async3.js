const generateData = () => {
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            resolve("Data generated successfully")
        }, 2000)
     })
}

const printData = async() => {
    generateData()
    .then((data) => console.log(data))    

    console.log("Before calling generateData()");
    let data = await generateData();
    console.log(data);
    console.log("After calling generateData()");
}

printData()