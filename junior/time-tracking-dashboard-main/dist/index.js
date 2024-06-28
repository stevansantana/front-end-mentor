"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield fetch('data.json');
            const response = yield data.json();
            manipulateData(response);
        }
        catch (error) {
            alert('Erro na captura dos dados');
        }
    });
}
function manipulateData(data) {
    const buttons = document.getElementsByTagName('span');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", () => {
            for (let i = 0; i < buttons.length; i++) {
                if (buttons[i].style.color === 'white') {
                    buttons[i].style.color = '';
                }
            }
            buttons[i].style.color = 'white';
            const currentTime = document.getElementsByClassName('current-time');
            const previousTime = document.getElementsByClassName('previous-time');
            const title = document.getElementsByClassName("title");
            switch (buttons[i].textContent) {
                case 'Daily':
                    timeChosen(data, 'daily');
                    break;
                case 'Weekly':
                    timeChosen(data, 'weekly');
                    break;
                case 'Monthly':
                    timeChosen(data, 'monthly');
                    break;
            }
        });
    }
}
function timeChosen(data, category) {
    const currentTime = document.getElementsByClassName('current-time');
    const previousTime = document.getElementsByClassName('previous-time');
    const title = document.getElementsByClassName("title");
    for (let i = 0; i < data.length; i++) {
        const dailyCurrent = data[i].timeframes[category].current;
        const dailyPrevious = data[i].timeframes[category].previous;
        title[i].textContent = data[i].title;
        currentTime[i].innerHTML = `${dailyCurrent}hrs`;
        previousTime[i].innerHTML = `Last Week - ${dailyPrevious}hrs`;
    }
}
getData();
