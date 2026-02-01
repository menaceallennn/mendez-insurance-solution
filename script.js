// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Get form and success message
const form = document.getElementById("coverageForm");
const successEl = document.getElementById("success");

// Show success message when submitted
if (form) {
  form.addEventListener("submit", function () {
    if (successEl) {
      successEl.classList.remove("hidden");
    }
  });
}

// Start New Form buttons
const startButtons = [
  "startNewFormTop",
  "startNewFormHero",
  "startNewFormCard",
  "startNewFormBottom"
]
  .map(id => document.getElementById(id))
  .filter(Boolean);

function startNewForm() {
  if (successEl) successEl.classList.add("hidden");
  if (form) form.reset();
  document.getElementById("form")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

startButtons.forEach(btn => btn.addEventListener("click", startNewForm));
