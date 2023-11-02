function reverseNumber() {
  const numberInput = document.getElementById("numberInput").value;
  if (!isNaN(numberInput)) {
    const numStr = numberInput.toString();
    const reversedStr = numStr.split("").reverse().join("");
    document.getElementById("result").textContent = reversedStr;
  } else {
    alert("Please enter a valid number.");
  }
}
