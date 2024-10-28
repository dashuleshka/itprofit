// export const validateEmail = (email) => {
//   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return regex.test(email);
// };

// export function validateField(input, condition, errorMessage) {
//   const errorElement = input.nextElementSibling;
//   if (!condition) {
//     input.style.borderColor = "red";
//     if (!errorElement) {
//       const errorText = document.createElement("div");
//       errorText.style.color = "red";
//       errorText.textContent = errorMessage;
//       input.parentNode.appendChild(errorText);
//     }
//   } else {
//     input.style.borderColor = "";
//     if (errorElement) {
//       errorElement.remove();
//     }
//   }
// }

// export function validateForm() {
//   const isNameValid = nameInput.value.trim() !== "";
//   validateField(nameInput, isNameValid, "Name is required.");

//   const isEmailValid = validateEmail(emailInput.value);
//   validateField(emailInput, isEmailValid, "Invalid email address.");

//   const isPhoneValid = phoneMask.masked.isComplete;
//   validateField(phoneInput, isPhoneValid, "Phone number is incomplete.");

//   const isMessageValid = messageInput.value.trim() !== "";
//   validateField(messageInput, isMessageValid, "Message is required.");

//   buttonForm.disabled = !(
//     isNameValid &&
//     isEmailValid &&
//     isPhoneValid &&
//     isMessageValid
//   );
// }

// [nameInput, emailInput, phoneInput, messageInput].forEach((input) => {
//   input.addEventListener("input", validateForm);
// });

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   validateForm();
//   if (!buttonForm.disabled) {
//     // Form can be submitted
//     console.log("Form submitted");
//   }
// });
