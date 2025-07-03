/* =========================== Global Variables =========================== */

// ----- Number Buttons -----
const one = document.querySelector(".number_1");
const two = document.querySelector(".number_2");
const three = document.querySelector(".number_3");
const four = document.querySelector(".number_4");
const five = document.querySelector(".number_5");
const six = document.querySelector(".number_6");
const seven = document.querySelector(".number_7");
const eight = document.querySelector(".number_8");
const nine = document.querySelector(".number_9");
const zero = document.querySelector(".number_0");

// ----- Operator Buttons -----
const subtraction = document.querySelector("#subtraction");
const addition = document.querySelector("#addition");
const multiplication = document.querySelector("#multiplication");
const division = document.querySelector("#division");
const equals = document.querySelector("#equals");
const clearEntry = document.querySelector("#clearEntry");
const allClear = document.querySelector("#allClear");

// ----- Display -----
const display = document.querySelector(".display");

// ----- Values -----

let num1 = '';
let num2 = '';
let operator = '';
let result = '';


/* =========================== Setting Numbers =========================== */
one.addEventListener("click", () => {
    if (operator == '') {
        num1 += '1';
        displayNum(num1);
    } else {
        num2 += '1';
        displayNum(num2);
    }
});

two.addEventListener("click", () => {
    if (operator == '') {
        num1 += '2';
        displayNum(num1);
    } else {
        num2 += '2';
        displayNum(num2);
    }
});

three.addEventListener("click", () => {
    if (operator == '') {
        num1 += '3';
        displayNum(num1);
    } else {
        num2 += '3';
        displayNum(num2);
    }
});

four.addEventListener("click", () => {
    if (operator == '') {
        num1 += '4';
        displayNum(num1);
    } else {
        num2 += '4';
        displayNum(num2);
    }
});

five.addEventListener("click", () => {
    if (operator == '') {
        num1 += '5';
        displayNum(num1);
    } else {
        num2 += '5';
        displayNum(num2);
    }
});

six.addEventListener("click", () => {
    if (operator == '') {
        num1 += '6';
        displayNum(num1);
    } else {
        num2 += '6';
        displayNum(num2);
    }
});

seven.addEventListener("click", () => {
    if (operator == '') {
        num1 += '7';
        displayNum(num1);
    } else {
        num2 += '7';
        displayNum(num2);
    }
});

eight.addEventListener("click", () => {
    if (operator == '') {
        num1 += '8';
        displayNum(num1);
    } else {
        num2 += '8';
        displayNum(num2);
    }
});

nine.addEventListener("click", () => {
    if (operator == '') {
        num1 += '9';
        displayNum(num1);
    } else {
        num2 += '9';
        displayNum(num2);
    }
});

zero.addEventListener("click", () => {
    if (operator == '') {
        num1 += '0';
        displayNum(num1);
    } else {
        num2 += '0';
        displayNum(num2);
    }
});


/* =========================== Functional Operators =========================== */

addition.addEventListener("click", () => {
    operator = '+';
});

subtraction.addEventListener("click", () => {
    operator = '-';
});

division.addEventListener("click", () => {
    operator = '/';
});

multiplication.addEventListener("click", () => {
    operator = '*';
});

equals.addEventListener("click", () => {
    operate(operator, num1, num2);
});

allClear.addEventListener("click", () => {
    num1 = '';
    num2 = '';
    operator = '';
    result = '';
    displayNum('');      
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

function operate(operator, num1, num2) {
    let a = Number(num1);
    let b = Number(num2);
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

function displayNum(num){
    display.textContent = num;
}

