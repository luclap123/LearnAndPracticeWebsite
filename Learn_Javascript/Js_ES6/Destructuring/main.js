// Destructuring - phân rã
var array = ['luc lap', 23, 'Ha Noi']

var [a, b, c] = array

console.log(a, b, c)

// rest parameter - phân rã phần còn lại
var [a, ...rest] = array
console.log(a) 
console.log(rest)

// sử dụng với object
var object = {
    name: 'luc lap',
    age: 23,
    address: 'Ha Noi'
}

var {name, age, address} = object
console.log(name, age, address)