function upDate(previewPic) {
    /* 1. Kiểm tra sự kiện có kích hoạt không */
    console.log("Sự kiện di chuột (hover) đã kích hoạt!");
    
    /* 2. In ra thông tin alt và source (src) của ảnh đang được di chuột */
    console.log("Alt text: ", previewPic.alt);
    console.log("Source URL: ", previewPic.src);

    /* 3. Thay đổi văn bản của phần tử có id là 'image' thành giá trị alt của ảnh */
    document.getElementById('image').innerHTML = previewPic.alt;

    /* 4. Thay đổi hình nền của phần tử có id là 'image' thành nguồn (src) của ảnh */
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    /* 1. Cập nhật url cho hình nền của div với id 'image' trở lại giá trị ban đầu (trống) */
    document.getElementById('image').style.backgroundImage = "url('')";

    /* 2. Cập nhật văn bản của div với id 'image' trở lại văn bản gốc */
    document.getElementById('image').innerHTML = "Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.";
}