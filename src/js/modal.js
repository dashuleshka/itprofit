export const initializeModal = () => {
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
}
