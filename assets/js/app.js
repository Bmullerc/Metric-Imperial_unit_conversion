const numberDisplay = document.querySelector('.number-display');
const inputNumber = document.querySelector('.number-to-convert');
const submitBtn = document.querySelector('.submit-btn');
const inputError = document.querySelector('.input-error');
const numberInput = document.querySelectorAll('.number--input');
const resultOutput = document.querySelectorAll('.result--output');

submitBtn.addEventListener('click', () => {
    const myNumber = Number(inputNumber.value);
    
    if (!myNumber) {
        inputError.textContent = "Invalid input, please insert a number.";
        clearSubmit();
        clearDisplay();
        return;

    } else {
        for (const number in numberInput) {
            numberInput[number].textContent = myNumber;
        }
        numberDisplay.textContent = myNumber;
        formulaCalculation()
        clearSubmit();
        clearError();
        return;
    }
})

function clearSubmit() {
    inputNumber.value = "";
}

function clearError() {
    inputError.textContent = "";
}

function clearDisplay() {
    numberDisplay.textContent = "0";
    for (const number in numberInput) {
        numberInput[number].textContent = "0";
        resultOutput[number].textContent = "0.000";
    }
}

function formulaCalculation() {
    const myNumber = Number(inputNumber.value);

    let meterToFeet = (myNumber * 3.281).toFixed(3);
    let literToGallon = (myNumber / 3.785).toFixed(3);
    let kilosToPounds = (myNumber * 2.205).toFixed(3);
    let feetToMeter = (myNumber / 3.281).toFixed(3);
    let gallonToLiter = (myNumber * 3.785).toFixed(3);
    let poundsToKilos = (myNumber / 2.205).toFixed(3);

    const answerArray = [meterToFeet, feetToMeter, literToGallon, gallonToLiter, kilosToPounds, poundsToKilos];
    
    for (let number in answerArray) {
        resultOutput[number].textContent = answerArray[number];
    }
}