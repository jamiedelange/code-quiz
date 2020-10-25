// check recording of class for HTML stuff
// APIs
// organize functions
// use separate html pages -- same page for questions but different page for high score page 

var questionsIndex = 1
var questionHeader = document.createElement("h3");
var answerBtn1 = document.createElement("button");
var answerBtn2 = document.createElement("button");
var answerBtn3 = document.createElement("button");
var answerBtn4 = document.createElement("button");
var initialInput = document.querySelector("#initials");
var initialButton = document.querySelector("#user-initials");

function correctAnswerListener() {
  answerBtn1.remove();
  answerBtn2.remove();
  answerBtn3.remove();
  answerBtn4.remove();
  answerBtn1 = document.createElement("button");
  answerBtn2 = document.createElement("button");
  answerBtn3 = document.createElement("button");
  answerBtn4 = document.createElement("button");
  document.body.appendChild(answerBtn1);
  document.body.appendChild(answerBtn2);
  document.body.appendChild(answerBtn3);
  document.body.appendChild(answerBtn4);
  answerBtn1.innerHTML = questions[questionsIndex].answers[0];
  answerBtn2.innerHTML = questions[questionsIndex].answers[1];
  answerBtn3.innerHTML = questions[questionsIndex].answers[2];
  answerBtn4.innerHTML = questions[questionsIndex].answers[3];

  if (questions[questionsIndex].correctAnswerIndex == 0) {
    answerBtn1.addEventListener("click", correctAnswerListener);
  } else {
    answerBtn1.addEventListener("click", wrongAnswerListener);
  }
  if (questions[questionsIndex].correctAnswerIndex == 1) {
    answerBtn2.addEventListener("click", correctAnswerListener);
  } else {
    answerBtn2.addEventListener("click", wrongAnswerListener);
  }
  if (questions[questionsIndex].correctAnswerIndex == 2) {
    answerBtn3.addEventListener("click", correctAnswerListener);
  } else {
    answerBtn3.addEventListener("click", wrongAnswerListener);
  }
  if (questions[questionsIndex].correctAnswerIndex == 3) {
    answerBtn4.addEventListener("click", correctAnswerListener);
  } else {
    answerBtn4.addEventListener("click", wrongAnswerListener);
  }

  /* correctNotify = document.createElement("h3");
  document.body.appendChild(correctNotify);
  correctNotify.innerHTML = "Correct!"; */

  questionHeader.innerHTML = questions[questionsIndex].question;
  questionsIndex++
}

function wrongAnswerListener() {
  answerBtn1.remove();
  answerBtn2.remove();
  answerBtn3.remove();
  answerBtn4.remove();
  answerBtn1 = document.createElement("button");
  answerBtn2 = document.createElement("button");
  answerBtn3 = document.createElement("button");
  answerBtn4 = document.createElement("button");
  document.body.appendChild(answerBtn1);
  document.body.appendChild(answerBtn2);
  document.body.appendChild(answerBtn3);
  document.body.appendChild(answerBtn4);
  answerBtn1.innerHTML = questions[questionsIndex].answers[0];
  answerBtn2.innerHTML = questions[questionsIndex].answers[1];
  answerBtn3.innerHTML = questions[questionsIndex].answers[2];
  answerBtn4.innerHTML = questions[questionsIndex].answers[3];

  if (questions[questionsIndex].correctAnswerIndex == 0) {
    answerBtn1.addEventListener("click", correctAnswerListener);
  } else {
    answerBtn1.addEventListener("click", wrongAnswerListener);
  }
  if (questions[questionsIndex].correctAnswerIndex == 1) {
    answerBtn2.addEventListener("click", correctAnswerListener);
  } else {
    answerBtn2.addEventListener("click", wrongAnswerListener);
  }
  if (questions[questionsIndex].correctAnswerIndex == 2) {
    answerBtn3.addEventListener("click", correctAnswerListener);
  } else {
    answerBtn3.addEventListener("click", wrongAnswerListener);
  }
  if (questions[questionsIndex].correctAnswerIndex == 3) {
    answerBtn4.addEventListener("click", correctAnswerListener);
  } else {
    answerBtn4.addEventListener("click", wrongAnswerListener);
  }

  timeLeft -= 5;
  timerEl.textContent = timeLeft;
  questionHeader.innerHTML = questions[questionsIndex].question;
  questionsIndex++
}

