const modal = document.getElementById("modal");
const openModalButton = document.getElementById("openModal");
const closeButton = document.querySelector(".close-button");
const overlay = document.createElement("div");

overlay.classList.add("modal-overlay");

document.body.appendChild(overlay);

openModalButton.addEventListener("click", () => {
  modal.classList.add("show");
  overlay.classList.add("show");
  document.body.style.overflow = "hidden";
});

closeButton.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

function closeModal() {
  modal.classList.remove("show");
  overlay.classList.remove("show");
  document.body.style.overflow = "";
}
