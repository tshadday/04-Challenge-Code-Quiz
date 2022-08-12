var timerDiv = document.querySelector(".timer");
var startButton = document.getElementById("start");

var timer;
var time;
var score = 0;

function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerDiv.textContent = time;
      // Time up, game over
      if (timerCount === 0) {
        clearInterval(timer);
        gameOver();
      }
    }, 70000);
}
  

function wrongAnswer () {
    var timer = timer - 5
}

function rightAnswer () {
    score++
}

function startGame() {
  //startTimer();
  var startScreen = document.getElementById("instructions");
  var optionButtons = document.getElementById("options")
  startScreen.style.display = "none";
  optionButtons.style.display = "block";
}