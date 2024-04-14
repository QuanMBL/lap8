// Khai báo Express và các middleware cần thiết
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Sử dụng bodyParser để lấy dữ liệu từ form POST
app.use(bodyParser.urlencoded({ extended: true }));

// Xử lý POST request từ form thanh toán
app.post('/process_payment', (req, res) => {
    const { name, email, card_number, expiry_date, cvv } = req.body;

    // Xử lý thông tin thanh toán ở đây (ví dụ: gửi qua cổng thanh toán của bên thứ ba, lưu vào cơ sở dữ liệu, v.v.)
    
    // Phản hồi với kết quả thanh toán
    res.send('Thanh toán thành công!');
});

// Khởi động server
const port = 3000;
app.listen(port, () => console.log(`Server đang chạy tại http://localhost:${port}`));
