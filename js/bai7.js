function sapXepTang() {
    var temp = 0;
    for (var i = 0; i < numArr.length; i++) {
        for (var j = 0; j < numArr.length; j++) {
            if (numArr[j] > numArr[j + 1]) {
                temp = numArr[j];
                numArr[j] = numArr[j + 1];
                numArr[j + 1] = temp;
            }
        }
    }
    document.getElementById("txtBai7").innerHTML = "Mảng sau khi sắp xếp: " + numArr;
}
document.getElementById("btnBai7").onclick = sapXepTang;