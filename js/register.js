// .....................signup.html.....................

function registerUser() {
  // Get user input
  var username = document.getElementById('regUsername').value;
  var email = document.getElementById('regEmail').value;
  var password = document.getElementById('regPassword').value;

  // console.log(username);
  // console.log(email);
  // console.log(password);
  
  // Validate input (you can add more validation here)
  if (!username || !email || !password) {
      document.getElementById('regError').innerText = 'All fields are required.';
      return;
  }

  var usernameRegex = /^[a-zA-Z0-9_]{3,20}$/; // Alphanumeric, underscore, 3 to 20 characters
  if (!usernameRegex.test(username)) {
      regError.innerText = 'Invalid username. It must be alphanumeric and between 3 to 20 characters.';
      return;
  }

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
      regError.innerText = 'Invalid email address.';
      return;
  }

  // Validate password strength (you can customize this based on your requirements)
  if (password.length < 6) {
      regError.innerText = 'Password must be at least 6 characters long.';
      return;
  }


  // Save user data to localStorage (in a real application, you'd use a server and a database)
  localStorage.setItem('username', username);
  localStorage.setItem('email', email);
  localStorage.setItem('password', password);

  // Clear the form and any error messages
  document.getElementById('regError').innerText = 'All fields are required.';
  

  if (true) {
      alert('successful');
      // document.getElementById('regError').innerText = 'registration successful';
      window.location.href = 'login.html';
  }
  else {

  }
}

// ..................Login.html...................

function loginUser() {
  // Get user input
  var loginUsername = document.getElementById('loginUsername').value;
  var loginPassword = document.getElementById('loginPassword').value;

  // Retrieve stored user data from localStorage
  var storedUsername = localStorage.getItem('username');
  var storedPassword = localStorage.getItem('password');

  // Authenticate user
  if (loginUsername === storedUsername && loginPassword === storedPassword) {
      document.getElementById('loginError').innerText = 'Login successful!';
      // You can redirect to a new page or perform other actions here
      window.location.href = 'cart.html';
  } else {
      document.getElementById('loginError').innerText = 'Invalid username or password.';
    }
}