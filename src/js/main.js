import IMask from "imask";
import "../styles/styles.css";
import {
  isValidEmail,
  // validateForm,
  validateField,
  phoneInput,
  buttonForm,
  emailInput,
  nameInput,
  letterInput,
} from "./validation";
import { sendFormData } from "./ajax";

buttonForm.addEventListener("click", async (event) => {
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

[nameInput, emailInput, phoneInput, letterInput].forEach((input) => {
  //применяем валидность к полям
  input.addEventListener("input", () => {
    validateField(input);
    if (input.id === "email") {
      isValidEmail(input);
    }
  });
});