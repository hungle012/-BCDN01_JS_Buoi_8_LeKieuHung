function tongSoDuong() {
    var sum = 0;
    for (var i = 0; i <numArr.length; i++) {
        if (numArr[i] > 0) {
            sum += numArr[i];
        }
    }
    document.getElementById("txtBai1").innerHTML = "Tổng các số dương là: " + sum;
}
document.getElementById("btnBai1").onclick = tongSoDuong;