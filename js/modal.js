// 1. Select all elements
const modal = document.querySelector("#modal");
const btnOpen = document.querySelector("#open-modal-btn");
const btnClose = document.querySelector("#close-modal-btn");
const overlay = document.querySelector("#overlay");

// 2. When open button clicked add class open
btnOpen.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.add("open");
  overlay.classList.add("open");
});

// 3. When close button clicked remove class open
// btnClose.addEventListener("click", (e) => {
//   e.preventDefault();
//   modal.classList.remove("open");
//   overlay.classList.remove("open");
// });

// overlay.addEventListener("click", () => {
//   modal.classList.remove("open");
//   overlay.classList.remove("open");
// });

// Refactor the solution

const removeOpenClass = () => {
  modal.classList.remove("open");
  overlay.classList.remove("open");
};

btnClose.addEventListener("click", (e) => {
  e.preventDefault();
  removeOpenClass();
});

overlay.addEventListener("click", () => {
  removeOpenClass();
});
