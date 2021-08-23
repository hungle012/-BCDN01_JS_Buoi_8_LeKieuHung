function timMin() {
    var min = numArr[0];
    for (var i = 1; i <numArr.length; i++) {
        if (numArr[i] < min) {
            min = numArr[i];
        }
    }
    document.getElementById("txtBai3").innerHTML = "Số nhỏ nhất là : " + min;
}
document.getElementById("btnBai3").onclick = timMin;