const animationBox = document.getElementById("animation-box");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
let animationId;
let isAnimating = false;

function moveBox() {
  if (!isAnimating) {
    isAnimating = true;
    animationBox.style.left = "100%";
    animationBox.addEventListener("transitionend", () => {
      animationBox.style.left = "0";
      isAnimating = false;
    });
  }
}
startButton.addEventListener("click", () => {
  if (!isAnimating) {
    moveBox();
  }
});

stopButton.addEventListener("click", () => {
  animationBox.style.left = "0";
});
