// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Success banner after Netlify redirect (?success=1)
const params = new URLSearchParams(window.location.search);
const success = params.get("success");
const successEl = document.getElementById("success");

if (success === "1" && successEl) {
  successEl.classList.remove("hidden");
  window.history.replaceState({}, document.title, window.location.pathname + "#form");
}

// Start New Form buttons: clear + scroll
const form = document.getElementById("coverageForm");
const startButtons = ["startNewFormTop", "startNewFormHero", "startNewFormCard", "startNewFormBottom"]
  .map(id => document.getElementById(id))
  .filter(Boolean);

function startNewForm() {
  if (successEl) successEl.classList.add("hidden");
  if (form) form.reset();
  document.getElementById("form")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

startButtons.forEach(btn => btn.addEventListener("click", startNewForm));
