// select modal-btn,modal-overlay,close-btn
const modalButton = document.querySelector(".modal-btn");
const modalOverlay = document.querySelector(".modal-overlay");
const modalCloseButton = document.querySelector(".close-btn");
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
modalButton.addEventListener("click", function () {
  modalOverlay.classList.add("open-modal");
});
modalCloseButton.addEventListener("click", function () {
  modalOverlay.classList.remove("open-modal");
});
// when user clicks close-btn remove .open-modal from modal-overlay
