let catchValue;
let cont = 0, aux = 0;
const list = [];

function myFunction(value) {

    if(cont == 0) {
        catchValue = value.innerHTML;
        value.style.color = "hsl(0, 0%, 100%)";
        value.style.background = "hsl(217, 12%, 63%)";

        list[cont] = value;
        cont++;
    }
    else if(cont != 0 && value.innerHTML == catchValue) {
        value.style.color = "hsl(0, 0%, 100%)";
        value.style.background = "hsl(217, 12%, 63%)";
    }
    else {
        catchValue = value.innerHTML;
        value.style.color = "hsl(0, 0%, 100%)";
        value.style.background = "hsl(217, 12%, 63%)";
        
        list[cont] = value;
        
        aux = cont - 1;
        list[aux].style.color = "hsl(217, 12%, 63%)";
        list[aux].style.background = "hsl(213, 20%, 22%)";
        
        cont++;
    }
}

function submit() {

    while(catchValue == undefined || catchValue == null) {
        alert("You must select a value");
        myFunction();
    }

    document.getElementById("normal-section").style.display = "none";

    document.getElementById("thanks-section").style.display = "flex";

    document.getElementById("number-selected").innerHTML = catchValue;
}