const imageWidth = window.innerWidth;

if(imageWidth > 1200) {

    const mobileImage = document.getElementById("mobile-image");
    mobileImage.remove();
    
    const desktopImage = document.createElement("img");
    desktopImage.src = "assets/images/image-web-3-desktop.jpg";

    desktopImage.height = 250;

    const containerImage = document.querySelector("main");
    const mainTitle = document.querySelector("h1");

    containerImage.insertBefore(desktopImage, mainTitle);
}

function showSidebar() {
    const sidebar = document.querySelector(".menu-mobile");
    const overlay = document.querySelector('.overlay');

    sidebar.style.display = "flex";
    overlay.style.display = "block";
}

function hideSidebar() {
    const sidebar = document.querySelector(".menu-mobile");
    const overlay = document.querySelector('.overlay');

    sidebar.style.display = "none";
    overlay.style.display = "none";
}