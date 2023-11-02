function showDate() {
  const currentDate = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = currentDate.toLocaleDateString(undefined, options);
  document.getElementById("dateResult").textContent = formattedDate;
}

function showTime() {
  const currentTime = new Date();
  const options = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  };
  const formattedTime = currentTime.toLocaleTimeString(undefined, options);
  document.getElementById("timeResult").textContent = formattedTime;
}
