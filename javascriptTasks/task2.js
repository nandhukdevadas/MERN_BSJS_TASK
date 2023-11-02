function sortString() {
  const stringInput = document.getElementById("stringInput").value;
  const sortedString = stringInput.split("").sort().join("");
  document.getElementById("result").textContent = sortedString;
}
