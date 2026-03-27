document.addEventListener("DOMContentLoaded", () => {

  // ===== THEME TOGGLE =====
  const themeBtn = document.getElementById("themeBtn");
  if (themeBtn) {
    // Apply saved theme
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark");
    }

    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      // Save current theme
      localStorage.setItem(
        "theme",
        document.body.classList.contains("dark") ? "dark" : "light"
      );
    });
  }

  // ===== LOGIN FORM =====
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const roleSelect = document.getElementById("role");
      const role = roleSelect ? roleSelect.value : "";

      if (!role) {
        alert("Please select a role.");
        return;
      }

      // Redirect based on role
      const roleMap = {
        parent: "parent.html",
        teacher: "teacher.html",
        admin: "admin.html",
        principal: "principal.html"
      };

      if (roleMap[role]) {
        window.location.href = roleMap[role];
      } else {
        alert("Invalid role selected.");
      }
    });
  }

});



