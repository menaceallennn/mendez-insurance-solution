// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Show success banner after Netlify form submit redirect (?success=1)
const params = new URLSearchParams(window.location.search);
const success = params.get("success");
const successEl = document.getElementById("success");

if (success === "1" && successEl) {
  successEl.classList.remove("hidden");
  // Clean URL so it doesn't keep showing after refresh
  window.history.replaceState({}, document.title, window.location.pathname + "#intake");
}

// Mobile menu toggle
const toggle = document.querySelector(".nav-toggle");
if (toggle) {
  toggle.addEventListener("click", () => {
    const open = document.body.classList.toggle("menu-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // Close menu when clicking a nav link
  document.querySelectorAll(".nav a").forEach((a) => {
    a.addEventListener("click", () => {
      document.body.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}
