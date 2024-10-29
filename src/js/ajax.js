export const sendFormData = async (formData) => {
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
      // обработка ошибок
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
