/* =========================== Global Variables =========================== */

// ----- Number Buttons -----
const numberButtons = document.querySelectorAll(".number");


// ----- Operator Buttons -----
const subtraction = document.querySelector("#subtraction");
const addition = document.querySelector("#addition");
const multiplication = document.querySelector("#multiplication");
const division = document.querySelector("#division");
const equals = document.querySelector("#equals");
const clearEntry = document.querySelector("#clearEntry");
const allClear = document.querySelector("#allClear");
const period = document.querySelector("#point");

// ----- Display -----
const display = document.querySelector(".display");

// ----- Values -----

let num1 = '';
let num2 = '';
let operator = '';


/* =========================== Setting Numbers =========================== */

numberButtons.forEach(btn => {
    btn.addEventListener('click', () => {
    let val = btn.value;
    if (!operator) {
        num1 += val;
        displayNum(num1);
    } else {
        num2 += val;
        displayNum(num2);
        }
    });
});

point.addEventListener("click", () => {
    if (!operator) {
        num1 += '.';
        displayNum(num1);
    } else {
        num2 += '.';
        displayNum(num2);
    }
});


/* =========================== Functional Operators =========================== */

addition.addEventListener("click", () => {
    if (num2 !== ''){
        operate(operator, num1, num2);
    }
    operator = '+';
});

subtraction.addEventListener("click", () => {
    if (num2 !== ''){
        operate(operator, num1, num2);
    }
    operator = '-';
});

division.addEventListener("click", () => {
    if (num2 !== ''){
        operate(operator, num1, num2);
    }
    operator = '/';
});

multiplication.addEventListener("click", () => {
    if (num2 !== ''){
        operate(operator, num1, num2);
    }
    operator = '*';
});

equals.addEventListener("click", () => {
    operate(operator, num1, num2);
    operator = '';
});

allClear.addEventListener("click", () => {
    num1 = '';
    num2 = '';
    operator = '';
    clearScreen();      
});

clearEntry.addEventListener("click", () => {
    if (operator == '') {
        num1 = num1.substring(0, num1.length - 1);
        displayNum(num1);
    } else {
        num2 = num2.substring(0, num2.length - 1);
        displayNum(num2);
    }
});

/* ===========================  Operator Function =========================== */

function operate(operator, firstNum, secondNum) {
    let a = Number(firstNum);
    let b = Number(secondNum);
    let result;

    switch (operator) {
        case '+':
            result = add(a, b);
            break;
        case '-':
            result = subtract(a, b);
            break;
        case '/':
            result = divide(a, b);
            break;
        case '*':
            result = multiply(a, b);
            break;
        default:
            return;
    }

    displayNum(result);
    num1 = result; // store results in num1 so you can just press another operator
    num2 = '';
    return num1;
}


/* =========================== Math Functions =========================== */

function add(a, b){
    return a + b
}

function subtract(a, b){
    return a - b
}

function divide(a, b){
    if (b == 0){
        alert("Cannot divide by 0!");
        return a
    }
    return a / b
}

function multiply(a, b){
    return a * b
}


/* =========================== Display Functions =========================== */

function clearScreen(){
    display.textContent = '';
}

function displayNum(num) {
    let numString = num.toString();
    // if the string is less than 9 num, display
    if (numString.length <= 9) {
        display.textContent = numString;
    // else, convert it into scientific notation
    } else {
        display.textContent = Number(num).toExponential(1);
    }
}

