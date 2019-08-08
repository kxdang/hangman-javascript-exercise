// HTTP (Hypertext Tranfer Protcol)
// Request - What do we want to do?
// Response -  what was actually done

const Game1 = new Hangman("car parts", 4);
document.querySelector("#word").textContent = Game1.Puzzle;
document.querySelector("#guesses-left").textContent = Game1.statusMessage;

window.addEventListener("keypress", function(e) {
  const guess = String.fromCharCode(e.charCode);
  Game1.makeGuess(guess);
  document.querySelector("#word").textContent = Game1.Puzzle;
  document.querySelector("#guesses-left").textContent = Game1.statusMessage;
});
