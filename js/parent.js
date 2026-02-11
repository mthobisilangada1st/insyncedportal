document.addEventListener("DOMContentLoaded", () => {

  console.log("JS Loaded");

  // ===== DAY OF WEEK =====
  const dayEl = document.getElementById("dayOfWeek");
  if (dayEl) {
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    dayEl.textContent = days[new Date().getDay()];
  }

  // ===== HAMBURGER MENU (MOBILE) =====
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // ===== THEME TOGGLE =====
  const themeBtn = document.getElementById("themeBtn");
  if (themeBtn) {
    // Apply saved theme on load
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

  // ===== ACCORDION TOGGLE =====
  const toggleAccordion = (selector) => {
    document.querySelectorAll(selector).forEach(header => {
      header.addEventListener("click", () => {
        const body = header.nextElementSibling;
        if (!body) return;
        body.style.display = (body.style.display === "block") ? "none" : "block";
      });
    });
  };

  toggleAccordion(".accordion-header");
  toggleAccordion(".sub-accordion");

  // ===== LOGOUT BUTTON =====
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      window.location.href = "index.html"; // redirect to login page
    });
  }

});
