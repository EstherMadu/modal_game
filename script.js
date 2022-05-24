"use strict";
const modal = document.querySelector(".modal");
const showModal = document.querySelectorAll(".show-modal");
const btncloseModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const shutModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener("click", openModal);
}

btncloseModal.addEventListener("click", shutModal);

overlay.addEventListener("click", shutModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.add("hidden")) {
    shutModal();
  }
});

// const modal = document.querySelector(".modal");
// const openModal = document.querySelectorAll(".show-modal");
// const btnCloseModal = document.querySelector(".close-modal");
// const overlay = document.querySelector(".overlay");

// const showModal = function () {
//   modal.classList.remove("hidden");
//   overlay.classList.remove("hidden");
// };

// const closeModal = function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// };

// for (let i = 0; i < openModal.length; i++) {
//   openModal[i].addEventListener("click", showModal);
// }

// btnCloseModal.addEventListener("click", closeModal);

// overlay.addEventListener("click", closeModal);

// document.addEventListener("keydown", function (e) {
//   if (e.key === "Escape" && !modal.classList.contains("hidden")) {
//     closeModal();
//   }
// });
