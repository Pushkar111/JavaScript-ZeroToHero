var images = ["images/js.png", "images/mongoDB.png", "images/java.png"];

const loadImage = () => {
    var randomIndex = Math.floor(Math.random() * images.length);
    console.log(randomIndex);
    const myimage = document.getElementById("myimage");
    myimage.src = images[randomIndex];
};

let photoframe = document.querySelector(".photoframe");
photoframe.addEventListener("mousemove", loadImage);
