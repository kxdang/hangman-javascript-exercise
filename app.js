const Game1 = new Hangman("car parts", 4);
document.querySelector("#word").textContent = Game1.Puzzle;
document.querySelector("#guesses-left").textContent = Game1.statusMessage;

window.addEventListener("keypress", e => {
  const guess = String.fromCharCode(e.charCode);
  Game1.makeGuess(guess);
  document.querySelector("#word").textContent = Game1.Puzzle;
  document.querySelector("#guesses-left").textContent = Game1.statusMessage;
});

getPuzzle((error, puzzle) => {
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

// const countryCode = "CA";
// const requestCanada = new XMLHttpRequest();

// requestCanada.addEventListener("readystatechange", e => {
//   if (e.target.readyState === 4 && e.target.status === 200) {
//     const data = JSON.parse(e.target.responseText);
//     const country = data.find(country => country.alpha2Code === countryCode);
//     console.log(country.name);
//   } else if (e.target.readyState === 4) {
//     console.log("unable to fetch data");
//   }
// });

// requestCanada.open("GET", "http://restcountries.eu/rest/v2/all");
// requestCanada.send();
