function add(a, b) {return a + b}
function subtract(a, b) {return a - b}
function multiply(a, b) {return a * b}
function devide(a, b) {return a / b}

function operate(a, sign, b) {
    if (sign == "+") {return add(a, b)}
    else if (sign == "-") {return subtract(a, b)}
    else if (sign == "*") {return multiply(a, b)}
    else if (sign == "/") {return devide(a, b)}
}

let numberFirst = 0;
let numberSecond = 0;
let operator = "";