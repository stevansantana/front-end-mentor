const button = document.getElementById("button");
const adviceNumber = document.querySelector("h1");
const adviceText = document.querySelector("p");

async function fetchAdvice() {
    const url = 'https://api.adviceslip.com/advice';
    const timestamp = new Date().getTime();
    const requestUrl = `${url}?t=${timestamp}`;

    try {
        const response = await fetch(requestUrl);
        const data = await response.json();
        adviceNumber.innerHTML = `ADVICE #${data.slip.id}`;
        displayTextWithDelay(data.slip.advice);

    } catch(e) {
        alert("Error in catching an Advice!");
    }
}

function displayTextWithDelay(text) {
    adviceText.innerHTML = "";
    let cont = 0;
    
    function showNextLetter() {
        if (cont < text.length) {
            adviceText.innerHTML += text[cont];
            cont++;
            setTimeout(showNextLetter, 50);
        }
    }
    showNextLetter();
}

button.addEventListener("click", function() {
    fetchAdvice();
});