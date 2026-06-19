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

// FAQ accordion
const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach((item) => {
  const btn = item.querySelector(".faq-q");
  if (!btn) return;
  btn.addEventListener("click", () => {
    const isOpen = item.classList.contains("faq-open");
    item.classList.toggle("faq-open");
    btn.setAttribute("aria-expanded", isOpen ? "false" : "true");
  });
});

// Email copy button (contact page)
const copyEmailBtn = document.getElementById("copy-email-btn");
if (copyEmailBtn) {
  copyEmailBtn.addEventListener("click", () => {
    const email = "clarityintomomentum@gmail.com";
    const confirmEl = document.getElementById("copy-confirm");
    const showConfirm = () => {
      if (confirmEl) {
        confirmEl.style.visibility = "visible";
        setTimeout(() => { confirmEl.style.visibility = "hidden"; }, 2500);
      }
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(showConfirm).catch(() => window.prompt("Copy this email address:", email));
    } else {
      window.prompt("Copy this email address:", email);
    }
  });
}
