const form = document.getElementById("myForm");
const userName = document.getElementById("input-name");
const cardNumber = document.getElementById("card-number");
const expMonth = document.getElementById("exp-month");
const expYear = document.getElementById("exp-year");
const cvc = document.getElementById("cvc");
const errorMessage = document.getElementsByClassName("message-error");

userName.addEventListener('click', function() {
   userName.style.borderColor = "";
   errorMessage[0].style.display = "none";
});

userName.addEventListener('input', function() {
   const nameFrontCard = document.getElementById('card-front-name');
   nameFrontCard.textContent = userName.value;
});

cardNumber.addEventListener('click', function() {
   cardNumber.style.borderColor = "";
   errorMessage[1].style.display = "none";
});

cardNumber.addEventListener('input', function (e) {
   let value = e.target.value.replace(/\s+/g, ''); 
   let formattedValue = value.match(/.{1,4}/g)?.join(' ') || ''; 
   e.target.value = formattedValue;

   const cardNumberFrontCard = document.getElementById('card-front-number');
   cardNumberFrontCard.textContent = cardNumber.value;
});

expMonth.addEventListener('click', function() {
   expMonth.style.borderColor = "";
   expYear.style.borderColor = "";
   errorMessage[2].style.display = "none";
});

expMonth.addEventListener('input', function() {
   const expMonthCardFront= document.getElementById('card-front-month');
   expMonthCardFront.textContent = expMonth.value;
});

expYear.addEventListener('click', function() {
   expMonth.style.borderColor = "";
   expYear.style.borderColor = "";
   errorMessage[2].style.display = "none";
});

expYear.addEventListener('input', function() {
   const expYearCardFront = document.getElementById('card-front-year');
   expYearCardFront.textContent = expYear.value;
});

cvc.addEventListener('click', function() {
   cvc.style.borderColor = "";
   errorMessage[3].style.display = "none";
});

cvc.addEventListener('input', function() {

   const cvcFrontCard = document.getElementById('card-back-cvc');
   cvcFrontCard.textContent = cvc.value;
});

function validateName(name) {
   let text;

   if(errorMessage[0].textContent != "") {
      errorMessage[0].textContent = "";
   }

   if(name === "") {

      text = document.createTextNode("Can't be blank");
      errorMessage[0].appendChild(text);
      errorMessage[0].style.display = "block";
      return false;

   } else {
      for(let i = 0; i < name.length; i++) {
         const namePattern = /^[A-Za-z\s]+$/;
         if (!namePattern.test(name)) {
            text = document.createTextNode("Wrong format, letters only");
            errorMessage[0].appendChild(text);
            errorMessage[0].style.display = "block";
            return false;
         }
      }
   }
   return true;
}

function validateCardNumber(cardNumber) {
   let text;
   if(errorMessage[1].textContent != "") {
      errorMessage[1].textContent = "";
   }

   if(cardNumber === "") {
      text = document.createTextNode("Can't be blank");
      errorMessage[1].appendChild(text);
      errorMessage[1].style.display = "block";
      return false;

   } else if(cardNumber.length < 19 || cardNumber.length > 19) {
      text = document.createTextNode("Your card number must have 16 digits");
      errorMessage[1].appendChild(text);
      errorMessage[1].style.display = "block";
      return false;

   } else {
      for(let i = 0; i < cardNumber.length; i++) {
         if(isNaN(cardNumber[i])) {
            text = document.createTextNode("Wrong format, numbers only");
            errorMessage[1].appendChild(text);
            errorMessage[1].style.display = "block";
            return false;
         }
      }
   }
   return true;
}

function validateMonthYear(month, year) {
   let text;

   if(errorMessage[2].textContent != "") {
      errorMessage[2].textContent = "";
   }

   if(month === "" && year === "") {
      text = document.createTextNode("Can't be blank");
      errorMessage[2].appendChild(text);
      errorMessage[2].style.display = "block";
      expMonth.style.borderColor = "hsl(0, 100%, 66%)";
      expYear.style.borderColor = "hsl(0, 100%, 66%)";
      return false;

   } else if(month === "") {
      text = document.createTextNode("Can't be blank");
      errorMessage[2].appendChild(text);
      errorMessage[2].style.display = "block";
      expMonth.style.borderColor = "hsl(0, 100%, 66%)";
      return false;

   } else if(year === "") {
      text = document.createTextNode("Can't be blank");
      errorMessage[2].appendChild(text);
      errorMessage[2].style.display = "block";
      expYear.style.borderColor = "hsl(0, 100%, 66%)";
      return false;
   }

   if(isNaN(month)) {
      text = document.createTextNode("Wrong format, numbers only");
      errorMessage[2].appendChild(text);
      errorMessage[2].style.display = "block";
      expMonth.style.borderColor = "hsl(0, 100%, 66%)";
      return false;
   }
   if(isNaN(year)) {
      text = document.createTextNode("Wrong format, numbers only");
      errorMessage[2].appendChild(text);
      errorMessage[2].style.display = "block";
      expYear.style.borderColor = "hsl(0, 100%, 66%)";
      return false;
   }

   if(month < 1 || month > 12) {
      text = document.createTextNode("Incorrect month");
      errorMessage[2].appendChild(text);
      errorMessage[2].style.display = "block";
      expMonth.style.borderColor = "hsl(0, 100%, 66%)";
      return false;
   }
   return true;
}

function validateCVC(cvc) {
   let text; 

   if(errorMessage[3].textContent != "") {
      errorMessage[3].textContent = "";
   }

   if(cvc === "") {
      text = document.createTextNode("Can't be blank");
      errorMessage[3].appendChild(text);
      errorMessage[3].style.display = "block";
      return false

   } else if(isNaN(cvc)) {
         text = document.createTextNode("Wrong format, numbers only");
         errorMessage[3].appendChild(text);
         errorMessage[3].style.display = "block";
         return false;

      } else if(cvc.length < 3 || cvc.length > 3) {
         text = document.createTextNode("CVC must have 3 digits");
         errorMessage[3].appendChild(text);
         errorMessage[3].style.display = "block";
         return false;
      }
      
   return true;
}

form.addEventListener("submit", function(event) {
   event.preventDefault();
   let isValid = true;  

   if(!validateName(userName.value.trim())) {
      userName.style.borderColor = "hsl(0, 100%, 66%)";
      isValid = false;
   } else {
      userName.style.borderColor = "";
   }

   if(!validateCardNumber(cardNumber.value.trim())) {
      cardNumber.style.borderColor = "hsl(0, 100%, 66%)";
      isValid = false;
   } else {
      cardNumber.style.borderColor = "";
   }

   if(validateMonthYear(expMonth.value.trim(), expYear.value.trim())) {
      expYear.style.borderColor = "";
      expMonth.style.borderColor = "";
   } else {
      isValid = false;
   }

   if(!validateCVC(cvc.value.trim())) {
      cvc.style.borderColor = "hsl(0, 100%, 66%)";
      isValid = false;
   } else {
      cvc.style.borderColor = "";
   }

   if(isValid) {
      localStorage.setItem("name", userName.value);
      localStorage.setItem("card-number", cardNumber.value);
      localStorage.setItem("month", expMonth.value);
      localStorage.setItem("year", expYear.value);
      localStorage.setItem("cvc", cvc.value);

      window.location.href = form.getAttribute("action");
   }
});
