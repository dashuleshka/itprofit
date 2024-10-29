import IMask from "imask";
import "../styles/style.scss";

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
  //применяю валидность к полям
  input.addEventListener("input", () => {
    validateField(input);
    if (input.id === "email") {
      isValidEmail(input);
    }
  });
});

const modal = document.getElementById("modal");
const openModalButton = document.getElementById("openModal");
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const overlay = document.createElement("div");

overlay.classList.add("modal-overlay");
document.body.appendChild(overlay);

const disableScroll = () => {
  const scrollBarWidth =
    window.innerWidth - document.documentElement.clientWidth;
  document.body.style.overflow = "hidden";
  document.body.style.marginRight = `${scrollBarWidth}px`;
};

const enableScroll = () => {
  document.body.style.overflow = "";
  document.body.style.marginRight = "";
};

openModalButton.addEventListener("click", () => {
  modal.classList.add("show");
  overlay.classList.add("show");
  disableScroll();
});

yesButton.addEventListener("click", closeModal);
noButton.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

function closeModal() {
  modal.classList.remove("show");
  overlay.classList.remove("show");
  enableScroll();
}
