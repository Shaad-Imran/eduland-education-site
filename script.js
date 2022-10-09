// Toggle Menu
const overlay = document.querySelector("[.overlay");
const navOpenBtn = document.querySelector(".menu-open-btn");
const navbar = document.querySelector(".navbar");
const navCloseBtn = document.querySelector(".menu-close-btn");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

navElemArr.forEach((element) => {
  element.addEventListener("click", () => {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
});
