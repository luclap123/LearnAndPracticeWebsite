// JSON
// 1. là một đinh dạng dữ liệu nhẹ, dễ đọc và dễ ghi (chuỗi)
// 2. Javascript Object Notation
// 3. JSON: number, boolean, null, array, object, string

// mã hóa - giải mã
// stringify: chuyển đổi đối tượng thành chuỗi JSON
// parse: chuyển đổi chuỗi JSON thành đối tượng

// var json ='["PHP", "Java", "C++"]'
// var json = '{"name":"Nguyen Van A", "age": 18, "address": "Ha Noi"}'

// // var json = '1'
// console.log(JSON.parse(json)) 

console.log(JSON.stringify({name: "Nguyen Van A", age: 18, address: "Ha Noi"})) // {"name":"Nguyen Van A","age":18,"address":"Ha Noi"}