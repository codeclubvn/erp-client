export const handleKeyPress = (event) => {
    // Lấy ký tự đã nhập từ sự kiện
    const char = String.fromCharCode(event.which)

    // Kiểm tra nếu ký tự không phải là số thì ngăn người dùng nhập
    if (!/[0-9]/.test(char)) {
        event.preventDefault()
    }
}
