document.getElementById('registerForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorMsg = document.getElementById('errorMsg');

  errorMsg.textContent = '';

  if (username.length === 0) {
    errorMsg.textContent = 'Please enter your username.';
    return;
  }

  if (password.length === 0) {
    errorMsg.textContent = 'Please enter your password.';
    return;
  }

  const existingUsers = ['userexample', 'testuser'];

  if (existingUsers.includes(username.toLowerCase())) {
    errorMsg.textContent = 'Username already taken. Please choose another.';
    return;
  }

  alert(`Registration successful! Welcome, ${username}. You will be redirected to the login page.`);
  window.location.href = 'Log.html';

  this.reset();
});
