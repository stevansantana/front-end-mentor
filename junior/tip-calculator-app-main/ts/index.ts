const inputBill = document.getElementById('input-bill') as HTMLInputElement;
const inputPeople = document.getElementById('input-people') as HTMLInputElement;
const percentageButtons = document.getElementsByClassName('percentage-button') as HTMLCollection;
const percentageCustom = document.getElementById('custom-percentage') as HTMLInputElement;
const resetButton = document.getElementById('reset-button') as HTMLElement;
const fieldTip = document.getElementById('tip-amount') as HTMLElement;
const fieldTotal = document.getElementById('total-person') as HTMLElement;

let billValue: number | undefined;
let numberPeople: number | undefined;
let percentageValue: number | undefined;
let percentageCustomValue: number | undefined;

function showError(element: HTMLInputElement, message: string) {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = message;
    errorMessage.style.color = 'red';
    errorMessage.style.fontSize = '12px';
    errorMessage.classList.add('error-message');
    
    const labelContainer = element.parentElement;
    labelContainer?.appendChild(errorMessage);

    element.style.outlineWidth = '2px';
    element.style.outlineStyle = 'solid';
    element.style.outlineColor = 'red';
}

function clearErrors(element: HTMLInputElement) {
    const errorMessages = element.parentElement?.querySelectorAll('.error-message');
    errorMessages?.forEach(error => error.remove());

    element.style.outlineWidth = '';
    element.style.outlineStyle = '';
    element.style.outlineColor = '';
}

function validateAndCalculate() {
    if (billValue !== undefined && numberPeople !== undefined && numberPeople > 0) {
        const percentage = percentageCustomValue ?? percentageValue;
        if (percentage !== undefined) {
            calculate(billValue, percentage, numberPeople);
        }
    }
}

function calculate(bill: number, percentage: number, people: number) {
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
    } else if (billValue < 0) {
        showError(inputBill, "Can't be less than zero");
    }
    
    validateAndCalculate();
}

function handleInputPeople() {
    numberPeople = Number(inputPeople.value);

    clearErrors(inputPeople);

    if (isNaN(numberPeople)) {
        showError(inputPeople, "Can't be letters");
    } else if (!Number.isInteger(numberPeople)) {
        showError(inputPeople, "Must be integer");
    } else if (numberPeople <= 0) {
        showError(inputPeople, "Must be greater than zero");
    }
    
    validateAndCalculate();
}

function handlePercentageButtonClick(event: Event) {
    percentageCustom.value = '';
    percentageCustomValue = undefined;

    Array.from(percentageButtons).forEach(button => button.classList.remove('button-clicked'));
    (event.currentTarget as HTMLElement).classList.add('button-clicked');

    percentageValue = Number((event.currentTarget as HTMLElement).textContent?.replace('%', ''));

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
    } else if (percentageCustomValue < 0) {
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
