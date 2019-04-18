
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
var rightLetter = [];
var wrongLetter = [];
var underscore = [];

console.log(icon)

// Creates underscores based on length of word //
//OFFICE HOURS: WHY DOES THIS WORK? Arrow Function...//
var makeUnderscore = () => {
    for(var i=0; i<icon.length; i++) {
        underscore.push(" _ ");
    }return underscore;
}

console.log(makeUnderscore());


// Record keys user presses //

document.onkeyup = function() {
    var userGuess = String.fromCharCode(event.keyCode).
    toLowerCase();

    console.log(userGuess)

// Determines if userGuess is found in word, pushes to rightLetter or wrongLetter array //    

    if(icon.indexOf(userGuess) > -1) {
        rightLetter.push(userGuess);
        underscore[icon.indexOf(userGuess)] = userGuess;
        console.log("In word")
    }else{
        wrongLetter.push(userGuess);
        console.log("Not in word")
    }

    

};

// Tells the user how many guesses they have left out of 9 //
// OFFICE HOURS: WHERE SHOULD THIS GO? BELOW document.onkeyup, OR DOWN HERE? //
