let blockForChooseOperation = document.querySelector(".blockForChooseOperation");
let blockForNumbers = document.querySelector(".blockForNumbers");
let blockForOtherOperations = document.querySelector(".blockForOtherOperations");

let forValue = document.querySelector(".forValue");
let forHistory = document.querySelector(".forHistory");


let operationsForButtons = ["&#43;", "&#8722;", "&#215;", "&#247;", "Pi"];
let numbersForButtons = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, ".", "AC"];
let otherOperationsForButtons = ["C", "All", "=", "(", ")"];


let charsOfOperation = ["+", "-", "*", "/"];


document.addEventListener("keyup", addAnEventHandler);

createButtonsOfOperations();
createButtonsOfNumbers();
createButtonsOfOtherOperations();


function createButtonsOfOperations() {
    operationsForButtons
        .forEach(operator => {
            let operatorButton = document.createElement("button");
            operatorButton.innerHTML = operator;
            operatorButton.className = "operationButton font";
            operatorButton.dataset.type = "buttonOperation";
            blockForChooseOperation.append(operatorButton);
            operatorButton.addEventListener("click", passParameter)
        })
}


function createButtonsOfNumbers() {
    numbersForButtons
        .forEach(number => {
            let button = document.createElement("button");
            button.innerHTML = number;
            button.className = "numberButton font";
            button.dataset.type = "buttonNumber";
            blockForNumbers.append(button);
            button.addEventListener("click", passParameter)
        })
}

function createButtonsOfOtherOperations() {
    otherOperationsForButtons
        .forEach(operator => {
            let button = document.createElement("button");
            button.innerHTML = operator;
            button.className = "otherButtons font";
            button.dataset.type = "buttonOtherOperator";
            blockForOtherOperations.append(button);
            button.addEventListener("click", passParameter)
        })
}

function addAnEventHandler(event) {
    if (event.code === "Digit9" && event.shiftKey) {
        calculateAndOtherFunctions("(");
        return;
    }
    if (event.code === "Digit0" && event.shiftKey) {
        calculateAndOtherFunctions(")");
        return;
    }
    console.log(event.code);
    switch (event.code) {
        case "Numpad0":
        case "Digit0":
            showNumbersInInput(0);
            break;
        case "Digit1":
        case "Numpad1":
            showNumbersInInput(1);
            break;
        case "Numpad2":
        case "Digit2":
            showNumbersInInput(2);
            break;
        case "Numpad3":
        case "Digit3":
            showNumbersInInput(3);
            break;
        case "Numpad4":
        case "Digit4":
            showNumbersInInput(4);
            break;
        case "Numpad5":
        case "Digit5":
            showNumbersInInput(5);
            break;
        case "Numpad6":
        case "Digit6":
            showNumbersInInput(6);
            break;
        case "Numpad7":
        case "Digit7":
            showNumbersInInput(7);
            break;
        case "Numpad8":
        case "Digit8":
            showNumbersInInput(8);
            break;
        case "Numpad9":
        case "Digit9":
            showNumbersInInput(9);
            break;
        case "Period":
        case"Slash":
            showNumbersInInput(".");
            break;
        case"Backspace":
            showNumbersInInput("AC");
            break;
        case "NumpadAdd":
            showOperationsInInput("+");
            break;
        case "NumpadSubtract":
            showOperationsInInput("−");
            break;
        case "NumpadMultiply":
            showOperationsInInput("×");
            break;
        case "NumpadDivide":
            showOperationsInInput("÷");
            break;
        case "Equal":
            calculateAndOtherFunctions("=");
            break;
        case "Enter":
            calculateAndOtherFunctions("=");
            break;
    }
}

function passParameter(event) {
    let textOfButton = event.target.textContent;
    if (event.target.dataset.type === "buttonOperation") {
        showOperationsInInput(textOfButton);
    }
    if (event.target.dataset.type === "buttonNumber") {
        showNumbersInInput(textOfButton);
    }
    if (event.target.dataset.type === "buttonOtherOperator") {
        calculateAndOtherFunctions(textOfButton);
    }
}


function showOperationsInInput(textOfButtonParam) {
    let valuesFromInput = forValue.textContent;
    let indexLastChar = valuesFromInput.length - 1;
    let lastCharInInput = valuesFromInput[indexLastChar];
    if (textOfButtonParam === "Pi") {
        if (valuesFromInput === '0') {
            forValue.textContent = "";
        }
        forValue.append('Pi');
        return
    }
    if (charsOfOperation.indexOf(lastCharInInput) < 0) {
        forValue.append(textOfButtonParam);
    } else {
        valuesFromInput = valuesFromInput.slice(0, -1);
        valuesFromInput += textOfButtonParam;
        forValue.textContent = valuesFromInput;
    }
}

function showNumbersInInput(valueParam) {
    let textOfInput = forValue.textContent;
    let indexOfLastChar = textOfInput.length - 1;
    let lastChar = textOfInput[indexOfLastChar];


    if (valueParam === ".") {
        if (lastChar !== ".") {
            forValue.append(valueParam);
        }
        return;
    }

    if (textOfInput === '0') {
        forValue.textContent = "";
    }
    if (valueParam !== "AC") {
        forValue.append(valueParam);
    } else {
        forValue.textContent = textOfInput.slice(0, -1);
    }
}


function calculateAndOtherFunctions(valueParam) {
    let textOfInput = forValue.textContent;
    if (valueParam === "C") {
        forValue.textContent = "";
    }
    if (valueParam === "All") {
        forValue.textContent = "";
        forHistory.textContent = "Start:";
    }
    if (valueParam === "(" || valueParam === ")") {
        forValue.append(valueParam);
    }


    if (valueParam === "=") {
        if (textOfInput === "") {
            return;
        }

        textOfInput = textOfInput.replaceAll("Pi", "3.14")
        textOfInput = textOfInput.replaceAll("−", "-");
        textOfInput = textOfInput.replaceAll("×", "*");
        textOfInput = textOfInput.replaceAll("÷", "/");

        let result = eval(textOfInput);

        result = Math.round(result * 100) / 100;
        textOfInput = textOfInput.replaceAll("-", "−");
        textOfInput = textOfInput.replaceAll("*", "×");
        textOfInput = textOfInput.replaceAll("/", "÷");
        forHistory.textContent = textOfInput;
        forValue.textContent = result;
    }
}



