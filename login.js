function toggleForm() {
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  const toggleText = document.getElementById('toggleText');
  const formTitle = document.getElementById('form-title');

  if (loginForm.style.display === 'none') {
    // Switch to login
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
    formTitle.innerText = 'Login';
    toggleText.innerHTML = `Don't have an account? <a href="#" onclick="toggleForm()">Sign Up</a>`;
  } else {
    // Switch to sign up
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
    formTitle.innerText = 'Sign Up';
    toggleText.innerHTML = `Already have an account? <a href="#" onclick="toggleForm()">Login</a>`;
  }
}
