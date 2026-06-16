const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");

if (window.lucide) {
  window.lucide.createIcons();
}

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    const icon = navToggle.querySelector("i, svg");

    if (icon) {
      icon.outerHTML = `<i data-lucide="${isOpen ? "x" : "menu"}"></i>`;
      if (window.lucide) {
        window.lucide.createIcons();
      }
    }
  });
}

