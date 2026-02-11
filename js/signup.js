// ===== Dark Mode Toggle with Persistence =====
const themeBtn = document.getElementById("themeBtn");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});

// ===== Sign-up Form Submission =====
const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const fullName = document.getElementById("fullName").value.trim();
  const role = document.getElementById("role").value;

  if (!role) {
    alert("Please select a role.");
    return;
  }

  // Redirect to dashboard after signup
  switch(role.toLowerCase()) {
    case "parent":
      window.location.href = "parent.html";
      break;
    case "teacher":
      window.location.href = "teacher.html";
      break;
    case "admin":
      window.location.href = "admin.html";
      break;
    case "principal":
      window.location.href = "principal.html";
      break;
    default:
      alert("Invalid role selected.");
  }
});
