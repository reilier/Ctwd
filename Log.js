document.getElementById('loginForm').addEventListener('submit', function(event) {
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

  alert(`Welcome, ${username}! You have successfully logged in.`);


  this.reset();
});