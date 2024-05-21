let screenWidth = window.innerWidth;

function checkName() {
    const verifyParagraph = document.getElementsByClassName("menssage-error");

    if(verifyParagraph.length > 0) {
        const pattern = /First Name/;
        for(let i = 0; i < verifyParagraph.length; i++) {
            if(pattern.test(verifyParagraph[i].textContent)) {
                verifyParagraph[i].remove();
                break;
            }
        }
    }
    const paragraph = document.createElement("p");
    const textParagraph = document.createTextNode("First Name cannot be empty");
    paragraph.appendChild(textParagraph);
    paragraph.className = "menssage-error";

    paragraph.style.color = "hsl(0, 100%, 74%)";
    paragraph.style.textAlign = "end";
    paragraph.style.fontStyle = "italic";
    paragraph.style.fontWeight = "bold";
    paragraph.style.margin = "5px";
    paragraph.style.marginBottom = "0px";

    const name = document.getElementById("fname");
    const containerInputImg = document.getElementsByClassName("container-input-img");
    const iconError = document.getElementsByClassName("icon-error");

    if(name.value === "") {
        containerInputImg[0].insertBefore(paragraph, iconError[0]);
        name.style.borderColor = "hsl(0, 100%, 74%)";
        name.style.borderWidth = "2px";
        name.placeholder = "";
        iconError[0].style.visibility = "visible";

        if(screenWidth < 992) {
            iconError[0].style.top = "33%";
        } else {
            iconError[0].style.top = "38%";
        }
    } else {
        name.style.borderColor = "";
        name.style.borderWidth = "";
        iconError[0].style.visibility = "hidden";
    }
}

function checkLastName() {
    const verifyParagraph = document.getElementsByClassName("menssage-error");

    if(verifyParagraph.length > 0) {
        const pattern = /Last Name/;
        for(let i = 0; i < verifyParagraph.length; i++) {
            if(pattern.test(verifyParagraph[i].textContent)) {
                verifyParagraph[i].remove();
                break;
            }
        }
    }
    const paragraph = document.createElement("p");
    const textParagraph = document.createTextNode("Last Name cannot be empty");
    paragraph.appendChild(textParagraph);
    paragraph.className = "menssage-error";

    paragraph.style.color = "hsl(0, 100%, 74%)";
    paragraph.style.textAlign = "end";
    paragraph.style.fontStyle = "italic";
    paragraph.style.fontWeight = "bold";
    paragraph.style.margin = "5px";
    paragraph.style.marginBottom = "0px";

    const lastName = document.getElementById("fLastName");
    const containerInputImg = document.getElementsByClassName("container-input-img");
    const iconError = document.getElementsByClassName("icon-error");

    if(lastName.value === "") {
        containerInputImg[1].insertBefore(paragraph, iconError[1]);
        lastName.style.borderColor = "hsl(0, 100%, 74%)";
        lastName.style.borderWidth = "2px";
        lastName.placeholder = "";
        iconError[1].style.visibility = "visible";
        if(screenWidth < 992) {
            iconError[1].style.top = "33%";
        } else {
            iconError[1].style.top = "38%";
        } 
    } else {
        lastName.style.borderColor = "";
        lastName.style.borderWidth = "";
        iconError[1].style.visibility = "hidden";
    }
}

function checkEmail() {
    const verifyParagraph = document.getElementsByClassName("menssage-error");

    if(verifyParagraph.length > 0) {
        const pattern = /email/;
        for(let i = 0; i < verifyParagraph.length; i++) {
            if(pattern.test(verifyParagraph[i].textContent)) {
                verifyParagraph[i].remove();
                break;
            }
        }
    }
    const paragraph = document.createElement("p");
    const textParagraph = document.createTextNode("Looks like this is not an email");
    paragraph.appendChild(textParagraph);
    paragraph.className = "menssage-error";

    paragraph.style.color = "hsl(0, 100%, 74%)";
    paragraph.style.textAlign = "end";
    paragraph.style.fontStyle = "italic";
    paragraph.style.fontWeight = "bold";
    paragraph.style.margin = "5px";
    paragraph.style.marginBottom = "0px";

    const email = document.getElementById("femail");
    const containerInputImg = document.getElementsByClassName("container-input-img");
    const iconError = document.getElementsByClassName("icon-error");

    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!pattern.test(email.value)) {
        containerInputImg[2].insertBefore(paragraph, iconError[2]);
        email.style.borderColor = "hsl(0, 100%, 74%)";
        email.style.borderWidth = "2px";
        email.placeholder = "";
        email.style.color = "hsl(0, 100%, 74%)";
        iconError[2].style.visibility = "visible";
        if(screenWidth < 992) {
            iconError[2].style.top = "33%";
        } else {
            iconError[2].style.top = "38%";
        }   
    } else {
        email.style.borderColor = "";
        email.style.borderWidth = "";
        email.style.color = "hsl(249, 10%, 26%)";
        iconError[2].style.visibility = "hidden";
    }
}

function checkPassword() {
    const verifyParagraph = document.getElementsByClassName("menssage-error");

    if(verifyParagraph.length > 0) {
        const pattern = /Password/;
        for(let i = 0; i < verifyParagraph.length; i++) {
            if(pattern.test(verifyParagraph[i].textContent)) {
                verifyParagraph[i].remove();
                break;
            }
        }
    }
    const paragraph = document.createElement("p");
    const textParagraph = document.createTextNode("Password cannot be empty");
    paragraph.appendChild(textParagraph);
    paragraph.className = "menssage-error";

    paragraph.style.color = "hsl(0, 100%, 74%)";
    paragraph.style.textAlign = "end";
    paragraph.style.fontStyle = "italic";
    paragraph.style.fontWeight = "bold";
    paragraph.style.margin = "5px";
    paragraph.style.marginBottom = "0px";

    const password = document.getElementById("fpassword");
    const containerInputImg = document.getElementsByClassName("container-input-img");
    const iconError = document.getElementsByClassName("icon-error");

    if(password.value === "") {
        containerInputImg[3].insertBefore(paragraph, iconError[3]);
        password.style.borderColor = "hsl(0, 100%, 74%)";
        password.style.borderWidth = "2px";
        password.placeholder = "";
        iconError[3].style.visibility = "visible";
        if(screenWidth < 992) {
            iconError[3].style.top = "33%";
        } else {
            iconError[3].style.top = "38%";
        }  
    } else {
        password.style.borderColor = "";
        password.style.borderWidth = "";
        iconError[3].style.visibility = "hidden";
    }
}