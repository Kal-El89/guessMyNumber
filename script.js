"use strict";

let guessNumber = Math.floor(Math.random() * 2) + 1;

let score = 20;
let highScore = 0;
const changeTheme = function (color) {
  document.querySelector("body").style.backgroundColor = color;
};
const message = function (text) {
  document.querySelector(".label-start").textContent = text;
};

document.querySelector(".check-box").addEventListener("click", function () {
  const guess = document.querySelector(".guess").value;
  if (guess == guessNumber) {
    document.querySelector(".question").textContent = guessNumber;
    message("Correct Number!");
    changeTheme("#60b347");
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess != guessNumber) {
    score--;
    document.querySelector(".score").textContent = score;
    document.querySelector(".label-start").textContent =
      guess > guessNumber ? "📈 Too high" : "📉 Too low";
    if (score <= 0) {
      message("You loose");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again-box").addEventListener("click", function () {
  guessNumber = Math.floor(Math.random() * 2) + 1;
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".question").textContent = "?";
  changeTheme("#222");
});
