// DOM event
// 1. Attribute event
// 2. Assigin event handler

// var heading = document.querySelectorAll("h1");

// for (var i = 0; i < heading.length; i++) {
//     heading[i].onclick = function(e) {
//         console.log(e.target)
//     }
// }

// example
// 1. Input/ select
// 2. Key up/down

// var inputElement = document.querySelector("input[type='text']");
// // onchange, oninput
// inputElement.oninput = function(e) {
//     console.log(e.target.value);
// }

// var checkElement = document.querySelector("input[type='checkbox']");

// checkElement.onchange = function(e) {
//     console.log(e.target.checked);
// }

// var selectElement = document.querySelector("select");

// selectElement.onchange = function(e) {
//     console.log(e.target.value);
// }

// var inputElement = document.querySelector("input[type='text']");

// inputElement.onkeyup = function(e) {
//     console.log(e.which); // 13 = Enter
//     if (e.which == 13) {
//         console.log("Enter key pressed");
//     }
// }

// 1. preventDefault


// var linkElement = document.links;

// for (var i = 0; i < linkElement.length; i++) {
//     linkElement[i].onclick = function(e) {
//        if (!e.target.href.startsWith("https://github.com/")) {
//             e.preventDefault(); // prevent default action
//         }
//     }
// }

// 2. stopPropagation

document.querySelector("div").onclick = function(e) {
    console.log("Div clicked");
}

document.querySelector("button").onclick = function(e) {
    e.stopPropagation(); // stop event bubbling
    console.log("Button clicked");
}