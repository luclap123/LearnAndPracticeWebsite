// fetch
// API là một giao thức để các ứng dụng có thể giao tiếp với nhau
// backend -> API -> Fetch -> JSON/XML -> JSON.parse
// -> Javascript types -> Render giao diện ra HTML


var API = 'https://jsonplaceholder.typicode.com/comments'

fetch(API)
    .then (function (response){
        return response.json()
    })

    .then (function (data) {
        var html = data.map(function (item) {
            return `
                <div class="item">
                    <h2>${item.name}</h2>
                    <p>${item.body}</p>
                </div>
            `
        })
        var list = document.getElementById('post')
        list.innerHTML = html.join('')
    })
    .catch (function (error){
        alert('Lỗi rồi')
    })