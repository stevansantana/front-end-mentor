const inputBill = document.getElementById('input-bill') as HTMLInputElement;
const inputPeople = document.getElementById('input-people') as HTMLInputElement;
const percentageButton = document.getElementsByClassName('percentage-button') as HTMLCollection;
const percetageCustom = document.getElementById('custom-percentage') as HTMLInputElement;
const resetButton = document.getElementById('reset-button') as HTMLElement;
const fieldTip = document.getElementById('tip-amount') as HTMLElement;
const fieldTotal = document.getElementById('total-person') as HTMLElement;    
let billValue: number | undefined;
let numberPeople: number | undefined;
let percentageValue: number | undefined;
let percentageCustomValue: number | undefined;

function inputValues() {

    function validateAndCalculate() {
        if(percentageValue === undefined) {
            if (billValue !== undefined && percentageCustomValue !== undefined && numberPeople !== undefined && numberPeople > 0) {
                calculate(billValue, percentageCustomValue, numberPeople);
            }
        }
        if(percentageCustomValue === undefined) {
            if (billValue !== undefined && percentageValue !== undefined && numberPeople !== undefined && numberPeople > 0) {
                calculate(billValue, percentageValue, numberPeople);
            }
        } 
    }

    inputBill?.addEventListener('input', () => {  
        billValue = Number(inputBill.value);

        if (isNaN(billValue)) {
            const errorMessageLetter = document.getElementById('error-message-letter-bill');
            if (errorMessageLetter) errorMessageLetter.remove();

            const errorMessageZero = document.getElementById('error-message-zero-bill');
            if (errorMessageZero) errorMessageZero.remove();

            inputBill.style.outlineWidth = '2px';
            inputBill.style.outlineStyle = 'solid';
            inputBill.style.outlineColor = 'red';

            const errorMessage = document.createElement('p');
            const textMessage = document.createTextNode('Can\'t be letters');

            errorMessage.appendChild(textMessage);
            errorMessage.style.color = 'red';
            errorMessage.id = 'error-message-letter-bill';
            errorMessage.style.fontSize = '12px';

            const labelContainer = document.getElementsByClassName('label-container');
            labelContainer[0].appendChild(errorMessage);
        } else if (billValue < 0) {
            const errorMessageLetter = document.getElementById('error-message-letter-bill');
            if (errorMessageLetter) errorMessageLetter.remove();

            const errorMessageZero = document.getElementById('error-message-zero-bill');
            if (errorMessageZero) errorMessageZero.remove();

            inputBill.style.outlineWidth = '2px';
            inputBill.style.outlineStyle = 'solid';
            inputBill.style.outlineColor = 'red';

            const errorMessage = document.createElement('p');
            const textMessage = document.createTextNode('Can\'t be less than zero');

            errorMessage.appendChild(textMessage);
            errorMessage.style.color = 'red';
            errorMessage.id = 'error-message-zero-bill';
            errorMessage.style.fontSize = '12px';

            const labelContainer = document.getElementsByClassName('label-container');
            labelContainer[0].appendChild(errorMessage);
        } else {
            const errorMessageLetter = document.getElementById('error-message-letter-bill');
            const errorMessageZero = document.getElementById('error-message-zero-bill');

            errorMessageLetter?.remove();
            errorMessageZero?.remove();

            inputBill.style.outlineWidth = '';
            inputBill.style.outlineStyle = '';
            inputBill.style.outlineColor = '';
        }
        validateAndCalculate();
    });

    for (let i = 0; i < percentageButton.length; i++) {
        percentageButton[i].addEventListener('click', () => {
            percetageCustom.value = '';
            percentageCustomValue = undefined;

            for (let j = 0; j < percentageButton.length; j++) {
                percentageButton[j].classList.remove('button-clicked');
            }
            percentageButton[i].classList.add('button-clicked');

            const percentageText = percentageButton[i].textContent?.replace('%', '');
            percentageValue = Number(percentageText);

            const errorMessageLetter = document.getElementById('error-message-letter-custom');
            if (errorMessageLetter) {
                errorMessageLetter.remove();
            }

            const errorMessageZero = document.getElementById('error-message-zero-custom');
            if (errorMessageZero) { 
                errorMessageZero.remove();
            }

            percetageCustom.style.outlineWidth = '';
            percetageCustom.style.outlineStyle = '';
            percetageCustom.style.outlineColor = '';

            validateAndCalculate();
        });
    }

    percetageCustom.addEventListener('input', () => {
        for(let i = 0; i < percentageButton.length; i++) {
            percentageButton[i].classList.remove('button-clicked');
        }
        percentageValue = undefined

        percentageCustomValue = Number(percetageCustom.value)
        if (isNaN(percentageCustomValue)) {
            const errorMessageLetter = document.getElementById('error-message-letter-custom');
            if (errorMessageLetter) errorMessageLetter.remove();

            const errorMessageZero = document.getElementById('error-message-zero-custom');
            if (errorMessageZero) errorMessageZero.remove();

            percetageCustom.style.outlineWidth = '2px';
            percetageCustom.style.outlineStyle = 'solid';
            percetageCustom.style.outlineColor = 'red';

            const errorMessage = document.createElement('p');
            const textMessage = document.createTextNode('Can\'t be letters');

            errorMessage.appendChild(textMessage);
            errorMessage.style.color = 'red';
            errorMessage.id = 'error-message-letter-custom';
            errorMessage.style.fontSize = '12px';

            const labelContainer = document.getElementsByClassName('label-container');
            labelContainer[1].appendChild(errorMessage);

        } else if (percentageCustomValue < 0) {
            const errorMessageLetter = document.getElementById('error-message-letter-custom');
            if (errorMessageLetter) {
                errorMessageLetter.remove();
            }

            const errorMessageZero = document.getElementById('error-message-zero-custom');
            if (errorMessageZero) { 
                errorMessageZero.remove();
            }

            percetageCustom.style.outlineWidth = '2px';
            percetageCustom.style.outlineStyle = 'solid';
            percetageCustom.style.outlineColor = 'red';

            const errorMessage = document.createElement('p');
            const textMessage = document.createTextNode('Can\'t be less than 0');

            errorMessage.appendChild(textMessage);
            errorMessage.style.color = 'red';
            errorMessage.id = 'error-message-zero-custom';
            errorMessage.style.fontSize = '12px';

            const labelContainer = document.getElementsByClassName('label-container');
            labelContainer[1].appendChild(errorMessage);

        } else {
            const errorMessageLetter = document.getElementById('error-message-letter-custom');
            const errorMessageZero = document.getElementById('error-message-zero-custom');

            errorMessageLetter?.remove();
            errorMessageZero?.remove();

            percetageCustom.style.outlineWidth = '';
            percetageCustom.style.outlineStyle = '';
            percetageCustom.style.outlineColor = '';
        }   
        validateAndCalculate();
    });

    inputPeople?.addEventListener('input', () => {
        numberPeople = Number(inputPeople.value);

        if (isNaN(numberPeople)) {
            const errorMessageLetter = document.getElementById('error-message-letter');
            if (errorMessageLetter) errorMessageLetter.remove();

            const errorMessageZero = document.getElementById('error-message-zero');
            if (errorMessageZero) errorMessageZero.remove();

            inputPeople.style.outlineWidth = '2px';
            inputPeople.style.outlineStyle = 'solid';
            inputPeople.style.outlineColor = 'red';

            const errorMessage = document.createElement('p');
            const textMessage = document.createTextNode('Can\'t be letters');

            errorMessage.appendChild(textMessage);
            errorMessage.style.color = 'red';
            errorMessage.id = 'error-message-letter';
            errorMessage.style.fontSize = '12px';
            
            const labelContainer = document.getElementsByClassName('label-container');
            labelContainer[2].appendChild(errorMessage);

        } else if(numberPeople % 1 !== 0) {
            numberPeople = undefined;
            const errorMessageLetter = document.getElementById('error-message-letter');
            if (errorMessageLetter) errorMessageLetter.remove();

            const errorMessageZero = document.getElementById('error-message-zero');
            if (errorMessageZero) errorMessageZero.remove();

            inputPeople.style.outlineWidth = '2px';
            inputPeople.style.outlineStyle = 'solid';
            inputPeople.style.outlineColor = 'red';

            const errorMessage = document.createElement('p');
            const textMessage = document.createTextNode('Must be integer');

            errorMessage.appendChild(textMessage);
            errorMessage.style.color = 'red';
            errorMessage.id = 'error-message-letter';
            errorMessage.style.fontSize = '12px';
            
            const labelContainer = document.getElementsByClassName('label-container');
            labelContainer[2].appendChild(errorMessage);

        } else if (numberPeople === 0) {
            const errorMessageLetter = document.getElementById('error-message-letter');
            if (errorMessageLetter) errorMessageLetter.remove();

            const errorMessageZero = document.getElementById('error-message-zero');
            if (errorMessageZero) errorMessageZero.remove();

            inputPeople.style.outlineWidth = '2px';
            inputPeople.style.outlineStyle = 'solid';
            inputPeople.style.outlineColor = 'red';

            const errorMessage = document.createElement('p');
            const textMessage = document.createTextNode('Can\'t be zero');

            errorMessage.appendChild(textMessage);
            errorMessage.style.color = 'red';
            errorMessage.id = 'error-message-zero';
            errorMessage.style.fontSize = '12px';

            const labelContainer = document.getElementsByClassName('label-container');
            labelContainer[2].appendChild(errorMessage);

        } else if (numberPeople < 0) {
            const errorMessageLetter = document.getElementById('error-message-letter');
            if (errorMessageLetter) errorMessageLetter.remove();

            const errorMessageZero = document.getElementById('error-message-zero');
            if (errorMessageZero) errorMessageZero.remove();

            inputPeople.style.outlineWidth = '2px';
            inputPeople.style.outlineStyle = 'solid';
            inputPeople.style.outlineColor = 'red';

            const errorMessage = document.createElement('p');
            const textMessage = document.createTextNode('Must be positive');

            errorMessage.appendChild(textMessage);
            errorMessage.style.color = 'red';
            errorMessage.id = 'error-message-zero';
            errorMessage.style.fontSize = '12px';

            const labelContainer = document.getElementsByClassName('label-container');
            labelContainer[2].appendChild(errorMessage);
        } else  {
            const errorMessageLetter = document.getElementById('error-message-letter');
            const errorMessageZero = document.getElementById('error-message-zero');

            errorMessageLetter?.remove();
            errorMessageZero?.remove();

            inputPeople.style.outlineWidth = '';
            inputPeople.style.outlineStyle = '';
            inputPeople.style.outlineColor = '';
        }

        if(inputPeople.value === '') {
            const errorMessageLetter = document.getElementById('error-message-letter');
            const errorMessageZero = document.getElementById('error-message-zero');

            errorMessageLetter?.remove();
            errorMessageZero?.remove();

            inputPeople.style.outlineWidth = '';
            inputPeople.style.outlineStyle = '';
            inputPeople.style.outlineColor = '';
        }
        validateAndCalculate();
    });
}

