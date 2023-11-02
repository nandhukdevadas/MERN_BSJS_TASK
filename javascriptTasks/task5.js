const contactForm = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const websiteInput = document.getElementById("website");
const messageInput = document.getElementById("message");

contactForm.addEventListener("submit", function (e) {
  let isValid = true;

  document.querySelectorAll(".error").forEach(function (element) {
    element.textContent = "";
  });

  if (nameInput.value.trim() === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    isValid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    document.getElementById("emailError").textContent = "Invalid email format.";
    isValid = false;
  }

  const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
  if (!urlPattern.test(websiteInput.value.trim())) {
    document.getElementById("websiteError").textContent = "Invalid URL format.";
    isValid = false;
  }
  if (messageInput.value.trim() === "") {
    document.getElementById("messageError").textContent =
      "Message is required.";
    isValid = false;
  }

  if (!isValid) {
    e.preventDefault();
  }
});
