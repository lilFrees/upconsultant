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

window.addEventListener("scroll", function () {
  let header = this.document.querySelector(".nav");
  header.classList.toggle("sticky", this.window.scrollY > 500);
});
