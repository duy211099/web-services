# Lab 3. Sử dụng tab Network trong Developer tools của trình duyệt để phân tích chi tiết các thành phần (request line, request headers, request message body (nếu có)) của một HTTP request khi truy cập vào trang https://www.thegioididong.com/ và tuoitre.vn.

## Get: https://cdn.tgdd.vn/Products/Images/42/226316/samsung-galaxy-s21-ultra-bac-600x600-1-600x600.jpg

1. Request Line:
   - Method - Phương thức: GET
   - Version - Phiên bản: HTTP/2
   - Transfered - Kích thước dữ liệu được gửi: 245.11 KB
   - Referrer Policy - Chính sách điều hướng: no-referrer-when-downgrade (mặc định, ko có 9 sách nào)
1. Request Headers:
   - Accept - nội dung dữ liệu: image/webp,_/_
   - Accept-Encoding - loại mã hóa đc sd:
   - Accept-Language - ngôn ngữ:
   - Connection: keep-alive - kết nối còn tồn tại và ko bị đóng, cho phép các request tiếp theo đc thực hiện
   - User-Agent: phiên bản trình duyệt người dùng
   - TE:
     - chỉ sự mở rộng nào mà transfer-coding đang muốn chấp nhận trong phản hồi và có hoặc không nó đang muốn chấp nhận các trường trailer trong một transfer-coding được đóng khối.
     - Nếu giá trị trường TE là trống hoặc không trường TE nào hiện diện, thì khi đó chỉ có transfer-coding được đóng khối (chunked). Một thông báo với không transfer-coding là luôn luôn có thể chấp nhận.

# Lab8. Tạo bằng tay một tài liệu XML để chứa danh sách sinh viên của lớp.

```
<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type='text/xsl' href='cgpa.xsl'?>
<lop>
   <student>
      <mssv> 001 </mssv>
      <ten> Duy </ten>
      <ngaysinh> 21-10-1999 </ngaysinh>
      <diemtong> 9 </diemtong>
   </student>
   <student>
      <mssv> 002 </mssv>
      <ten> Du </ten>
      <ngaysinh> 1-10-1998 </ngaysinh>
      <diemtong> 5.4 </diemtong>
   </student>
   <student>
      <mssv> 003 </mssv>
      <ten> Dy </ten>
      <ngaysinh> 21-10-1919 </ngaysinh>
      <diemtong> 5.9 </diemtong>
   </student>
</lop>
```
