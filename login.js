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

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const emailOrUsername = document.querySelector('#loginForm input[type="text"]').value;
  const password = document.querySelector('#loginForm input[type="password"]').value;

  try {
    const response = await fetch('https://your-backend-api.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ emailOrUsername, password }),
    });

    const data = await response.json();

    if (data.success) {
      window.location.href = '/dashboard';
    } else {
      alert('Login failed: ' + data.message);
    }
  } catch (error) {
    console.error('Error during login:', error);
  }
});

// Handle sign-up form submission
document.getElementById('signupForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const fullName = document.querySelector('#signupForm input[type="text"]').value;
  const email = document.querySelector('#signupForm input[type="email"]').value;
  const password = document.querySelector('#signupForm input[type="password"]').value;

  try {
    const response = await fetch('https://your-backend-api.com/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fullName, email, password }),
    });

    const data = await response.json();

    if (data.success) {
      alert('Account created successfully!');
      toggleForm(); // Switch back to login form
    } else {
      alert('Signup failed: ' + data.message);
    }
  } catch (error) {
    console.error('Error during signup:', error);
  }
});
