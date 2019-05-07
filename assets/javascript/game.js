window.onload = function () {
    beginGame();
}

var movies = ["Godfather", "Step Brothers", "Scarface", "Indiana Jones and the Temple of Doom", "Ghostbusters", "Caddyshack", "What About Bob?"]
var letters = "abcdefghijklmnopqrstuvwxyz?".split("");

var currentMovie;
var matchingLetter = [];
var wrongLetter = [];
var wrongChoice;
var wins = 0;
var losses = 0;

function beginGame() {
    var movieChoice = document.getElementById("movie");
    movieChoice.innerHTML = "";
    document.getElementById("")
}