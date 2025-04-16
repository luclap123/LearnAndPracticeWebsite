// Class list properties
// add
// contains
// remove
// toggle

var boxElement = document.querySelector('.box');

console.log(boxElement.classList.value); // Log the class list of the box element

boxElement.classList.add('red', 'blue'); // Add the 'red' class to the box element

boxElement.classList.remove('red'); // Remove the 'red' class from the box element
console.log(boxElement.classList.contains('red')); // Check if the 'red' class is present in the box element's class list
console.log(boxElement.classList.contains('blue')); // Check if the 'blue' class is present in the box element's class 

setInterval(() => {
    boxElement.classList.toggle('blue'); // Toggle the 'blue' class on the box element every second
}, 1000); // Check if the 'blue' class is present in the box element's class list