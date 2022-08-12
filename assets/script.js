var timeDiv = document.querySelector("#time");
var startButton = document.getElementById("start");

var time = 70;
var score = 0;

function startTimer() {
    // Sets timer
    var timerInterval = setInterval(function() {
      time--;
      timeDiv.textContent = time;
      // Time up, game over
      if (time === 0) {
        clearInterval(timerInterval);
        gameOver();
      }
    }, 1000);
};
  

// function wrongAnswer () {
//     var timer = timer - 5
// }

// function rightAnswer () {
//     score++
// }

function startGame() {
  // starts the timer
  startTimer();
  // removes instructions and start buttons
  // adds questions and option buttons
  var startScreen = document.getElementById("instructions");
  var optionButtons = document.getElementById("options")
  startScreen.style.display = "none";
  optionButtons.style.display = "block";
}