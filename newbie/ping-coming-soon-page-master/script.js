let windowWidth = window.innerWidth;

function validateForm() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?<!\.)$/;
    const email = document.forms["myForm"]["email"];
    const menssageError = document.getElementById("emailMenssageError");
    const emailBorder = document.getElementById("femail");

    if(!(emailPattern.test(email.value))) {
        menssageError.style.display = "block";
        emailBorder.style.borderColor = "hsl(354, 100%, 66%)";

        if(windowWidth > 900) {
            menssageError.style.textAlign = "start";
            menssageError.style.marginLeft = "30px";
        } else {
            menssageError.style.textAlign = "center"
            menssageError.style.marginLeft = "0px";
            menssageError.style.marginBottom = "30px";
        }
        return false;
    } else {
        menssageError.style.display = "none";
        emailBorder.style.borderColor = "";
        return true;
    }
}

function focusEmail(value) {
    value.style.borderColor = "";
    const menssageError = document.getElementById("emailMenssageError");
    menssageError.style.display = "none";
}