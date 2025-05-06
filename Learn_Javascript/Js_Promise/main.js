// Promise
// - sync: đồng bộ
// - async: bất đồng bộ
// - nỗi đau
// - lý thuyết, cách hoạt động
// - thực hành


// sync/async
// setTimeout(() => {
//     console.log('Hello world 1');
// }, 1000);

// console.log('Hello world 2');

// promise (nỗi đau)
// callback hell
// setTimeout(() => {
//     console.log('Hello world 1');
//     setTimeout(() => {
//         console.log('Hello world 2');
//         setTimeout(() => {
//             console.log('Hello world 3');
//             setTimeout(() => {
//                 console.log('Hello world 4');
//                 setTimeout(() => {
//                     console.log('Hello world 5');
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

// pyramid of doom


// thực hành promise
// var promise = new Promise((resolve, reject) => {
//     // logic
//     // thành công resolve
//     // thất bại reject
//     // resolve()
//     resolve()
// });

// // chain
// promise
//     .then(() => {
//         console.log('1');
//     })
//     .then(() => {
//         console.log('2');
//     })
//     .then(() => {
//         console.log('3');
//     })
//     .catch(() => {
//         console.log('thất bại');
//     })
//     .finally(() => {
//         console.log('kết thúc');
//     });

// ví dụ 1:
// function sleep(ms) {
//     return new Promise((resolve) =>{
//         setTimeout(() => {
//             resolve()
//         }, ms)
//     })
// }

// sleep(1000)
//     .then(() => {
//         console.log(1)
//         return sleep(1000)
//     })
//     .then(() => {
//         console.log(2)
//         return new Promise((resolve, reject) => {
//             reject('thất bại')
//         })
//     })
//     .then(() => {
//         console.log(3)
//         return sleep(1000)
//     })
//     .catch((error) => {
//         console.log(error)
//     })

// Promise.resolve
// Promise.reject
// Promise.all
// var promise = new Promise((resolve, reject) => {
//     // resolve("thành công")
//     reject("thất bại")
// })

// promise
//     .then((result) => {
//         console.log(result)
//     })

//     .catch((error) => {
//         console.log(error)
//     })

var promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([1])
    }, 2000)
})

var promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([2, 3])
    }, 3000)
})

Promise.all([promise1, promise2])
    .then((result) => {
        console.log(result)
    });
