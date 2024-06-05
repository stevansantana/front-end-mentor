const firstLink = document.querySelector("a");

firstLink.addEventListener("mouseover", () => {
    firstLink.style.color = "hsl(219, 85%, 26%)";
});

firstLink.addEventListener("mouseout", () => {
    firstLink.style.color = "hsl(219, 12%, 42%)";
});

const nameLink = document.querySelectorAll(".name-link");

for(let i = 0; i < nameLink.length; i++) {
    nameLink[i].addEventListener("mouseover", () => {
        nameLink[i].classList.toggle("blue-link");
    })

    nameLink[i].addEventListener("mouseout", () => {
        nameLink[i].classList.toggle("blue-link");
    })
}

const blackLink = document.querySelectorAll(".black-link");

for(let i = 0; i < blackLink.length; i++) {
    blackLink[i].addEventListener("mouseover", () => {
        blackLink[i].classList.toggle("blue-link");
    })

    blackLink[i].addEventListener("mouseout", () => {
        blackLink[i].classList.toggle("blue-link");
    })   
}

const message = document.getElementById("message");

message.addEventListener("mouseover", () => {
    message.style.background = "hsl(205, 33%, 90%)";
    message.style.border = "none";
})

message.addEventListener("mouseout", () => {
    message.style.background = "";
    message.style.border = "";
})

