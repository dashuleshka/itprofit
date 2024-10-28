import IMask from "imask";
import "../styles/styles.css";

const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const buttonForm = document.getElementById("btn");
const emailInput = document.getElementById("email");
const letterInput = document.getElementById("letter");
const errorMessage = document.getElementById("email-error");
const phoneMask = new IMask(phoneInput, {
  mask: "+{375}(00)000-00-00",
  mask: "+{7}(000) 000-00-00",
});

// VALIDATION
const isValidEmail = (input) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!regex.test(input.value)) {
    input.classList.add("failed-input");
    errorMessage.textContent = "Enter a valid e-mail address";
    errorMessage.classList.remove("hidden");
    return false;
  } else {
    input.classList.remove("failed-input");
    errorMessage.classList.add("hidden");
    return true;
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
    errorMessage.classList.add("hidden");
    return true;
  }
};

// Function for checking all form fields
const validateForm = (event) => {
  event.preventDefault();
  let isValid = true;

  const inputs = [nameInput, emailInput, phoneInput, letterInput];
  inputs.forEach((input) => {
    if (!validateField(input)) {
      isValid = false;
    }
  });

  // Проверяем email отдельно
  if (!isValidEmail(emailInput)) {
    isValid = false; // Если email некорректен
  }

  isValid
    ? console.log("The form has been successfully submitted!")
    : console.log("Oops, there was an error submitting the form");
};

emailInput.addEventListener("input", () => isValidEmail(emailInput));
buttonForm.addEventListener("click", validateForm);
