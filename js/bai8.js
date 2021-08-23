function ktSNT(so) {
    if (so < 2) {
        return false;
    }
    for (var i = 2; i < so; i++) {
        if (so % i == 0) {
            return false;
        }
    }
    return true;
}
function timSNT() {
    var snt = 0;
    for (var i = 0; i < numArr.length; i++) {
        if (Number.isInteger(numArr[i]) && ktSNT(numArr[i])) {
            snt = numArr[i];
            break;
        }
    }
    if (snt == 0) {
        document.getElementById("txtBai8").innerHTML = "-1";
    }
    document.getElementById("txtBai8").innerHTML = "Số nguyên tố đầu tiên: " + snt;
}
document.getElementById("btnBai8").onclick = timSNT;