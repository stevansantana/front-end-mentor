function checkEmail() {
    const email = document.getElementById("email");
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const existingError = document.getElementById("emailError");
    if (existingError) {
        existingError.remove();
    }

    const paragraphError = document.createElement("p");
    paragraphError.id = "emailError";
    const messageError = document.createTextNode("Please provide a valid email");
    paragraphError.appendChild(messageError);
    paragraphError.style.color = "red";
    paragraphError.style.textAlign = "start";

    const containerForm = document.getElementById("form");

    if (!pattern.test(email.value)) {
        email.style.borderColor = "red";
        containerForm.appendChild(paragraphError);
    } else {
        email.style.borderColor = "";
    }
}
