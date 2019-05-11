window.onload = function () {
    beginGame();
}
// Global Variables
// ==============================================================================

var movies = ["Godfather", "Step Brothers", "Scarface", "Indiana Jones and the Temple of Doom", "Ghostbusters", "Caddyshack", "What About Bob?"]
var letters = "abcdefghijklmnopqrstuvwxyz?".split("");

var currentMovie = "";
var matchingLetter = [];
var wrongLetter = [];
var totalguesses = 9;
var guessLeft = 0;
var gameOver = false;
var wrongChoice;
var wins = 0;
var losses = 0;
// Functions
// ==============================================================================
user begins game by pressing anykey
// computer displays underscores in place of letters of selected movie
// user presses any letter key and computer reveals correct guesses or incorrect guesses are placed in a row of incorrect guesses and guesses remaining reduces to 1
// if guesses remaining reaches 0, then whomp whomp movie plays and loses goes up by 1
// if user guesses all correct letters then winning movie plays and wins goes up by 1
function beginGame() {
    guessLeft = totalguesses;
// computer selects a random movie from a predesigned array that has movies with number of guesses reamaining
    // random movie selector
    currentMovie = Math.floor(Math.random() * (movies.length));
    console.log(currentMovie);

    for (var i = 0; i)
    
}

// Main
// ==============================================================================
beginGame;