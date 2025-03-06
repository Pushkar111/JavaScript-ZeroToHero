const green = document.querySelector(".green");
const pink = document.querySelector(".pink");
const skyBlue = document.querySelector(".skyBlue");

// when user clicks on green, pink , blue then this msg is shows 
// Green clicked
green.addEventListener("click",(e)=>{
    e.stopPropagation(); // only prints "Green clicked"
    console.log("Green clicked");
})


// Pink clicked
// Green clicked
pink.addEventListener("click", (e)=>{
    e.stopPropagation(); // only prints "Pink clicked"
    console.log("Pink clicked");
})


// skyBlue clicked
// Pink clicked
// Green clicked
skyBlue.addEventListener("click",(e)=>{
    e.stopPropagation(); // only prints "skyBlue clicked"
    console.log("skyBlue clicked");
})