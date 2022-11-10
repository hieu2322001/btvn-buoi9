// Viết hàm sử dụng regex biến đổi url theo định dạng mong muốn. Hàm này có mục tiêu làm thay đổi kích thước ảnh theo các tỷ lệ đã được định nghĩa trước:
//  Lưu ý: Một số đặc điểm của kích thước
//  1. Các định dạng: _100x, _x100, _100x100
//  2. Nằm liền kề dấu chấm của phần mở rộng: url_100x.jpg


let tests = [
  {
    input: 'https://cdn.shopify.com/e.jpg?v=15',
    size: '100x',
    output: 'https://cdn.shopify.com/e_100x.jpg?v=15'
  },
  {
    input: 'https://cdn.shopify.com/e_100x200.jpg?v=15',
    size: 'x200',
    output: 'https://cdn.shopify.com/e_x200.jpg?v=15'
  },
  {
    input: 'https://cdn.shopify.com/e-jpg_200x100.jpg?v=15',
    size: '100x',
    output: 'https://cdn.shopify.com/e-jpg_100x.jpg?v=15'
  },
  {
    input: 'https://cdn.shopify.com/100xMacBook.jpg_640x640_3_result_100x.jpg?v=15',
    size: 'x100',
    output: 'https://cdn.shopify.com/100xMacBook.jpg_640x640_3_result_100x.jpg?v=15'
  },
  {
    input: 'https://cdn.shopify.com/e-800x600-jpg.jpg?v=15',
    size: '100x200',
    output: 'https://cdn.shopify.com/e-800x600-jpg_100x200.jpg?v=15'
  }
]
let check = /\.jpg\?v=15$/;
function getUrl(urlInput, sizeImg) {
    if(check.test(urlInput) == true) {
        return urlInput.replace(".jpg?v=15", "_"+sizeImg+".jpg?v=15")
    }
} 

console.log(getUrl(tests[4].input, tests[4].size))