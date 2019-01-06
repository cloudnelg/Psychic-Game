// Array holding possible computer choices //
var letters = ["a", "b", "c", "x", "y", "z"];

// Variable holding actual computer choice //
var computerLetter;

// Array containing player choices //
var playerchoices = [];

// Countdown to game over //
var trysRemaining = 9;

// Counter Variables //
var wins = 0;
var losses = 0;

// Functions //
function amendTrysRemaining () {
    document.getElementById("remaining").innerHTML = trysRemaining;
};

function genComputerLetter () {
  computerLetter = letters[Math.floor(Math.random() * letters.length)];
};

function amendPlayerGuesses () {
  document.getElementById("yourguesses").innerHTML = playerchoices.join();
};

function refresh () {
  trysRemaining = 9;
  playerchoices = [];
  amendTrysRemaining();
  amendPlayerGuesses();
  genComputerLetter();
  
};

// Event Function //
document.onkeydown = function(event) {
  trysRemaining--;

// Locally Scoped Variable //
    var attemptedletter = String.fromCharCode(event.which).toLowerCase(event.which);
    playerchoices.push(attemptedletter);
  amendTrysRemaining();
  amendPlayerGuesses();

// Win Logic //
  if (attemptedletter === computerLetter) {
    wins++;
    document.getElementById("wins").innerHTML = wins;
    refresh();
  }

  // Loss Logic //
  if (trysRemaining === 0) {
    losses++;
    document.getElementById("losses").innerHTML = losses;
    refresh();
  }
};

// Function Calls //
genComputerLetter();
amendTrysRemaining();