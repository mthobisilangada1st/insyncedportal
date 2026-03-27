document.addEventListener("DOMContentLoaded", () => {

  // ===== THEME TOGGLE =====
  const themeBtn = document.getElementById("themeBtn");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark");
    });
  }

  // ===== ACCORDIONS =====
  const toggleAccordion = (button) => {
    const body = button.nextElementSibling;
    if (!body) return;
    body.style.display = body.style.display === "block" ? "none" : "block";
  };

  document.querySelectorAll(".accordion-header").forEach(btn => {
    btn.addEventListener("click", () => toggleAccordion(btn));
  });

  document.querySelectorAll(".sub-accordion").forEach(btn => {
    btn.addEventListener("click", () => toggleAccordion(btn));
  });

});

// ===== LOGOUT BUTTON =====
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    window.location.href = "index.html"; // redirect to login page
  });
}
