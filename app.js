const Game1 = new Hangman("car parts", 4);
document.querySelector("#word").textContent = Game1.Puzzle;
document.querySelector("#guesses-left").textContent = Game1.statusMessage;

window.addEventListener("keypress", e => {
  const guess = String.fromCharCode(e.charCode);
  Game1.makeGuess(guess);
  document.querySelector("#word").textContent = Game1.Puzzle;
  document.querySelector("#guesses-left").textContent = Game1.statusMessage;
});

//Making an HTTP request
const request = new XMLHttpRequest();
const proxy = "https://cors-anywhere.herokuapp.com/";
request.addEventListener("readystatechange", e => {
  if (e.target.readyState === 4) {
    const data = JSON.parse(e.target.responseText);
    console.log(data);
  }
});

request.open("GET", `${proxy}http://puzzle.mead.io/puzzle`);
request.send();
