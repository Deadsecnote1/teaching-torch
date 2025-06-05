// Function to toggle the mobile navigation menu
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  const hamburger = document.querySelector(".hamburger");

  // Toggle the 'show' class to reveal or hide the menu
  nav.classList.toggle("show");

  // Toggle the aria-expanded attribute for accessibility
  const isExpanded = nav.classList.contains("show");
  hamburger.setAttribute("aria-expanded", isExpanded ? "true" : "false");
}

// Function to show a thank-you message (replacing alert)
function showAlert() {
  const alertBox = document.createElement("div");
  alertBox.classList.add("alert-box");
  alertBox.textContent = "Thank you for joining EduTorch!";
  
  // Add the alert box to the page and remove it after 5 seconds
  document.body.appendChild(alertBox);
  
  setTimeout(() => {
    alertBox.classList.add("fade-out");
    setTimeout(() => {
      alertBox.remove();
    }, 500); // Wait for the fade-out animation to finish
  }, 5000); // Remove alert box after 5 seconds
}

// Close mobile menu if clicking outside of it
document.addEventListener('click', (event) => {
  const navRight = document.getElementById("navLinks");
  const hamburger = document.querySelector(".hamburger");
  
  if (!navRight.contains(event.target) && !hamburger.contains(event.target)) {
    navRight.classList.remove("show");
    hamburger.setAttribute("aria-expanded", "false");
  }
});