function calculate(billValueChecked: number, percentageValueChecked: number, numberPeopleChecked: number) {
    let total = (billValueChecked + (billValueChecked * (percentageValueChecked / 100))) / numberPeopleChecked;
    let tipAmount = (billValueChecked * (percentageValueChecked / 100)) / numberPeopleChecked;

    if(fieldTip && fieldTotal) {
        fieldTip.innerHTML = `$${tipAmount.toFixed(2)}`;
        fieldTotal.innerHTML = `$${total.toFixed(2)}`;
        resetButton.style.background = 'hsl(172, 67%, 45%)';
        resetButton.style.cursor = 'pointer';
    }

    resetButton.addEventListener('mouseover', resetButtonMouseOver);
    resetButton.addEventListener('mouseout', resetButtonMouseOut);
    resetButton.addEventListener('click', () => {
        fieldTip.innerHTML = '$0.00';
        fieldTotal.innerHTML = '$0.00';

        inputBill.value = '';
        inputPeople.value = '';
        percetageCustom.value = '';

        billValue = undefined;
        numberPeople = undefined;
        percentageValue = undefined;
        percentageCustomValue = undefined;

        for (let i = 0; i < percentageButton.length; i++) {
            percentageButton[i].classList.remove('button-clicked');
        }

        resetButton.style.cursor = 'initial';
        resetButton.style.background = 'hsla(172, 67%, 45%, 0.226)';
        resetButton.removeEventListener('mouseover', resetButtonMouseOver);
        resetButton.removeEventListener('mouseout', resetButtonMouseOut);
    });
}

function resetButtonMouseOver() {
    resetButton.style.background = 'hsl(172, 88%, 74%)';
}

function resetButtonMouseOut() {
    resetButton.style.background = 'hsl(172, 67%, 45%)';
}

inputValues();
