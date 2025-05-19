
var listCourse = document.querySelector('#list-Course')
var courseAPI = 'http://localhost:3000/courses'

function start() {
    getCourses((courses) => {
        renderCourses(courses);
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

function renderCourses(courses) {
    
}