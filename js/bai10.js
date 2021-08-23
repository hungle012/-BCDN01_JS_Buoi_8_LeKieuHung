function soSanh() {
    var soAm = 0;
    var soDuong = 0;
    
    for (var i = 0; i < numArr.length; i++) {
        if (numArr[i] > 0) {
            soDuong += 1;
        } else if (numArr[i] < 0) {
            soAm += 1;
        }
    }
    if (soDuong > soAm) {
        document.getElementById("txtBai10").innerHTML = "Số dương > số âm";    
    } else if (soDuong < soAm){
        document.getElementById("txtBai10").innerHTML = "Số âm > Số dương"; 
    } else {
        document.getElementById("txtBai10").innerHTML = "Số dương = số âm"; 
    }
}
document.getElementById("btnBai10").onclick = soSanh;