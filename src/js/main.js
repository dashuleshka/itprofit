import IMask from "imask";
import "../styles/styles.css";
import {
  isValidEmail,
  validateForm,
  validateField,
  phoneInput,
  buttonForm,
  emailInput,
  nameInput,
  letterInput,
} from "./validation";

const phoneMask = new IMask(phoneInput, {
  mask: "+{375}(00)000-00-00",
});

const sendFormData = async (formData) => {
  try {
    const response = await fetch("http://localhost:9090/api/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.ok) {
      alert(result.msg);
    } else {
      // Обработка ошибок
      if (result.fields) {
        Object.keys(result.fields).forEach((inputName) => {
          const input = document.querySelector(`[name="${inputName}"]`);
          const errorMessage = document.getElementById(`${inputName}-error`);
          input.classList.add("failed-input");
          errorMessage.textContent = result.fields[inputName];
          errorMessage.classList.remove("hidden");
        });
      } else {
        console.error("Unexpected error format:", result);
      }
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

buttonForm.addEventListener("click", async (event) => {
  event.preventDefault();
  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    message: letterInput.value,
  };
  await sendFormData(formData); // Запрос будет отправлен даже при наличии ошибок
});

[nameInput, emailInput, phoneInput, letterInput].forEach((input) => {
  input.addEventListener("input", () => {
    validateField(input); // Проверяем поле на валидность при вводе
    if (input.id === "email") {
      isValidEmail(input); // Также проверяем email
    }
  });
});