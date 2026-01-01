// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Success banner after Netlify submit redirect (?success=1)
const params = new URLSearchParams(window.location.search);
const success = params.get("success");
const successEl = document.getElementById("success");

if (success === "1" && successEl) {
  successEl.classList.remove("hidden");
  // Clean URL so it doesn't keep showing after refresh
  window.history.replaceState({}, document.title, window.location.pathname + "#form");
}

// Mobile menu toggle
const toggle = document.querySelector(".nav-toggle");
if (toggle) {
  toggle.addEventListener("click", () => {
    const open = document.body.classList.toggle("menu-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  document.querySelectorAll(".nav a").forEach((a) => {
    a.addEventListener("click", () => {
      document.body.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Start new form buttons (clear + scroll)
const form = document.getElementById("lifeForm");
const startButtons = [
  "startFormTop",
  "startFormHero",
  "startFormCard",
  "startFormWhy",
  "startFormBottom",
  "startFormSide"
].map(id => document.getElementById(id)).filter(Boolean);

function startNewForm() {
  if (successEl) successEl.classList.add("hidden");
  if (form) form.reset();
  document.body.classList.remove("menu-open");
  const formSection = document.getElementById("form");
  if (formSection) formSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

startButtons.forEach(btn => btn.addEventListener("click", startNewForm));
