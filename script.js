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

// ───────────────────────────────────────────────
// Sticky corner card — Clarity Starter Kit teaser
// ───────────────────────────────────────────────
(function() {
  // Don't show on the Resources page (they're already where the kit lives)
  var path = window.location.pathname.toLowerCase();
  if (path.indexOf('resources') !== -1) return;

  // Don't show if dismissed within the last 7 days
  try {
    var dismissedAt = localStorage.getItem('cim-kit-card-dismissed');
    if (dismissedAt) {
      var daysSince = (Date.now() - parseInt(dismissedAt, 10)) / (1000 * 60 * 60 * 24);
      if (daysSince < 7) return;
    }
  } catch(e) { /* localStorage blocked - just show it */ }

  // Inject styles
  var style = document.createElement('style');
  style.textContent = [
    '.cim-kit-card{position:fixed;bottom:20px;right:20px;width:300px;background:#3d3530;border-radius:12px;padding:22px 20px 18px;box-shadow:0 16px 40px rgba(0,0,0,0.25);border:1px solid rgba(255,255,255,0.06);z-index:9999;opacity:0;transform:translateY(20px);transition:opacity .35s ease,transform .35s ease;font-family:"Raleway",Arial,sans-serif;}',
    '.cim-kit-card.cim-show{opacity:1;transform:translateY(0);}',
    '.cim-kit-card .cim-close{position:absolute;top:8px;right:10px;background:none;border:none;color:rgba(255,255,255,0.45);font-size:18px;cursor:pointer;padding:2px 8px;line-height:1;font-family:inherit;}',
    '.cim-kit-card .cim-close:hover{color:rgba(255,255,255,0.85);}',
    '.cim-kit-card .cim-badge{display:inline-flex;align-items:center;gap:4px;background:rgba(138,158,133,0.2);color:#8a9e85;font-size:9px;font-weight:800;letter-spacing:0.1em;padding:3px 10px;border-radius:100px;margin-bottom:12px;}',
    '.cim-kit-card .cim-title{font-family:"Cormorant Garamond",Georgia,serif;font-size:1.3rem;font-weight:600;color:#faf6f1;line-height:1.15;margin:0 0 5px;}',
    '.cim-kit-card .cim-tagline{font-family:"Cormorant Garamond",Georgia,serif;font-style:italic;font-size:0.95rem;color:#b8ada6;margin:0 0 12px;}',
    '.cim-kit-card .cim-desc{font-size:11.5px;color:#d1c6be;line-height:1.55;margin:0 0 14px;}',
    '.cim-kit-card .cim-btn{display:block;width:100%;background:#8a9e85;color:#1f3320;font-weight:800;font-size:12.5px;padding:10px;border-radius:7px;border:none;cursor:pointer;text-align:center;text-decoration:none;font-family:inherit;transition:background .2s;}',
    '.cim-kit-card .cim-btn:hover{background:#9ab89e;}',
    '@media (max-width: 600px){.cim-kit-card{bottom:12px;right:12px;left:12px;width:auto;padding:14px 16px;display:grid;grid-template-columns:1fr auto;gap:12px;align-items:center;}',
    '.cim-kit-card .cim-badge{display:none;}.cim-kit-card .cim-tagline{display:none;}.cim-kit-card .cim-desc{display:none;}',
    '.cim-kit-card .cim-title{font-size:0.95rem;margin:0;grid-column:1;}',
    '.cim-kit-card .cim-mobile-sub{display:block;font-size:11px;color:#b8ada6;font-weight:500;margin-top:2px;grid-column:1;}',
    '.cim-kit-card .cim-btn{grid-column:2;grid-row:1/3;align-self:center;width:auto;padding:9px 14px;font-size:11.5px;white-space:nowrap;}',
    '.cim-kit-card .cim-close{top:4px;right:4px;font-size:14px;}}',
    '@media (min-width: 601px){.cim-kit-card .cim-mobile-sub{display:none;}}'
  ].join('');
  document.head.appendChild(style);

  // Build card
  var card = document.createElement('div');
  card.className = 'cim-kit-card';
  card.setAttribute('role', 'complementary');
  card.setAttribute('aria-label', 'Free Clarity Starter Kit offer');
  card.innerHTML = [
    '<button class="cim-close" aria-label="Dismiss" type="button">×</button>',
    '<span class="cim-badge">✦ FREE</span>',
    '<p class="cim-title">Feeling stuck?</p>',
    '<p class="cim-mobile-sub">Free Clarity Starter Kit</p>',
    '<p class="cim-tagline">Start with the free Clarity Starter Kit.</p>',
    '<p class="cim-desc">Five tools to help you see clearly where you are and what your next step might be.</p>',
    '<a class="cim-btn" href="resources.html">Get the kit →</a>'
  ].join('');

  // Show after 30 seconds
  setTimeout(function() {
    document.body.appendChild(card);
    requestAnimationFrame(function() { card.classList.add('cim-show'); });
  }, 30000);

  // Dismiss handler
  card.addEventListener('click', function(e) {
    if (e.target.classList.contains('cim-close')) {
      card.classList.remove('cim-show');
      setTimeout(function() { card.remove(); }, 350);
      try { localStorage.setItem('cim-kit-card-dismissed', Date.now().toString()); } catch(err) {}
    }
  });
})();
