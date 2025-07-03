/* =========================== Global Values =========================== */

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

// ----- Display -----
const display = document.querySelector(".display");

// ----- Values -----
let result = '';
let num1 = '';
let num2 = '';
let operator = '';


/* =========================== Changing Operators =========================== */

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

function operate (operator, num1, num2){
    switch (operator) {
        case '+':
            result = addition(num1, num2);
            displayNum(result);
            break;
        case '-':
            result = subtraction(num1, num2);
            displayNum(result);
            break;
        case '/':
            result = division(num1, num2);
            displayNum(result);
            break;
        case '*':
            result = multiplication(num1, num2);
            displayNum(result);
            break;
    }
} 


/* =========================== Math Functions =========================== */

function addition(a, b){
    return a + b
}

function subtraction(a, b){
    return a - b
}

function division(a, b){
    if (b == 0){
        alert("Cannot divide by 0!");
        return a
    }
    return a / b
}

function multiplication(a, b){
    return a * b
}


/* =========================== Display Functions =========================== */

function clearScreen(){
    display.textContent = '';
}

function displayNum(num){
    display.textContent = num;
}

