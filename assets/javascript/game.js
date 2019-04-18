
// Creates an array of possible words for hangman game //

var horrorIcons = [
    "jason",
    "freddy",
    "pennywise",
    "leatherface",
    "chucky",
    "jaws",
    "elvira",
    "michaelmyers",
    "pinhead",
    "normanbates",
    "candyman",
    "hannibal",
    "jigsaw",
    "ghostface",
    "dracula",
    "thething",
    "alien",
    "predator",
    "tallman",
    "poltergeist"
]


// Randomly selects string from var horrorIcons //

var icon = horrorIcons[Math.floor(Math.random() * horrorIcons.length)];
console.log(icon)

var underscore = [];

// Creates underscores based on length of word //

var makeUnderscore = () => {
    for(var i=0; i<icon.length; i++) {
        underscore.push("_");
    }return underscore;
}

console.log(makeUnderscore());

// Record keys user presses //

document.onkeyup = function() {
    var userGuess = String.fromCharCode(event.keyCode).
    toLowerCase();

    console.log(userGuess)
}

// Determines if userGuess is found in word //

// If found in word, push to right array //

// if not found in word, push to wrong array //