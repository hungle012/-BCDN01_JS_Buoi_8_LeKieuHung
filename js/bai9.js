var numArr2 = [];

function addEle() {
    var num = Number(document.getElementById("inputNum1Bai9").value);

    numArr2.push(num);
    document.getElementById("txt1Bai9").innerHTML = "=>" + numArr2;
}
document.getElementById("btn1Bai9").onclick = addEle;

function demSoNguyen() {
    var count = 0;
    for (var i = 0; i < numArr2.length; i++) {
        if (Number.isInteger(numArr2[i])) {
            count ++;
        }
    }
    document.getElementById("txt2Bai9").innerHTML = "Số nguyên: " + count;
}
document.getElementById("btn2Bai9").onclick = demSoNguyen;