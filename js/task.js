const buttonStart = document.getElementById("start");
const buttonStop = document.getElementById("stop");
const view = document.getElementById("view");
let intervalId;

let isPressed = false;

function startCount() {
  isPressed = !isPressed;

  if (!isPressed) {
    clearInterval(intervalId);
    start.textContent = "start";
  } else {
    intervalId = setInterval(runCount, 1000);
    start.textContent = "pause";
  }
}

let sec = 0;
function runCount() {
  console.log(++sec);
  view.textContent = sec;
}

function stopCount() {
  clearInterval(intervalId);
  sec = 0;
  console.log(sec);
  view.textContent = sec;
  start.textContent = "start";
}
buttonStart.addEventListener("click", startCount);
buttonStop.addEventListener("click", stopCount);
