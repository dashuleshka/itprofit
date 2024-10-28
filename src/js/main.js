import IMask from "imask";
import "../styles/styles.css";

const phoneInput = document.getElementById("phone");
const buttonForm = document.getElementById("btn");
const emailInput = document.getElementById("email");
// const messageInput = document.getElementById("letter");
const errorMessage = document.getElementById("email-error");
const phoneMask = new IMask(phoneInput, {
  mask: "+{375}(00)000-00-00",
});

// buttonForm.disabled = true;
//   phoneInput.addEventListener("input", () => {
//     buttonForm.disabled = !(phoneMask.masked.isComplete);
//   });

// VALIDATION
const invalidEmail = (input) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!regex.test(input.value)) {
    input.classList.add("failed-input");
    errorMessage.textContent = "Enter a valid e-mail address";
    errorMessage.classList.remove("hidden");
  } else {
    input.classList.remove("failed-input");
    errorMessage.classList.add("hidden");
  }
};

const validateField = (input) => {
  const errorMessage = document.getElementById(`${input.id}-error`);
  if (!input.value.trim()) {
    input.classList.add("failed-input");
    errorMessage.textContent = "*This field is required.";
    errorMessage.classList.remove("hidden");
    return false;
  } else {
    input.classList.remove("failed-input");
    errorMessage.classList.add("hidden"); // Скрываем сообщение
    return true;
  }
};

//// Function for checking all form fields
const validateForm = (event) => {
  event.preventDefault();
  let isValid = true;
  const inputs = [
    document.getElementById("name"),
    document.getElementById("email"),
    document.getElementById("phone"),
    document.getElementById("letter"),
  ];
  inputs.forEach((input) => {
    if (!validateField(input)) {
      isValid = false; // If at least one field is not valid
    }
  });

  if (isValid) {
    console.log("The form has been successfully submitted!");
  }
};

// Пример использования:
emailInput.addEventListener("input", () => invalidEmail(emailInput));
buttonForm.addEventListener('click', validateForm);