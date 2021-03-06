const square = document.querySelectorAll(".square");
const mole = document.querySelectorAll(".mole");
const timeLeft = document.querySelector("#time-left");

let score = document.querySelector("#score");
let result = 0;
let currentTime = timeLeft.textContent;

function randomSquare() {
  square.forEach((className) => {
    className.classList.remove("mole");
  });
  let randomPosition = square[Math.floor(Math.random() * 9)];
  randomPosition.classList.add("mole");

  //  assign the id of the randomPosition to hitPosition
  hitPosition = randomPosition.id;
}

square.forEach((id) => {
  id.addEventListener("click", () => {
    if (id.id == hitPosition) {
      result++;
      score.textContent = result;
    }
  });
});

function moveMole() {
  let timerId = null;
  timerId = setInterval(randomSquare, 1000);
}
moveMole();

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime == 0) {
    clearInterval(timerId);
    alert("game is over!! Your score is : " + result);
    score.textContent = 0;
  }
}

let timerId = setInterval(countDown, 1000);
