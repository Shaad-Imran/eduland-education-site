// Toggle Menu
const overlay = document.querySelector(".overlay");
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

// sticky header
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  window.scrollY >= 20
    ? header.classList.add("active")
    : header.classList.remove("active");
});

// Go To Top
const goTopBtn = document.querySelector(".go-top");

window.addEventListener("scroll", () => {
  window.scrollY >= 800
    ? goTopBtn.classList.add("active")
    : goTopBtn.classList.remove("active");
});
