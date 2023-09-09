let blockForChooseOperation = document.querySelector(".blockForChooseOperation");
let blockForNumbers = document.querySelector(".blockForNumbers");
let blockForOtherOperations = document.querySelector(".blockForOtherOperations");
let inputField = document.querySelector(".inputField");

let operationsForButtons = ["+", "-", "*", "/"];
let numbersForButtons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ".", "AC"];
let otherOperations = ["C", "="];


function createButtonsOperations() {
    operationsForButtons
        .forEach(operator => {
            let operatorButton = document.createElement("button");
            operatorButton.innerText = `${operator}`;
            operatorButton.className = "operationButton";
            blockForChooseOperation.append(operatorButton);
        })
}


function createButtonsNumbers() {
    numbersForButtons
        .forEach(number => {
            let button = document.createElement("button");
            button.innerText = `${number}`;
            button.className = "numberButton";
            blockForNumbers.append(button);
            button.addEventListener("click", function (event) {
                let value = event.target.textContent;
                inputField.append(value);
            })
        })
}

function createButtonsForOtherOperations() {
    otherOperations
        .forEach(operator => {
            let button = document.createElement("button");
            button.innerText = `${operator}`;
            button.className = "otherButtons";
            blockForOtherOperations.append(button);
        })
}


createButtonsOperations();
createButtonsNumbers();
createButtonsForOtherOperations();

