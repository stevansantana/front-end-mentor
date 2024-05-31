function inputDate() {

    const day = document.getElementById("fDay");
    const month = document.getElementById("fMonth");
    const year = document.getElementById("fYear");

    day.style.borderColor = "";
    month.style.borderColor = "";
    year.style.borderColor = "";

    const label = document.getElementsByTagName("label"); 
    for(let i = 0; i < label.length; i++) {
        label[i].style.color = "";
    }
    
    const messageError = document.getElementsByClassName("message-error");
    for(let i = 0; i < messageError.length; i++) {
        messageError[i].textContent = "";
    }  
}
