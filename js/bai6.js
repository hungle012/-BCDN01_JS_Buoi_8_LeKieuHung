function swap() {
    var vt1 = Number(document.getElementById("inputNum1Bai6").value);
    var vt2 = Number(document.getElementById("inputNum2Bai6").value);
    var temp = 0;

    if (vt1 >= numArr.length || vt2 >= numArr.length) {
        alert("vị trí phải nhỏ hơn " + (numArr.length - 1));
    } else {
        temp = numArr[vt1];
        numArr[vt1] = numArr[vt2];
        numArr[vt2] = temp;
    }
    
    document.getElementById("txtBai6").innerHTML = "Mảng sau khi đổi: " + numArr;
}
document.getElementById("btnBai6").onclick = swap;