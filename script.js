// Show a welcome alert when the page loads
window.onload = function () {
  alert("Welcome to the Adidas Store!");
};

// Function triggered on button click
function exploreProducts() {
  alert("Redirecting to Adidas product collection...");
}

// Simple form validation
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent actual form submission

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (name === "" || email === "") {
      alert("Please fill in all fields.");
    } else if (!email.includes("@")) {
      alert("Please enter a valid email.");
    } else {
      alert(`Thanks for contacting us, ${name}! We'll get back to you soon.`);
      form.reset();
    }
  });
});
