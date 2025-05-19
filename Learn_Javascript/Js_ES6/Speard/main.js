// logger=(({name, age, ...rest}) => {
//     console.log(name)
//     console.log(age)
//     console.log(rest)
// })

// logger({
//     name: 'luclap',
//     age: 23,
//     address: 'Ha Noi'
// })
// speard là phân rã các phần tử trong mảng hoặc object
// mảng
// var array1 = ['javacsript', 'php', 'java']
// var array2 = ['python', 'ruby', 'c++']
// var array3 = [...array2, ...array1]
// console.log(array3)
// object
var object1 = {
    name: 'luclap',
    age: 23,
    address: 'Ha Noi'
}
var object2 = {
    name: 'tien',
    age: 28,
    address: 'Ha Noi'
}

var object3 = {
    ...object1,
    name: 'linh'
}
console.log(object3)