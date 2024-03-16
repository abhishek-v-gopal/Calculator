
function clearScreen() {
    document.getElementById("result").value = "";
}
 
function display(value) {
    document.getElementById("result").value += value;
}
 
function calculate() {
    var p = document.getElementById("result").value;
    console.log(p)
    var q = eval(p);
    document.getElementById("result").value = q;
    console.log(q)
}