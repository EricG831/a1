var randomChar = rLetter();
var guesses = document.querySelector('#guesses');
var lastResult = document.querySelector('#lastResult');
var consonantOrVowel = document.querySelector('#consonantOrVowel');

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');

var guessCount = 1;
var resetButton = document.querySelector('#reset');
resetButton.style.display = 'none';
guessField.focus();

function checkRandLetterType(){
    var vowel = "vowel";
    var consonant = "consonant";
    if(randomChar == 'a' || randomChar == 'e' || randomChar == 'i' || randomChar == 'o' || randomChar == 'u'){
        return vowel;
    } 
    return consonant;
}

function rLetter() {
    return String.fromCharCode(Math.floor(Math.random() * (122 - 97)) + 97);
}

function checkGuess() {
    var userGuess = (guessField.value);
    if (guessCount === 1) {
        guesses.innerHTML = 'Previous guesses: ';
    }
    guesses.innerHTML += userGuess + ' ';

    if (userGuess === randomChar) {
        lastResult.innerHTML = 'Congratulations! You got it right!';
        lastResult.style.backgroundColor = 'green';
        consonantOrVowel.innerHTML = '';
        setGameOver();
    }
    else if (guessCount === 10) {
        lastResult.innerHTML = 'Sorry, you lost!';
        setGameOver();
    }
    else {
        lastResult.innerHTML = 'Wrong!';
        lastResult.style.backgroundColor = 'red';
        if (guessCount > 5) {
            consonantOrVowel.innerHTML = 'Hint! letter is a ' + checkRandLetterType();
        }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton.style.display = 'inline';
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;

    var resetParas = document.querySelectorAll('.resultParas p');
    for (var i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }

    resetButton.style.display = 'none';

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';

    randomChar = rLetter();
}
