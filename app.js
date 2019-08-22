const word = document.querySelector("#word");
const guessesLeft = document.querySelector("#guesses-left");
let Game1;

// word.textContent = Game1.Puzzle;
// guessesLeft.textContent = Game1.statusMessage;

// window.addEventListener("keypress", e => {
//   const guess = String.fromCharCode(e.charCode);
//   Game1.makeGuess(guess);
//   word.textContent = Game1.Puzzle;
//   guessesLeft.textContent = Game1.statusMessage;
// });

const render = () => {
  word.textContent = Game1.Puzzle;
  guessesLeft.textContent = Game1.statusMessage;
};

const startGame = async () => {
  const puzzle = await getPuzzle("2");
  Game1 = new Hangman(puzzle, 5);
  console.log(Game1);
  render();
};

document.querySelector("#reset").addEventListener("click", startGame);

startGame();

// getPuzzle("2")
// .then(puzzle => {
//   console.log(puzzle);
// })
// .catch(err => {
//   console.log(`Error: ${err}`);
// });

// getCurrentCountry()
//   .then(country => {
//     console.log(country.name);
//   })
//   .catch(error => {
//     console.log(error);
//   });
