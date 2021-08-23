var numArr = [-12,4,-4,2.5,9,1,-10,-34];

function addElement() {
    var num = Number(document.getElementById("inputArrNum").value);

    numArr.push(num);
    document.getElementById("txtArr").innerHTML = "=> " + numArr;
}
document.getElementById("btnAdd").onclick = addElement;