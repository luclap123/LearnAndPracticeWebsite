// let, const
// phân biệt var / let, const
// 1. var/let, const: Scope, Hosting
// 2. const/var, let: Assignment
// Code block: if else, loop, {}, ...

// a=1;
// var a;
// console.log(a); 

// arrow function
// const sum = (a, b) => a+b

// console.log(sum(5, 12))

// // template literals
// // sử dụng dấu ` ` (backtick) để tạo chuỗi nhiều dòng
// const courseName = "Javascript"
// const description = `Course name: ${courseName}`

// console.log(description)
// // multi-line string
// const lines = `line 1
// line 2
// line 3
// line 4`

// console.log(lines)

// // Classes
// class Course {
//     constructor(name, price) {
//         this.name = name
//         this.price = price
//     }
// }

// const jsCourse = new Course('Javascript', 100)

// console.log(jsCourse)

// // Enhanced object literals
// // 1. định nghĩa key value cho object
// var name = 'PHP'
// var price = 1000
// var course = {
//     name,
//     price
// }

// console.log(course)
// // 2. định nghĩa method cho object
// var name = 'PHP'
// var price = 1000
// var course = {
//     name,
//     price,
//     getName() {
//         return this.name
//     }
// }

// console.log(course.getName())
// // 3. định nghĩa key cho object từ biến
// var filedName = 'name'
// var filedPrice = 'price'

// const course = {
//     [filedName]: 'PHP',
//     [filedPrice]: 1000

// }

// console.log(course)

// Default parameter values
// logger = (log = 'default log') => {
//     console.log(log)
// }

// logger()