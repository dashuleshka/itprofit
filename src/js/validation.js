import IMask from "imask";
import { sendFormData } from "./main";

export const nameInput = document.getElementById("name");
export const phoneInput = document.getElementById("phone");
export const buttonForm = document.getElementById("btn");
export const emailInput = document.getElementById("email");
export const letterInput = document.getElementById("letter");
export const emailMessage = document.getElementById("email-error");

const phoneMask = new IMask(phoneInput, {
  mask: "+{375}(00)000-00-00",
});

export const isValidEmail = (input) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!regex.test(input.value)) {
    input.classList.add("failed-input");
    emailMessage.textContent = "Enter a valid e-mail address";
    emailMessage.classList.remove("hidden");
    return false;
  } else {
    input.classList.remove("failed-input");
    emailMessage.classList.add("hidden");
    return true;
  }
};

export const validateField = (input) => {
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
export const validateForm = (event) => {
  event.preventDefault();
  let isValid = true;

  const inputs = [nameInput, emailInput, phoneInput, letterInput];
  inputs.forEach((input) => {
    if (!validateField(input)) {
      isValid = false;
    }
  });

  if (!isValidEmail(emailInput)) {
    isValid = false;
  }

  if (isValid) {
    console.log("The form has been successfully submitted!");
  }

  return isValid;
};
