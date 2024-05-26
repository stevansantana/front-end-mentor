const radioContainer = document.getElementsByClassName("radio-container");

for(let i = 0; i < radioContainer.length; i++) {
    radioContainer[i].addEventListener("click", function() {
        this.focus();
    })
}

const errorMessages = document.getElementsByClassName("message-error");

function typeName() {
    let name = document.getElementById("fname");
    name.style.borderColor = "hsl(169, 84%, 41%)";
    errorMessages[0].style.display = "none"; 
}

function typeLastName() {
    let lastName = document.getElementById("fLastName");
    lastName.style.borderColor = "hsl(169, 84%, 41%)";
    errorMessages[1].style.display = "none"; 
}

function typeEmail() {
    let email = document.getElementById("femail");
    email.style.borderColor = "hsl(169, 84%, 41%)";
    errorMessages[2].style.display = "none";
}

function typeRadio() {
    errorMessages[3].style.display = "none";   
}

function typeMessage() {
    let message = document.getElementById("fmessage");
    message.style.borderColor = "hsl(169, 84%, 41%)";
    errorMessages[4].style.display = "none";
}

function typeCheckbox() {
    errorMessages[5].style.display = "none";
}

function validateForm() {

    let checkInputs = true;

    // Check the name input
    let name = document.getElementById("fname");
    if(name.value === "") {
        name.style.borderColor = "hsl(0, 66%, 56%)";
        errorMessages[0].style.display = "block";   
        window.scrollTo(0, 0);

        checkInputs = false;
    }

    // Check the last name input
    let lastName = document.getElementById("fLastName");
    if(lastName.value === "") {
        lastName.style.borderColor = "hsl(0, 66%, 56%)";
        errorMessages[1].style.display = "block";
        window.scrollTo(0, 0);

        checkInputs = false;
    }

    // Check the email input
    let email = document.getElementById("femail");
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?<!\.)$/;
    if(!(emailPattern.test(email.value))) {
        email.style.borderColor = "hsl(0, 66%, 56%)";
        errorMessages[2].style.display = "block";
        window.scrollTo(0, 0);

        checkInputs = false;
    }

    // Check the radio input
    const radios = document.getElementsByName("general-support");
    let selectedOption = null;

    for(let i = 0; i < radios.length; i++) {
        if(radios[i].checked) {
            selectedOption = radios[i].value;
            break;
        }
    }
    if(selectedOption === null) {
        errorMessages[3].style.display = "block";
        window.scrollTo(0, 0);

        checkInputs = false;
    }

    // Check the message input
    let message = document.getElementById("fmessage");
    if(message.value === "") {
        message.style.borderColor = "hsl(0, 66%, 56%)";
        errorMessages[4].style.display = "block";

        checkInputs = false;
    }
    
    // Check checkbox input
    let checkbox = document.getElementById("fconsent");
    if(!(checkbox.checked)) {
        errorMessages[5].style.display = "block";

        checkInputs = false;
    }
    
    if (checkInputs) {
        let messageSuccess = document.getElementById("message-success");
        messageSuccess.style.display = "block";

        setTimeout(function() {
            messageSuccess.style.display = "none";
            document.getElementById("myForm").submit(); // Submit the form
        }, 2000);

        name.value = "";
        lastName.value = "";
        email.value = "";
        for (let i = 0; i < radios.length; i++) {
            radios[i].checked = false;
        }
        message.value = "";
        checkbox.checked = false;

        window.scrollTo(0, 0);

        return false; // Prevent the form from submitting immediately
    } else {
        return false; // Prevent the form from submitting if validation fails
    }
}