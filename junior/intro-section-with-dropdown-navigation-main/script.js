let widthScreen = window.innerWidth;
if (widthScreen > 992) {
    const imageMobile = document.getElementById("image-hero-mobile");
    imageMobile.remove();
    
    const imageDesktop = document.createElement("img");
    imageDesktop.src = "images/image-hero-desktop.png";
    imageDesktop.height = 600
    imageDesktop.width = 450

    const imageContainer = document.getElementById("image-container");
    imageContainer.appendChild(imageDesktop);
}

const menu = document.querySelector("nav");
const menuBurguer = document.getElementById("icon-menu");
const closeButton = document.getElementById("icon-close-menu");
const menuShadow = document.getElementById("menu-mobile-shadow");
const collLinks = document.getElementsByClassName("link-arrow");
const iconArrowDown = document.getElementsByClassName("icon-arrow-down");
const iconArrowUp = document.getElementsByClassName("icon-arrow-up");

menuBurguer.addEventListener("click", () => {

    if(menu.style.display === "block") {
        menu.style.display = "none";
        menuShadow.style.display = "none";
    } else {
        menu.style.display = "block";
        menuShadow.style.display = "block";
    }
});

closeButton.addEventListener("click", () => {
    
    if(menu.style.display === "block") {
        menu.style.display = "none";
        menuShadow.style.display = "none";
    } else {
        menu.style.display = "block";
        menuShadow.style.display = "block";
    }
});

for(let i = 0; i < collLinks.length; i++) {
    collLinks[i].addEventListener("click", function() {
        const content = document.getElementsByClassName("content");

        if(content[i].style.display === "block") {
            content[i].style.display = "none";
            iconArrowDown[i].style.display = "block";
            iconArrowUp[i].style.display = "none";
            
        } else {
            content[i].style.display = "block";
            iconArrowDown[i].style.display = "none";
            iconArrowUp[i].style.display = "block";  
        }
    });
}

