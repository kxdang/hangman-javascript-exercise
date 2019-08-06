const Game1 = new Hangman("cat", 2);
console.log(Game1.getPuzzle());
console.log(Game1.remainingGuesses);
console.log(Game1.status);

window.addEventListener("keypress", function(e) {
  const guess = String.fromCharCode(e.charCode);
  Game1.makeGuess(guess);
  document.querySelector("#word").textContent = Game1.getPuzzle();
  document.querySelector("#guesses-left").textContent = Game1.statusMessage();
});

document.querySelector("#word").textContent = Game1.getPuzzle();
document.querySelector("#guesses-left").textContent = Game1.statusMessage();
