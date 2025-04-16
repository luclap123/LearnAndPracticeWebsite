// DOM style
var boxElement = document.querySelector('.box');

console.log(boxElement.style); // Log the style object of the box element

// background-position
// camelCase
// cách 1
boxElement.style.height = '100px'; // Set the height of the box element to 100px
boxElement.style.width = '100px'; // Set the width of the box element to 100px
boxElement.style.backgroundColor = 'red'; // Set the background color of the box element to red
// cách 2
Object.assign(boxElement.style, {
    width: '100px',
    height: '100px',
    backgroundColor: 'green',
})