var startBtn = document.getElementById("start");
startBtn.addEventListener("click", startQuizListener);

function startQuizListener() {
  document.body.appendChild(timerEl);
  timer();
  document.getElementById("title").remove();
  startBtn.remove();

    questionHeader.innerHTML = questions[0].question;
    document.body.appendChild(questionHeader);
  
    answerBtn1.innerHTML = questions[0].answers[0];
    document.body.appendChild(answerBtn1);
    answerBtn1.addEventListener("click", wrongAnswerListener);
   
    answerBtn2.innerHTML = questions[0].answers[1];
    document.body.appendChild(answerBtn2);
    answerBtn2.addEventListener("click", wrongAnswerListener);
  
    answerBtn3.innerHTML = questions[0].answers[2];
    document.body.appendChild(answerBtn3);
    answerBtn3.addEventListener("click", correctAnswerListener);
  
    answerBtn4.innerHTML = questions[0].answers[3];
    document.body.appendChild(answerBtn4);
    answerBtn4.addEventListener("click", wrongAnswerListener);
};


var questions = [
  {
    question: "Commonly used data types do not include:",
    answers: [
      "strings",
      "booleans",
      "alerts",
      "numbers",
    ],
    correctAnswerIndex: 2
  }, 
  {
    question: "String values must be enclosed within ____ when being assigned to variables",
    answers: [
      "commas",
      "curly brackets",
      "quotes",
      "parentheses",
    ],
    correctAnswerIndex: 2
  },
  {
    question: "The condition in an if/else statement is enclosed with:",
    answers: [
      "quotes",
      "curly brackets",
      "parentheses",
      "square brackets",
    ],
    correctAnswerIndex: 2
  },
  {
    question: "Arrays in JavaScript can be used to store:",
    answers: [
      "numbers and strings",
      "booleans",
      "other arrays",
      "all of the above",
    ],
    correctAnswerIndex: 3
  },
  {
    question: "A very usesful tool used during development and debugging for printing content to the debugger is:",
    answers: [
      "javascript",
      "terminal/bash",
      "for loops",
      "console.log",
    ],
    correctAnswerIndex: 3
  },
];

var timeLeft = 60
var timeInterval;
var timerEl = document.createElement("p");
timerEl.setAttribute("id", "timer");
var timer = function() {
  timerEl.textContent = timeLeft;
  var timeInterval = setInterval(function() {
    timeLeft--;
    timerEl.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timeInterval);
      gameEnd();
    }
  }, 1000);
};


function gameEnd() {
  timerEl.remove();
  questionHeader.remove();
  answerBtn1.remove();
  answerBtn2.remove();
  answerBtn3.remove();
  answerBtn4.remove();

  endTitle = document.createElement("h2");
  document.body.appendChild(endTitle);
  endTitle.innerHTML = "All done!";
  var scoreInput = document.getElementById("end-screen");
  scoreInput.removeAttribute("class");
  endTitle.setAttribute("class", "hidden");

  endScore = document.createElement("p");
  document.body.appendChild(endScore);
  endScore.textContent = "Your final score is " + timeLeft;

  endEnterInitials = document.createElement("p");
  document.body.appendChild(endEnterInitials);
  endEnterInitials.innerHTML = "Save your score: "
  
  initialButton.addEventListener("click", function(event) {
    event.preventDefault();

    if (initials === "") {
      alert("Field cannot be blank");
    } else {
      alert("Score saved");
    }

    var highScores = JSON.parse(window.localStorage.getItem("highScores")) || [];

    var enterInitial = document.querySelector("input").value;
    var newScore = {
      score: endScore, initials: enterInitial
    }

    highScores.push(newScore);
    window.localStorage.setItem("highScores", JSON.stringify(highScores));
 /*    window.localStorage.setItem("initial", JSON.stringify(enterInitial));
    window.localStorage.setItem("score", JSON.stringify(endScore)); */

    /* var initials = JSON.parse(window.localStorage.getItem("initial")) || [];
    var setScore = JSON.parse(window.localStorage.getItem("score")) || []; */

   

  }); 

};

// Fix: go to gameEnd when all questions are answered, not just when time runs out
// check local storage for get items, if nothing set to empty array 