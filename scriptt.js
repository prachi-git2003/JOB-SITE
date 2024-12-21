document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the values from the input fields
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple validation (you can replace this with actual authentication logic)
    if (username === "user" && password === "password") {
      alert("Login successful!");
      // Redirect to the job listings page or dashboard
      window.location.href = "job-listings.html"; // Change this to your actual page
    } else {
      document.getElementById("error-message").textContent =
        "Invalid username or password.";
    }
  });
{
  function goToindex2() {
    window.location.href = "index2.html"; // Redirect to login page
  }
}
