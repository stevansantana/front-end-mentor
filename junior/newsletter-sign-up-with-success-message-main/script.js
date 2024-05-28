let screenWidth = window.innerWidth;
let mobileImage = document.getElementById("mobile-image");

if(screenWidth > 992) {

    // Remove the mobile image
    mobileImage.style.display = "none";

    // Create the desktop image
    let desktopImage = document.createElement("img");
    desktopImage.src = "assets/images/illustration-sign-up-desktop.svg";
    desktopImage.height = 500;
    desktopImage.width = 500;

    // Put the desktop image in the application
    let imageContainer = document.getElementById("image-container");
    imageContainer.appendChild(desktopImage);
}

function typeEmail() {
    const messageError = document.getElementById("error-message");
    messageError.style.display = "none";

    const email = document.getElementById("email");
    email.style.borderColor = "";
    email.style.background = "";
    email.style.color = "";
}

function validateForm() {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const email = document.getElementById("email");

    if(!(pattern.test(email.value))) {
        const messageError = document.getElementById("error-message");

        messageError.style.display = "initial";
        email.style.borderColor = "hsl(4, 100%, 67%)";
        email.style.background = "rgba(255, 192, 203, 0.795)";
        email.style.color = "hsl(4, 100%, 67%)";

        return false;
    } else {
        return true;
    }
}