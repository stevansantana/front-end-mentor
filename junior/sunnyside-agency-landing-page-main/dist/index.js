"use strict";
const hamburguerIcon = document.getElementById('logo-hamburguer');
const yellowLink = document.getElementById('yellow-link');
const redLink = document.getElementById('red-link');
hamburguerIcon === null || hamburguerIcon === void 0 ? void 0 : hamburguerIcon.addEventListener('click', () => {
    const menu = document.querySelector('nav');
    const arrow = document.getElementById('arrow-container');
    if (menu) {
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
            arrow.style.display = 'block';
            hamburguerIcon.style.filter = '';
        }
        else {
            menu.style.display = 'block';
            arrow.style.display = 'none';
            hamburguerIcon.style.filter = 'invert(72%) sepia(0%) saturate(7466%) hue-rotate(288deg) brightness(96%) contrast(86%)';
        }
    }
});
yellowLink === null || yellowLink === void 0 ? void 0 : yellowLink.addEventListener('mouseover', () => {
    const yellowLinkBar = document.getElementById('yellow-link-bar');
    if (yellowLinkBar) {
        yellowLinkBar.style.background = 'hsl(51, 100%, 49%)';
    }
});
yellowLink === null || yellowLink === void 0 ? void 0 : yellowLink.addEventListener('mouseout', () => {
    const yellowLinkBar = document.getElementById('yellow-link-bar');
    if (yellowLinkBar) {
        yellowLinkBar.style.background = 'hsla(51, 100%, 49%, 0.308)';
    }
});
redLink === null || redLink === void 0 ? void 0 : redLink.addEventListener('mouseover', () => {
    const redLinkBar = document.getElementById('red-link-bar');
    if (redLinkBar) {
        redLinkBar.style.background = 'hsl(7, 99%, 70%)';
    }
});
redLink === null || redLink === void 0 ? void 0 : redLink.addEventListener('mouseout', () => {
    const redLinkBar = document.getElementById('red-link-bar');
    if (redLinkBar) {
        redLinkBar.style.background = 'hsla(7, 99%, 70%, 0.322)';
    }
});
