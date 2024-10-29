import "../styles/style.scss";

import { initializeModal } from "./modal";

import {
  isValidEmail,
  validateField,
  phoneInput,
  buttonForm,
  emailInput,
  nameInput,
  letterInput,
} from "./validation";
import { sendFormData } from "./ajax";

[nameInput, emailInput, phoneInput, letterInput].forEach((input) => {
  //применяю валидность к полям
  input.addEventListener("input", () => {
    validateField(input);
    if (input.id === "email") {
      isValidEmail(input);
    }
  });
});

const form = document.getElementById("form");
form.addEventListener("submit", async (event) => {
  //cбор данных, отправка на сервер
  event.preventDefault();
  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    message: letterInput.value,
  };

  await sendFormData(formData);
});

initializeModal();
