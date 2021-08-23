function timSoChanCuoi() {
    var soChan = 0;
    for (var i = 1; i <numArr.length; i++) {
        if (numArr[i] % 2 == 0) {
            soChan = numArr[i];
        }
    }
    if (soChan == 0) {
        document.getElementById("txtBai5").innerHTML = "-1";
    } else {
        document.getElementById("txtBai5").innerHTML = "Số chẵn cuối cùng là : " + soChan;
    }
    
}
document.getElementById("btnBai5").onclick = timSoChanCuoi;