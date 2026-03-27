document.addEventListener("DOMContentLoaded", () => {

  // ===== Day of the Week =====
  const dayEl = document.getElementById("dayOfWeek");
  if (dayEl) {
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    dayEl.textContent = days[new Date().getDay()];
  }

  // ===== Theme Toggle with Persistence =====
  const themeBtn = document.getElementById("themeBtn");
  if (themeBtn) {
    // Load saved theme
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark");
    }

    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      localStorage.setItem(
        "theme",
        document.body.classList.contains("dark") ? "dark" : "light"
      );
    });
  }

  // ===== Accordion Toggle (both main and sub) =====
  const toggleAccordion = (selector) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(header => {
      header.addEventListener("click", () => {
        const body = header.nextElementSibling;
        if (!body) return;
        body.style.display = (body.style.display === "block") ? "none" : "block";
      });
    });
  };

  toggleAccordion(".accordion-header");
  toggleAccordion(".sub-accordion");

  // ===== Logout Button =====
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      window.location.href = "index.html"; // redirect to login page
    });
  }

});
