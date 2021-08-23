function demSoDuong() {
    var count = 0;
    for (var i = 0; i <numArr.length; i++) {
        if (numArr[i] > 0) {
            count ++;
        }
    }
    document.getElementById("txtBai2").innerHTML = "Số dương: " + count;
}
document.getElementById("btnBai2").onclick = demSoDuong;