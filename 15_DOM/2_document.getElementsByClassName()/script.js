let normalImages = document.getElementsByClassName('Normal-image');
console.log(normalImages);

let colouredImages = document.getElementsByClassName('colour-image');
console.log(colouredImages);

console.log();

// Change the border of the second normal image to red
normalImages[1].style.border = '2px solid red';

// Change the border of the first coloured image to green
colouredImages[0].style.border = '2px solid green';

