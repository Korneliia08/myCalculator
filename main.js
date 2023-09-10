let blockForChooseOperation = document.querySelector(".blockForChooseOperation");
let blockForNumbers = document.querySelector(".blockForNumbers");
let blockForOtherOperations = document.querySelector(".blockForOtherOperations");
let inputField = document.querySelector(".inputField");

let forValue = document.querySelector(".forValue");
let forHistory = document.querySelector(".forHistory");


let operationsForButtons = ["&#43;", "&#8722;", "&#215;", "&#247;", "Pi"];
let numbersForButtons = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, ".", "AC"];

let otherOperations = ["C", "All", "=", "(", ")"];


let charsOfOperation = ["+", "-", "*", "/"];


function createButtonsOperations() {
    operationsForButtons
        .forEach(operator => {
            let operatorButton = document.createElement("button");
            operatorButton.innerHTML = operator;
            operatorButton.className = "operationButton font";
            blockForChooseOperation.append(operatorButton);
            operatorButton.addEventListener("click", showOperationsInInput)
        })
}


function createButtonsNumbers() {
    numbersForButtons
        .forEach(number => {
            let button = document.createElement("button");
            button.innerHTML = number;
            button.className = "numberButton font";
            blockForNumbers.append(button);
            button.addEventListener("click", showNumbersInInput)
        })
}

function createButtonsForOtherOperations() {
    otherOperations
        .forEach(operator => {
            let button = document.createElement("button");
            button.innerHTML = operator;
            button.className = "otherButtons font";
            blockForOtherOperations.append(button);
            button.addEventListener("click", showInInput)
        })
}


function showOperationsInInput(event) {

    let textOfButton = event.target.textContent;

    let valuesFromInput = forValue.textContent;
    let indexLastChar = valuesFromInput.length - 1;
    let lastCharInInput = valuesFromInput[indexLastChar];
    if (textOfButton === "Pi") {
        if (valuesFromInput === '0') {
            forValue.textContent = "";
        }
        forValue.append('Pi');
        return
    }
    if (charsOfOperation.indexOf(lastCharInInput) < 0) {
        forValue.append(textOfButton);
    } else {
        valuesFromInput = valuesFromInput.slice(0, -1);
        valuesFromInput += textOfButton;
        forValue.textContent = valuesFromInput;
    }
}

function showNumbersInInput(event) {
    let value = event.target.textContent;
    let textOfInput = forValue.textContent;
    if (textOfInput === '0') {
        forValue.textContent = "";

    }
    if (value !== "AC") {
        forValue.append(value);
    } else {
        let textOfInputWithoutLastChar = textOfInput.slice(0, -1);
        forValue.textContent = textOfInputWithoutLastChar;
    }


}


function showInInput(event) {
    let value = event.target.textContent;
    let textOfInput = forValue.textContent;
    if (value === "C") {
        forValue.textContent = "";
    }
    if (value === "All") {
        forValue.textContent = "";
        forHistory.textContent = "Start:";
    }
    if (value === "(" || value === ")") {
        forValue.append(value);
    }

    
    if (value === "=") {
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


createButtonsOperations();
createButtonsNumbers();
createButtonsForOtherOperations();

