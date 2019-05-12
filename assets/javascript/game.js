// Global Variables
// ==============================================================================

// Arrays and Variables
var movieList = ["inception", "goodfellas", "scarface", "", "ghostbusters", "caddyshack", "jumanji", "airplane"]
var selectedMovie = "";
var lettersInMovie = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

// Game Counters
var guessesLeft = 9;
var winCount = 0;
var lossCount = 0;

// Functions
// ==============================================================================

function startGame() {
    selectedMovie = movieList[Math.floor(Math.random() * movieList.length)];
    lettersInMovie = selectedMovie.split("");
    numBlanks = lettersInMovie.length;

    // Reset counters
    guessesleft = 9;
    wrongletters = [];
    blanksAndSuccesses = [];

    // Populate blanks and successes with right number of blanks
    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push("_");
    }

    // HTML updates are made 
    document.getElementById("movieToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;


    // Testing

    console.log(selectedMovie);
    console.log(lettersInMovie);
    console.log(numBlanks);
    console.log(blanksAndSuccesses);
}
// Check if letters are in Movie name
function checkLetters(letter) {
    var isLetterInMovie = false;

    for (var i = 0; i < numBlanks; i++) {
        if (selectedMovie[i] == letter) {
            isLetterInMovie = true;
        }
    }
    // check where in the movie that letter exists and then poplate blanksAndSuccesses array
    if (isLetterInMovie) {
        // populate blank with letter
        for (var i = 0; i < numBlanks; i++) {
            if (selectedMovie[i] == letter) {
                blanksAndSuccesses[i] = letter;
            }
        }
    }

    // place wrong guess in wrongLetters array
    else {
        wrongLetters.push(letter);
        guessesLeft--
    }
    // testing
    console.log(blanksAndSuccesses);
}
function roundComplete() {
    console.log("Win Count " + winCount + " | Loss Count " + lossCount + " | Guesses Left " + guessesLeft);


    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("movieToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");

    if (lettersInMovie.toString() == blanksAndSuccesses.toString()) {
        winCount++;
        alert("You won");
        document.getElementById("winCounter").innerHTML = winCount;
        startGame();
    }


    else if (guessesLeft == 0) {
        lossCount++;
        alert("you Lost!");

        document.getElementById("lossCounter").innerHTML = lossCount;
        startGame();
    }

}



// Main Process
// ==============================================================================

// Game begins
startGame();
// Register key clicks

document.onkeyup = function (event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();

    // Testing
    console.log(letterGuessed);
}