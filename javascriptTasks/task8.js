const registrationForm = document.getElementById("registration-form");

registrationForm.addEventListener("submit", function (e) {
  let isValid = true;
  document.querySelectorAll(".error").forEach(function (element) {
    element.textContent = "";
  });
  const firstNameInput = document.getElementById("firstName");
  if (firstNameInput.value.trim() === "") {
    document.getElementById("firstNameError").textContent =
      "First name is required.";
    isValid = false;
  }
  const lastNameInput = document.getElementById("lastName");
  if (lastNameInput.value.trim() === "") {
    document.getElementById("lastNameError").textContent =
      "Last name is required.";
    isValid = false;
  }
  const emailInput = document.getElementById("email");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    document.getElementById("emailError").textContent = "Invalid email format.";
    isValid = false;
  }
  const passwordInput = document.getElementById("password");
  if (passwordInput.value.trim() === "") {
    document.getElementById("passwordError").textContent =
      "Password is required.";
    isValid = false;
  }

  const reenterPasswordInput = document.getElementById("reenterPassword");
  if (reenterPasswordInput.value.trim() === "") {
    document.getElementById("reenterPasswordError").textContent =
      "Please re-enter the password.";
    isValid = false;
  } else if (reenterPasswordInput.value.trim() !== passwordInput.value.trim()) {
    document.getElementById("reenterPasswordError").textContent =
      "Passwords do not match.";
    isValid = false;
  }
  const genderInputs = document.querySelectorAll(
    'input[name="gender"]:checked'
  );
  if (genderInputs.length === 0) {
    document.getElementById("genderError").textContent = "Gender is required.";
    isValid = false;
  }

  const ageInput = document.getElementById("age");
  const age = parseInt(ageInput.value);
  if (isNaN(age) || age < 18 || age > 99) {
    document.getElementById("ageError").textContent =
      "Age must be between 18 and 99.";
    isValid = false;
  }

  const languagesInputs = document.querySelectorAll(
    'input[name="languages"]:checked'
  );
  if (languagesInputs.length === 0) {
    document.getElementById("languagesError").textContent =
      "At least one language must be selected.";
    isValid = false;
  }

  const claimDetailsInput = document.getElementById("claimDetails");
  if (!claimDetailsInput.checked) {
    document.getElementById("claimDetailsError").textContent =
      "You must claim the details to be valid.";
    isValid = false;
  }

  if (!isValid) {
    e.preventDefault();
  }
});
