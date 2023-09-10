let blockForChooseOperation = document.querySelector(".blockForChooseOperation");
let blockForNumbers = document.querySelector(".blockForNumbers");
let blockForOtherOperations = document.querySelector(".blockForOtherOperations");
let inputField = document.querySelector(".inputField");

let forValue = document.querySelector(".forValue");
let forResult = document.querySelector(".forResult");


// let operationsForButtons = ["&#43;", "&#8722;", "&#215;", "&#247;"];
let operationsForButtons = ["+", "-", "*", "/", "Pi"];
let numbersForButtons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ".", "AC"];
let otherOperations = ["C", "All", "=", "(", ")"];


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


let charsOfOperation = ["+", "−", "×", "÷"];

function showOperationsInInput(event) {

    let textOfButton = event.target.textContent;

    let valuesFromInput = forValue.textContent;
    let indexLastChar = valuesFromInput.length - 1;
    let lastCharInInput = valuesFromInput[indexLastChar];
    if (textOfButton === "Pi") {
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
        forResult.textContent = "";
    }
    if (value === "(" || value === ")") {
        forValue.append(value);
    }

    if (value === "=") {
        textOfInput = textOfInput.replaceAll("Pi", "3.14159265359")
        let result = eval(textOfInput);
        result = Math.round(result * 100) / 100;
        forResult.textContent = `Result: ${result}`;
        console.log(result);
    }
}


createButtonsOperations();
createButtonsNumbers();
createButtonsForOtherOperations();

