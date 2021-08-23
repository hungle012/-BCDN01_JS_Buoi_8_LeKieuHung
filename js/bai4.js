function timVTDuong(arr) {
    var vt = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            vt = i;
            break;
        }   
    }
    return vt;
}
function timMinDuong() {
    var minDuong = timVTDuong(numArr);
    for (var i = 1; i <numArr.length; i++) {
        if (numArr[i] > 0 && numArr[i] < minDuong) {
            min = numArr[i];
        }
    }
    document.getElementById("txtBai4").innerHTML = "Số dương nhỏ nhất là : " + minDuong;
}
document.getElementById("btnBai4").onclick = timMinDuong;