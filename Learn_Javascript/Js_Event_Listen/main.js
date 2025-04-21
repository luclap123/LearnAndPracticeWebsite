// 1. Event listener
// 2. JSON 
// 3. ftech
// 4. DOM location
// 5. Local storage
// 6. Session storage
// 7. Coding convention
// 8. Best practices
// 9. Mistakes
// 10. Performance

// xử lý nhiều việc khi 1 event xảy ra
var btn = document.querySelector("button"); // Lấy nút button từ DOM

function viec1() {
    console.log("Button clicked"); // Hàm xử lý sự kiện
}

btn.addEventListener("click", viec1); // Gắn sự kiện click cho nút

setTimeout(function() {
    btn.removeEventListener("click", viec1); // Gỡ bỏ sự kiện click sau 1 giây
    console.log("Event listener removed"); // Thông báo đã gỡ bỏ sự kiện
}, 3000); // Gọi hàm viec1 sau 1 giây