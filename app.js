const Game1 = new Hangman("car parts", 4);
document.querySelector("#word").textContent = Game1.Puzzle;
document.querySelector("#guesses-left").textContent = Game1.statusMessage;

window.addEventListener("keypress", e => {
  const guess = String.fromCharCode(e.charCode);
  Game1.makeGuess(guess);
  document.querySelector("#word").textContent = Game1.Puzzle;
  document.querySelector("#guesses-left").textContent = Game1.statusMessage;
});

getPuzzle("3", (error, puzzle) => {
  if (error) {
    console.log(`Error: ${error}`);
  } else {
    console.log(puzzle);
  }
});

//Making an HTTP request

// //1. Make a new request for all countries
// //2. Parse the responseText to get back the array of objects
// //3. Find your country object by its country code (alpha2Code property)
// //4. Print the full country name (name property)

getCountry("CA", (error, country) => {
  if (error) {
    console.log(`Error: ${error}`);
  } else {
    console.log(`Country name: ${country.name}`);
  }
});
