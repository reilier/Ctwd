document.getElementById('loginForm').addEventListener('submit', function (event) {
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

  const dummyUsername = 'userexample';
  const dummyPassword = 'password123';

  if (username === dummyUsername && password === dummyPassword) {
    alert(`Welcome, ${username}! Login successful.`);
    window.location.href = 'Landing.html';
  } else {
    alert('Login failed. Invalid username or password.');
    errorMsg.textContent = 'Invalid username or password.';
  }

  document.getElementById('loginForm').reset();
});
