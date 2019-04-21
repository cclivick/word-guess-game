
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
var remainingGuesses = 12;
var numWins = 0;
var previousAnswer = [];

/* PERSON GRADING THIS: If else statement not working here. Picture of Freddy shows up automatically and does not change based on previousAnswer array */

if(previousAnswer === "f", "r", "e", "d", "d", "y") {
    document.getElementById("prevAnswerPic").src = "assets/images/freddy-krueger.jpg"
}else if(previousAnswer === "j", "a", "s", "o", "n") {
    document.getElementById("prevAnswerPic").src = "assets/images/jason.jpg"
}

console.log(icon)

// Creates underscores based on length of word //
var makeUnderscore = () => {
    for(var i=0; i<icon.length; i++) {
        underscore.push(" _ ");
        document.getElementById("underscore").innerHTML = underscore
    }return underscore;
}

console.log(makeUnderscore());


// Record keys user presses //

document.onkeyup = function() {
    var userGuess = String.fromCharCode(event.keyCode).
    toLowerCase();

// Tells the user how many guesses they have remaining out of 10 //
    
    remainingGuesses--
    document.getElementById("remainingGuesses").innerHTML = remainingGuesses;
    if (remainingGuesses <= 0) {
        document.getElementById("remainingGuesses").innerHTML = "YOU LOSE!";
        document.getElementById("prevAnswerPic").src = "assets/images/you_lost.jpg"
    }
// Determines if userGuess is found in word, pushes to rightLetter or wrongLetter array //   

    if(icon.indexOf(userGuess) != -1) {
        for(var w = 0; w < icon.length; w++) {
            if(icon[w] === userGuess) {
// Replaces underscores with correct user guesses //
                underscore[w] = userGuess;
                rightLetter.push(userGuess);
                console.log("rightLetter: " + rightLetter)
                console.log("underscore: " + underscore)
            }}
                document.getElementById("underscore").innerHTML = underscore
            }else{
                wrongLetter.push(userGuess);
                document.getElementById("guessed").innerHTML = wrongLetter
                console.log("wrongLetter: " + wrongLetter)
    }
    if(underscore.indexOf(" _ ") === -1) {
        numWins++;
    //Change html to display number of wins
        document.getElementById("wins").innerHTML = "Wins: " + numWins;
    //Push underscore array into previousAnswer array
        previousAnswer.push(underscore);
    //Change html to display previousAnswer in "correctAnswer" element
        document.getElementById("correctAnswer").innerHTML = previousAnswer;

        console.log(previousAnswer);
    //Remove old word
        underscore = [];
        console.log(underscore)
    //Choose new word
        icon = horrorIcons[Math.floor(Math.random() * horrorIcons.length)];
         for(var j = 0; j<icon.length; j++){
             underscore.push(" _ ");
             document.getElementById("underscore").innerHTML = underscore;
    //Reset previousAnswer and Change to new previousAnswer
             previousAnswer = [];
         }
    //Reset remainingGuesses var
        remainingGuesses = 12;
        document.getElementById("remainingGuesses").innerHTML = remainingGuesses;
    //Reset wrongLetter var
         wrongLetter = [];
         document.getElementById("guessed").innerHTML = wrongLetter;
    }


};




