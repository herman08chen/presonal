// GUIDELINES:
//  1. Give every variable/const smallest scope
//  2. Grab HTML elements by tag and store in const
//  3. Put all other code inside functions
const numField = document.getElementById("num-field");
const messageText = document.getElementById("message-text");
const numGuessesText = document.getElementById("num-guesses-text");

let secret;
let min = 1;
let max = 100;
let numGuesses = 0;

var myConfetti = confetti.create(null, {
    resize: true,
    useWorker: true
});

function reset(){
    numGuesses = 0;
    loadGame();
}

function loadGame(){
    numGuessesText.innerHTML = `Number of Guesses: <b>${numGuesses}</b>`; 
    messageText.innerHTML = '';
    numField.min = min;
    numField.max = max;
    numField.value = max;
    secret = Math.random();
    secret = secret * (max - min + 1);
    secret = secret + min;
    secret = Math.floor(secret);
}

function makeGuess(){
    numGuesses++;
    numGuessesText.innerHTML = `Number of Guesses: <b>${numGuesses}</b>`; 

    let guess = parseInt(numField.value);
    console.log(`Guess: ${guess}`);
    if(guess < secret){
        messageText.innerHTML += `${guess} is too low<br>`;
    }
    else if(guess > secret){
        messageText.innerHTML += `${guess} is too high<br>`;
    }
    else if(guess == secret){
        messageText.innerHTML += `${guess} is correct!<br>`;
        myConfetti({particleCount: 500, spread: 160});
    }
    else{
        messageText.innerHTML += `Invalid Guess<br>`;
    }
}