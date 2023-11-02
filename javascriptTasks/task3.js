function calculateMultiplication() {
  const num1 = parseFloat(document.getElementById("num1Input").value);
  const num2 = parseFloat(document.getElementById("num2Input").value);

  if (!isNaN(num1) && !isNaN(num2)) {
    const multiplicationResult = num1 * num2;
    document.getElementById("multiplicationResult").textContent =
      multiplicationResult;
  } else {
    alert("Please enter valid numbers.");
  }
}

function calculateDivision() {
  const num1 = parseFloat(document.getElementById("num1Input").value);
  const num2 = parseFloat(document.getElementById("num2Input").value);

  if (!isNaN(num1) && !isNaN(num2)) {
    if (num2 === 0) {
      alert("Division by zero is not allowed.");
    } else {
      const divisionResult = num1 / num2;
      document.getElementById("divisionResult").textContent = divisionResult;
    }
  } else {
    alert("Please enter valid numbers.");
  }
}
