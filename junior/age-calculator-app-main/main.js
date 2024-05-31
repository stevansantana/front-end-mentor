const myForm = document.querySelector("form");

myForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const date = new Date();
    const day = document.getElementById("fDay");
    const month = document.getElementById("fMonth");
    const year = document.getElementById("fYear");

    const dayValue = parseInt(day.value); 
    const monthValue = parseInt(month.value); 
    const yearValue = parseInt(year.value); 

    const months30 = [4, 6, 9, 11];
    const months31 = [1, 3, 5, 7, 8, 10, 12]; 

    const outputYear = document.getElementById("outputYear");
    const outputMonth = document.getElementById("outputMonth");
    const outputDay = document.getElementById("outputDay");

    let flagError = false;
    let flag = false; 
    if(dayValue > 0 && dayValue <= 31) { 
        if(dayValue == 31) {
            if(months31.includes(monthValue)) {
                flag = true;
            }
        } else if(dayValue == 30) {
            if(months30.includes(monthValue) || months31.includes(monthValue)) {
                flag = true;
            }
        } else if(dayValue == 29) {
            if(monthValue == 2) {
                if((yearValue % 4 == 0 && yearValue % 100 != 0) || yearValue % 400 == 0) {
                    flag = true;
                }
            } else {
                flag = true;
            }
        } else {
            flag = true;
        }
    }
    if(!flag) {
        
        if(year.value > date.getFullYear()) {

            const text = document.createTextNode("Must be in the past");
            const messageError = document.getElementsByClassName("message-error");

            if(messageError[2].textContent != "") {
                messageError[2].textContent = "";
            }

            messageError[2].appendChild(text);
            messageError[2].style.display = "block";

            day.style.borderColor = "hsl(0, 100%, 67%)";
            month.style.borderColor = "hsl(0, 100%, 67%)";
            year.style.borderColor = "hsl(0, 100%, 67%)";

            const label = document.getElementsByTagName("label");
            for(let i = 0; i < label.length; i++) {
                label[i].style.color = "hsl(0, 100%, 67%)";
            }

            flagError = true;
        } else {
            const text = document.createTextNode("Must be a valid date");
            const messageError = document.getElementsByClassName("message-error");

            if(messageError[0].textContent != "") {
                messageError[0].textContent = "";
            }

            messageError[0].appendChild(text);
            messageError[0].style.display = "block";

            day.style.borderColor = "hsl(0, 100%, 67%)";
            month.style.borderColor = "hsl(0, 100%, 67%)";
            year.style.borderColor = "hsl(0, 100%, 67%)";

            const label = document.getElementsByTagName("label");
            for(let i = 0; i < label.length; i++) {
                label[i].style.color = "hsl(0, 100%, 67%)";
            }
            flagError = true;
        }        
    }
    if(day.value == "") {
        const text = document.createTextNode("This field is required");
        const messageError = document.getElementsByClassName("message-error");

        if(messageError[0].textContent != "") {
            messageError[0].textContent = "";
        }

        messageError[0].appendChild(text);
        messageError[0].style.display = "block";

        day.style.borderColor = "hsl(0, 100%, 67%)";

        const label = document.getElementsByTagName("label");
        label[0].style.color = "hsl(0, 100%, 67%)";

    } else if(day.value < 1 || day.value > 31) {

        const text = document.createTextNode("Must be a valid day");

        const messageError = document.getElementsByClassName("message-error");

        if(messageError[0].textContent != "") {
            messageError[0].textContent = "";
        }

        messageError[0].appendChild(text);
        messageError[0].style.display = "block";

        day.style.borderColor = "hsl(0, 100%, 67%)";

        const label = document.getElementsByTagName("label");
        label[0].style.color = "hsl(0, 100%, 67%)";

        flagError = true;
    }

    if(month.value == "") {
        const text = document.createTextNode("This field is required");
        const messageError = document.getElementsByClassName("message-error");

        if(messageError[1].textContent != "") {
            messageError[1].textContent = "";
        }

        messageError[1].appendChild(text);
        messageError[1].style.display = "block";

        month.style.borderColor = "hsl(0, 100%, 67%)";

        const label = document.getElementsByTagName("label");
        label[1].style.color = "hsl(0, 100%, 67%)";

    } else if(month.value < 1 || month.value > 12) {
        
        const text = document.createTextNode("Must be a valid month");

        const messageError = document.getElementsByClassName("message-error");

        if(messageError[1].textContent != "") {
            messageError[1].textContent = "";
        }

        messageError[1].appendChild(text);
        messageError[1].style.display = "block";

        month.style.borderColor = "hsl(0, 100%, 67%)";

        const label = document.getElementsByTagName("label");
        label[1].style.color = "hsl(0, 100%, 67%)";

        flagError = true;
    }

    if(year.value == "") {
        const text = document.createTextNode("This field is required");
        const messageError = document.getElementsByClassName("message-error");

        if(messageError[2].textContent != "") {
            messageError[2].textContent = "";
        }

        messageError[2].appendChild(text);
        messageError[2].style.display = "block";

        year.style.borderColor = "hsl(0, 100%, 67%)";

        const label = document.getElementsByTagName("label");
        label[2].style.color = "hsl(0, 100%, 67%)";

    } else if(year.value > date.getFullYear()) {
        const text = document.createTextNode("Must be in the past");

        const messageError = document.getElementsByClassName("message-error");

        if(messageError[2].textContent != "") {
            messageError[2].textContent = "";
        }

        messageError[2].appendChild(text);
        messageError[2].style.display = "block";

        year.style.borderColor = "hsl(0, 100%, 67%)";

        const label = document.getElementsByTagName("label");
        label[2].style.color = "hsl(0, 100%, 67%)";

        flagError = true;

    } else if(year.value < 0) {
        const text = document.createTextNode("Invalid Year");
        const messageError = document.getElementsByClassName("message-error");

        if (messageError[0].textContent != "") {
            messageError[0].textContent = "";
        }

        if (messageError[2].textContent != "") {
            messageError[2].textContent = "";
        }

        messageError[2].appendChild(text);
        messageError[2].style.display = "block";

        day.style.borderColor = "hsl(0, 100%, 67%)";
        month.style.borderColor = "hsl(0, 100%, 67%)";
        year.style.borderColor = "hsl(0, 100%, 67%)";

        const label = document.getElementsByTagName("label");
        for (let i = 0; i < label.length; i++) {
            label[i].style.color = "hsl(0, 100%, 67%)";
        } 

        flagError = true;
    }

    let dayTime = date.getDate() - dayValue;
    let monthTime = (date.getMonth() + 1) - monthValue;
    let yearTime = date.getFullYear() - yearValue;

    if(yearTime == 0) {

        if(monthTime == 0) {

            if(dayTime == 0) {

                const text = document.createTextNode("Must be in the past");
                const messageError = document.getElementsByClassName("message-error");
                if(messageError[0].textContent != "") {
                    messageError[0].textContent = "";
                }

                messageError[0].appendChild(text);
                messageError[0].style.display = "block";

                day.style.borderColor = "hsl(0, 100%, 67%)";
                month.style.borderColor = "hsl(0, 100%, 67%)";
                year.style.borderColor = "hsl(0, 100%, 67%)";

                const label = document.getElementsByTagName("label");
                for(let i = 0; i < label.length; i++) {
                    label[i].style.color = "hsl(0, 100%, 67%)";
                }
                
                flagError = true;

            } else if (dayTime < 0) {

                const text = document.createTextNode("Must be in the past");
                const messageError = document.getElementsByClassName("message-error");
                if(messageError[0].textContent != "") {
                    messageError[0].textContent = "";
                }

                messageError[0].appendChild(text);
                messageError[0].style.display = "block";

                day.style.borderColor = "hsl(0, 100%, 67%)";
                month.style.borderColor = "hsl(0, 100%, 67%)";
                year.style.borderColor = "hsl(0, 100%, 67%)";

                const label = document.getElementsByTagName("label");
                for(let i = 0; i < label.length; i++) {
                    label[i].style.color = "hsl(0, 100%, 67%)";
                }   
                
                flagError = true;

            }
        } else if(monthTime > 0) {

            if (dayTime < 0) {
                monthTime--;

                if(months30.includes(monthValue)) {
                    dayTime = 30 - (-dayTime);
                }
                if(months31.includes(monthValue)) {
                    dayTime = 31 - (-dayTime);
                }
            }            

        } else if(monthTime < 0) {

            if(dayTime == 0) {

                const text = document.createTextNode("Must be in the past");
                const messageError = document.getElementsByClassName("message-error");
                if(messageError[0].textContent != "") {
                    messageError[0].textContent = "";
                }

                messageError[0].appendChild(text);
                messageError[0].style.display = "block";

                day.style.borderColor = "hsl(0, 100%, 67%)";
                month.style.borderColor = "hsl(0, 100%, 67%)";
                year.style.borderColor = "hsl(0, 100%, 67%)";

                const label = document.getElementsByTagName("label");
                for(let i = 0; i < label.length; i++) {
                    label[i].style.color = "hsl(0, 100%, 67%)";
                }                

                flagError = true;

            } else if (dayTime > 0) {
                const text = document.createTextNode("Must be in the past");
                const messageError = document.getElementsByClassName("message-error");
                if(messageError[0].textContent != "") {
                    messageError[0].textContent = "";
                }

                messageError[0].appendChild(text);
                messageError[0].style.display = "block";

                day.style.borderColor = "hsl(0, 100%, 67%)";
                month.style.borderColor = "hsl(0, 100%, 67%)";
                year.style.borderColor = "hsl(0, 100%, 67%)";

                const label = document.getElementsByTagName("label");
                for(let i = 0; i < label.length; i++) {
                    label[i].style.color = "hsl(0, 100%, 67%)";
                }                
                flagError = true;

            } else if (dayTime < 0) {

                const text = document.createTextNode("Must be in the past");
                const messageError = document.getElementsByClassName("message-error");
                if(messageError[0].textContent != "") {
                    messageError[0].textContent = "";
                }

                messageError[0].appendChild(text);
                messageError[0].style.display = "block";

                day.style.borderColor = "hsl(0, 100%, 67%)";
                month.style.borderColor = "hsl(0, 100%, 67%)";
                year.style.borderColor = "hsl(0, 100%, 67%)";

                const label = document.getElementsByTagName("label");
                for(let i = 0; i < label.length; i++) {
                    label[i].style.color = "hsl(0, 100%, 67%)";
                }
                flagError = true;
            }
        }

    } else {

        if(monthTime == 0) {

            if (dayTime < 0) {

                yearTime--;
                monthTime = 11;
            
                if(months30.includes(monthValue)) {
                    dayTime = 30 - (-dayTime);
                }
                if(months31.includes(monthValue)) {
                    dayTime = 31 - (-dayTime);
                }
            }

        } else if(monthTime > 0) {

            if (dayTime < 0) {

                monthTime--;
                if(months30.includes(monthValue)) {
                    dayTime = 30 - (-dayTime);
                }
                if(months31.includes(monthValue)) {
                    dayTime = 31 - (-dayTime);
                }
            }            

        } else if(monthTime < 0) {

            if(dayTime >= 0) {
                yearTime--;
                monthTime += 12;

            } else {
                yearTime--;
                monthTime += 12;

                if(months30.includes(monthValue)) {
                    dayTime = 30 - (-dayTime);
                }
                if(months31.includes(monthValue)) {
                    dayTime = 31 - (-dayTime);
                }
            }
        }
    }

    if(isNaN(yearTime) || flagError) {
        outputYear.textContent = "- -";
    } else {
        outputYear.textContent = "";
        outputYear.appendChild(document.createTextNode(yearTime));
    }
    
    if(isNaN(monthTime) || flagError) {
        outputMonth.textContent = "- -";
    } else {
        outputMonth.textContent = "";
        outputMonth.appendChild(document.createTextNode(monthTime));
    }

    if(isNaN(dayTime) || flagError) {
        outputDay.textContent = "- -";
    } else {
        outputDay.textContent = "";
        outputDay.appendChild(document.createTextNode(dayTime));
    }    
    
    if(dayValue <= 0 || monthValue <= 0 || yearValue < 0) {
        outputYear.textContent = "- -";
        outputMonth.textContent = "- -";
        outputDay.textContent = "- -";
    }
});

