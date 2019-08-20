const Game1 = new Hangman("car parts", 4);
document.querySelector("#word").textContent = Game1.Puzzle;
document.querySelector("#guesses-left").textContent = Game1.statusMessage;

window.addEventListener("keypress", e => {
  const guess = String.fromCharCode(e.charCode);
  Game1.makeGuess(guess);
  document.querySelector("#word").textContent = Game1.Puzzle;
  document.querySelector("#guesses-left").textContent = Game1.statusMessage;
});

getPuzzle("2")
  .then(puzzle => {
    console.log(puzzle);
  })
  .catch(err => {
    console.log(`Error: ${err}`);
  });

getCountry("CA")
  .then(country => {
    console.log(country.name);
  })
  .catch(err => {
    console.log(`Error: ${err}`);
  });

getLocat()
  .then(data => {
    console.log(`I live in ${data.city}, ${data.region} in ${data.country}`);
  })
  .catch(err => {
    console.log(err);
  });
