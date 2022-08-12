var timeDiv = document.querySelector("#time");
var startButton = document.getElementById("start");
var question = document.querySelector("#question");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");

var time = 70;
var score = 0;

var question1 = "What is an array stored in?";
// answer D [3]
var answers1 = ["A) ''", "B) {}", "C) ()", "D) []"];

var question2 = "What file holds the styling of the webpage?";
// answer A [0]
var answers2 = ["A) CSS", "B) JS", "C) HTML", "D) IDK"];

var questions3 = "What does CSS stand for?";
// answer C  [2]
var answers3 = ["A) Cascading Script Sheet", "B) Country Songs Suck", "C) Cascading Style Sheet", "D) Cascading System Standard"];

var questions4 = "What tag is used to link a CSS file to the HTML?";
// answer A [0]
var answers4 = ["A) Link", "B) Script", "C) Source", "D) Meta"];

var questions5 = "What does a typical README.md file contain?";
// answer B [1]
var answers5 = ["A) Pictures of Cats", "B) Instructions on using the application", "C) Books you should read", "D) Nothing"];

function timeDisplay() {
  timeDiv.textContent = time;
}

function startTimer() {
    // Sets timer
    var timerInterval = setInterval(function() {
      time--;
      timeDisplay();
      // Time up, game over
      if (time <= 0) {
        clearInterval(timerInterval);
        gameOver();
      }
    }, 1000);
};

function wrongAnswer () {
    time = time - 5;
    timeDisplay();
}

function rightAnswer () {
    score++
}

function displayQuestion1() {
  // displays question and options to page
  // correct answer is option 4
  question.textContent = question1;
  option1.textContent = answers1[0];
  option2.textContent = answers1[1];
  option3.textContent = answers1[2];
  option4.textContent = answers1[3];

  option1.onclick = function() {
    wrongAnswer();
    displayQuestion2();
  };

  option2.onclick = function() {
    wrongAnswer();
    displayQuestion2();
  };

  option3.onclick = function() {
    wrongAnswer();
    displayQuestion2();
  }

  option4.onclick = function() {
    rightAnswer();
    displayQuestion2();
  }
}

function displayQuestion2() {
  // displays question and options to page
  // correct answer is option 1
  question.textContent = question2;
  option1.textContent = answers2[0];
  option2.textContent = answers2[1];
  option3.textContent = answers2[2];
  option4.textContent = answers2[3];

  option1.onclick = function() {
    rightAnswer()
    //displayQuestion3()
  };

  option2.onclick = function() {
    wrongAnswer()
    //displayQuestion3()
  };

  option3.onclick = function() {
    wrongAnswer()
    //displayQuestion3()
  }

  option4.onclick = function() {
    rightAnswer()
    //displayQuestion3()
  }
}

function startGame() {
  // starts the timer
  startTimer();
  // removes instructions and start buttons
  // adds questions and option buttons
  var startScreen = document.getElementById("instructions");
  var optionButtons = document.getElementById("options")
  startScreen.style.display = "none";
  optionButtons.style.display = "block";

  displayQuestion1();
}