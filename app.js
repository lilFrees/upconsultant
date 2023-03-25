"use strict";

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const hiddenEl = document.querySelectorAll(".hidden");
hiddenEl.forEach((el) => observer.observe(el));

// Nav toggle

const toggle = document.querySelector(".nav__toggle-icon");
const navList = document.querySelector(".nav__list");

const expandHandler = () => {
  let isExpanded = navList.hasAttribute("aria-expanded");
  navList.toggleAttribute("aria-expanded");
  toggle.textContent = isExpanded ? "menu" : "close";
};

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    expandHandler();
  }
});

let header = this.document.querySelector(".nav");
document.addEventListener("scroll", function () {
  if (this.window.scrollY > 500) {
    header.classList.toggle("sticky");
  }
  console.log("scroll");
});
