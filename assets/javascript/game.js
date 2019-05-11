// Global Variables
// ==============================================================================

var movieList = ["godfather", "step brothers", "scarface", "indiana jones and the temple of doom", "ghostbusters", "caddyshack", "what about bob"]
var selectedMovie = "";
var lettersInMovie = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetter = [];

var guessesLeft = 9;
var winCount = 0;
var losseCount = 0;

// Functions
// ==============================================================================
// user begins game by pressing anykey
// computer displays underscores in place of letters of selected movie
// user presses any letter key and computer reveals correct guesses or incorrect guesses are placed in a row of incorrect guesses and guesses remaining reduces to 1
// if guesses remaining reaches 0, then whomp whomp movie plays and loses goes up by 1
// if user guesses all correct letters then winning movie plays and wins goes up by 1
function startGame() {
    selectedMovie = movieList[Math.floor(Math.random() * movieList.length)];
    lettersInMovie = selectedMovie.split("");

    console.log(selectedMovie);
    console.log(lettersInMovie);
}



// Main Process
// ==============================================================================



startGame();