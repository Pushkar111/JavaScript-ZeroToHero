const changeDiv = (event) => {
    console.log(event.type);
    if (event.type === "mouseover") {
        const shape = document.getElementById("shape"); //<div>
        shape.className = "circle";
    } else if (event.type == "mouseleave") {
        const shape = document.getElementById("shape"); //<div>
        shape.className = "square";
    }
};