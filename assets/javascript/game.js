
// Creates an array of possible words for hangman game //

var horrorIcons = [
    {name: "jason", image: "assets/images/jason.jpg"},
    {name: "freddy", image: "assets/images/freddy-krueger.jpg"},
    {name: "pennywise", image: "assets/images/pennywise.jpg"},
    {name: "leatherface", image: "assets/images/leatherface.jpg"},
    {name: "chucky", image: "assets/images/chucky.Jpg"},
    {name: "jaws", image: "assets/images/jaws.jpg"},
    {name: "elvira", image: "assets/images/elvira.jpg"},
    {name: "michaelmyers", image: "assets/images/mikemyers.jpg"},
    {name: "pinhead", image: "assets/images/pinhead.jpg"},
    {name: "normanbates", image: "assets/images/psycho.jpg"},
    {name: "candyman", image: "assets/images/candyman.jpg"},
    {name: "hannibal", image: "assets/images/hannibal.jpg"},
    {name: "jigsaw", image: "assets/images/jigsaw.jpg"},
    {name: "ghostface", image: "assets/images/scream.jpg"},
    {name: "dracula", image: "assets/images/dracula.jpg"},
    {name: "thething", image: "assets/images/thing.jpg"},
    {name: "alien", image: "assets/images/alien.jpg"},
    {name: "predator", image: "assets/images/predator.jpg"},
    {name: "tallman", image: "assets/images/tallman.jpg"},
    {name: "poltergeist", image: "assets/images/poltergeist.jpg"}
]


// Randomly selects string from var horrorIcons //

var icon = horrorIcons[Math.floor(Math.random() * horrorIcons.length)];
var iconName = icon.name;
var iconPic = icon.image;
var rightLetter = [];
var wrongLetter = [];
var underscore = [];
var remainingGuesses = 12;
var numWins = 0;
var previousAnswer = [];

console.log(iconName)

//Give user a picture as a hint
function picHint() {
    document.getElementById("prevAnswerPic").src = iconPic;  
}

picHint();

// Creates underscores based on length of word //
var makeUnderscore = () => {
    for(var i=0; i<iconName.length; i++) {
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

    if(iconName.indexOf(userGuess) != -1) {
        for(var w = 0; w < iconName.length; w++) {
            if(iconName[w] === userGuess) {
// Replaces underscores with correct user guesses //
                underscore[w] = userGuess;
                rightLetter.push(userGuess);
                console.log("underscore: " + underscore)
            }}
                document.getElementById("underscore").innerHTML = underscore
            }else{
                wrongLetter.push(userGuess);
                document.getElementById("guessed").innerHTML = wrongLetter
    }
    if(underscore.indexOf(" _ ") === -1) {
        numWins++;
    //Change html to display number of wins
        document.getElementById("wins").innerHTML = "Wins: " + numWins;
    //Push underscore array into previousAnswer array
        previousAnswer.push(underscore);
    //Change html to display previousAnswer in "correctAnswer" element
        document.getElementById("correctAnswer").innerHTML = underscore.join("");

    //Remove old word
        underscore = [];
        console.log(underscore)
    //Choose new word
        icon = horrorIcons[Math.floor(Math.random() * horrorIcons.length)];
        iconName = icon.name;
        iconPic = icon.image;
        picHint();
        console.log(iconName)
         for(var j = 0; j<iconName.length; j++){
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




