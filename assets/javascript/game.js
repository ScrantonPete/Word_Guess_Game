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

// Blank letters
// function prepareBlanks() {
//     spaces =
// }


function beginGame() {
    guessLeft = totalguesses;

    // random movie selector
    currentMovie = Math.floor(Math.random() * (movies.length));
    console.log(currentMovie);
}

// Main
// ==============================================================================
beginGame;