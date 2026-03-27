document.addEventListener("DOMContentLoaded", () => {
  // ====== Day of Week ======
  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const dayEl = document.getElementById("dayOfWeek");
  if (dayEl) dayEl.textContent = days[new Date().getDay()];

  // ====== Theme Toggle ======
  const themeBtn = document.getElementById("themeBtn");

  // Load saved theme
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }

  if (themeBtn) {
    themeBtn.onclick = () => {
      document.body.classList.toggle("dark");
      localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
    };
  }

  // ====== Accordions ======
  function toggleAccordion(btn) {
    const body = btn.nextElementSibling;
    if (!body) return;

    if (body.style.display === "block") {
      body.style.display = "none";
    } else {
      body.style.display = "block";
    }
  }

  document.querySelectorAll(".accordion-header").forEach(btn => {
    btn.addEventListener("click", () => toggleAccordion(btn));
  });

  document.querySelectorAll(".sub-accordion").forEach(btn => {
    btn.addEventListener("click", () => toggleAccordion(btn));
  });

  // ====== Logout ======
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      if (confirm("Are you sure you want to logout?")) {
        window.location.href = "index.html";
      }
    });
  }

  // ====== Optional: Mobile sidebar toggle ======
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }
});
