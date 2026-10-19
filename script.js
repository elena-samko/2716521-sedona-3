const openButton = document.querySelector("#open-modal");
const closeButton = document.querySelector(".modal-close-btn");
const modal = document.querySelector(".modal-container");

openButton.addEventListener("click", function () {
  modal.classList.remove("modal-hidden");
});

closeButton.addEventListener("click", function () {
  modal.classList.add("modal-hidden");
  openButton.focus();
});
