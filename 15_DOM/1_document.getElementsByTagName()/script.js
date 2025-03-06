let allImages = document.getElementsByTagName('img'); 
console.log(allImages, typeof allImages);
// or 
let allImg = document.images;
console.log(allImg, typeof allImg);


// To get the first image
let firstImage = allImages[0];
console.log(firstImage);
// To change the source of the first image
firstImage.src = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';


// To get the second image
let secondImage = allImages[1];
console.log(secondImage);


console.log("---------------------------------------------------------------------------");

let allParagraphs = document.getElementsByTagName('p');
console.log(allParagraphs, typeof allParagraphs);

let firstParagraph = allParagraphs[0];
console.log(firstParagraph);
firstParagraph.textContent = 'This is the new text for the first paragraph';
console.log(firstParagraph);


console.log("---------------------------------------------------------------------------");
