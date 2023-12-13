document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("registrationForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      validateAndRegister();
    });

  function validateAndRegister() {
    var usernameInput = document.getElementById("username");
    var username = usernameInput.value;

    var passwordInput = document.getElementById("password");
    var password = passwordInput.value;

    var confirmPasswordInput = document.getElementById("confirmPassword");
    var confirmPassword = confirmPasswordInput.value;

    // Check if the username contains '@'
    if (username.includes("@")) {
      // Check if the password meets the criteria (e.g., minimum length)
      if (password.length >= 8) {
        // Check if the password matches the confirmed password
        if (password === confirmPassword) {
          // Show an alert upon successful registration
          alert("Successfully registered!");

          // Reset the form for a new registration
          document.getElementById("registrationForm").reset();
        } else {
          alert("Passwords do not match. Please try again.");
        }
      } else {
        alert("Password must be at least 8 characters long. Please try again.");
      }
    } else {
      // Display an error message for the username
      alert("Username must contain '@'. Please try again.");
    }
  }
});
