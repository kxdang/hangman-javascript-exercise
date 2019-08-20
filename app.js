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
//Making an HTTP request

// //1. Make a new request for all countries
// //2. Parse the responseText to get back the array of objects
// //3. Find your country object by its country code (alpha2Code property)
// //4. Print the full country name (name property)

getCountry("CA").then(
  country => {
    console.log(country.name);
  },
  err => {
    console.log(`Error ${err}`);
  }
);
//fetch is a promise API - checks the status of the response for you
// fetch("http://puzzle.mead.io/puzzle", {})
//   .then(response => {
//     if (response.status === 200) {
//       return response.json();
//     } else {
//       throw new Error("Unable to fetch the puzzle");
//     }
//   })
//   .then(data => {
//     console.log(data.puzzle);
//   })
//   .catch(error => {
//     console.log(error);
//   });
