let overlay = document.querySelector(".overlay");
var modal = document.querySelector(".modal");
var modalNoButton = document.querySelector(".modal__action--negative");
let add = document.querySelector(".button__add");
let modalClose = document.querySelector(".modal-close");

add.addEventListener("click", openModal);
overlay.addEventListener("click", closeModal);
modalClose.addEventListener("click", closeModal);

if (modalNoButton) {
  modalNoButton.addEventListener("click", closeModal);
}

function closeModal() {
  if (modal) {
    modal.classList.remove("show");
  }
  overlay.classList.remove("show");
}

function openModal() {
  modal.classList.add("show");
  overlay.classList.add("show");
}
