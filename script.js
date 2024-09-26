function computeSum() {
    var field1 = parseFloat(document.getElementById('field1').value);
    var field2 = parseFloat(document.getElementById('field2').value);
    var result = field1 + field2;
    document.getElementById('result').innerText = result;
}
