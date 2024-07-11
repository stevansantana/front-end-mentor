"use strict";
const inputBill = document.getElementById('input-bill');
const inputPeople = document.getElementById('input-people');
const percentageButtons = document.getElementsByClassName('percentage-button');
const percentageCustom = document.getElementById('custom-percentage');
const resetButton = document.getElementById('reset-button');
const fieldTip = document.getElementById('tip-amount');
const fieldTotal = document.getElementById('total-person');
let billValue;
let numberPeople;
let percentageValue;
let percentageCustomValue;
function showError(element, message) {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = message;
    errorMessage.style.color = 'red';
    errorMessage.style.fontSize = '12px';
    errorMessage.classList.add('error-message');
    const labelContainer = element.parentElement;
    labelContainer === null || labelContainer === void 0 ? void 0 : labelContainer.appendChild(errorMessage);
    element.style.outlineWidth = '2px';
    element.style.outlineStyle = 'solid';
    element.style.outlineColor = 'red';
}
function clearErrors(element) {
    var _a;
    const errorMessages = (_a = element.parentElement) === null || _a === void 0 ? void 0 : _a.querySelectorAll('.error-message');
    errorMessages === null || errorMessages === void 0 ? void 0 : errorMessages.forEach(error => error.remove());
    element.style.outlineWidth = '';
    element.style.outlineStyle = '';
    element.style.outlineColor = '';
}
function validateAndCalculate() {
    if (billValue !== undefined && numberPeople !== undefined && numberPeople > 0) {
        const percentage = percentageCustomValue !== null && percentageCustomValue !== void 0 ? percentageCustomValue : percentageValue;
        if (percentage !== undefined) {
            calculate(billValue, percentage, numberPeople);
        }
    }
}
function calculate(bill, percentage, people) {
    const tipAmount = (bill * percentage / 100) / people;
    const total = (bill + bill * percentage / 100) / people;
    fieldTip.textContent = `$${tipAmount.toFixed(2)}`;
    fieldTotal.textContent = `$${total.toFixed(2)}`;
    resetButton.style.background = 'hsl(172, 67%, 45%)';
    resetButton.style.cursor = 'pointer';
}
function resetInputs() {
    fieldTip.textContent = '$0.00';
    fieldTotal.textContent = '$0.00';
    inputBill.value = '';
    inputPeople.value = '';
    percentageCustom.value = '';
    billValue = undefined;
    numberPeople = undefined;
    percentageValue = undefined;
    percentageCustomValue = undefined;
    Array.from(percentageButtons).forEach(button => button.classList.remove('button-clicked'));
    resetButton.style.cursor = 'initial';
    resetButton.style.background = 'hsla(172, 67%, 45%, 0.226)';
}
function handleInputBill() {
    billValue = Number(inputBill.value);
    clearErrors(inputBill);
    if (isNaN(billValue)) {
        showError(inputBill, "Can't be letters");
    }
    else if (billValue < 0) {
        showError(inputBill, "Can't be less than zero");
    }
    validateAndCalculate();
}
function handleInputPeople() {
    numberPeople = Number(inputPeople.value);
    clearErrors(inputPeople);
    if (isNaN(numberPeople)) {
        showError(inputPeople, "Can't be letters");
    }
    else if (!Number.isInteger(numberPeople)) {
        showError(inputPeople, "Must be integer");
    }
    else if (numberPeople <= 0) {
        showError(inputPeople, "Must be greater than zero");
    }
    validateAndCalculate();
}
function handlePercentageButtonClick(event) {
    var _a;
    percentageCustom.value = '';
    percentageCustomValue = undefined;
    Array.from(percentageButtons).forEach(button => button.classList.remove('button-clicked'));
    event.currentTarget.classList.add('button-clicked');
    percentageValue = Number((_a = event.currentTarget.textContent) === null || _a === void 0 ? void 0 : _a.replace('%', ''));
    clearErrors(percentageCustom);
    validateAndCalculate();
}
function handleCustomPercentageInput() {
    Array.from(percentageButtons).forEach(button => button.classList.remove('button-clicked'));
    percentageValue = undefined;
    percentageCustomValue = Number(percentageCustom.value);
    clearErrors(percentageCustom);
    if (isNaN(percentageCustomValue)) {
        showError(percentageCustom, "Can't be letters");
    }
    else if (percentageCustomValue < 0) {
        showError(percentageCustom, "Can't be less than 0");
    }
    validateAndCalculate();
}
function init() {
    inputBill.addEventListener('input', handleInputBill);
    inputPeople.addEventListener('input', handleInputPeople);
    percentageCustom.addEventListener('input', handleCustomPercentageInput);
    Array.from(percentageButtons).forEach(button => button.addEventListener('click', handlePercentageButtonClick));
    resetButton.addEventListener('click', resetInputs);
}
init();
