function appendToDisplay(value) {
    document.getElementsByClassName('result')[0].innerHTML += value;
}

function clearDisplay() {
    document.getElementsByClassName('result')[0].innerHTML = '';
}

function calculate() {
    let con = document.getElementsByClassName('result')[0];
    let result = eval(con.innerHTML);
    con.innerHTML = result;
}

function deleteLast() {
    let con = document.getElementsByClassName('result')[0];
    con.innerHTML = con.innerHTML.slice(0, -1);
}

function toggleSign() {
    let display = document.getElementsByClassName('result')[0];
    let currentValue = parseFloat(display.innerHTML);
    if (!isNaN(currentValue)) {
        display.innerHTML = -currentValue;
    }
}
