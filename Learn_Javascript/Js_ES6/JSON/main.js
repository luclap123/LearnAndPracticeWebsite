// JSON server
// Postman
// CRUD 
// Create - Read - Update - Delete


var listCourse = document.querySelector('#list-Course')
var courseAPI = 'http://localhost:3000/courses'

function start() {
    getCourses((courses) => {
        console.log(courses)
    });
}

start();

function getCourses(callback) {
    fetch(courseAPI) 
        .then((response) => {
            return response.json()
        })
        .then(callback);
}