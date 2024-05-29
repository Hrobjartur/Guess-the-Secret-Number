// Declare variables with "let" so they can be reassigned later
let randomNumber;
let minRange;
let maxRange;

// Check and set the number range and convert min and max to integer
function setRange() {
    // Get min
    minRange = parseInt(document.getElementById('minRange').value);
    // Get max
    maxRange = parseInt(document.getElementById('maxRange').value);
    // Test/check if min&max are numbers and min < max
    if (isNaN(minRange) || isNaN(maxRange) || minRange >= maxRange) {
        // if min >= max alert the error
        alert("Please enter a valid range with Min less than Max.");
        return;
    }

    // System generates a random number in the range
    randomNumber = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
    // Show (update) the range
    document.getElementById('instruction').textContent = `Enter a number between ${minRange} and ${maxRange}:`;
}

// Compare the numbers
function checkGuess() {
    // Declare player's guess and convert it to integer for safety
    const userGuess = parseInt(document.getElementById('guessInput').value);

    // Start result message by showing the player's choice
    let resultMessage = `You answered ${userGuess}. `;

    // Test/check if player's guess is between the range
    // if min<Guess<max, compare player's guess with system's number
    // add 1st part of result message to the comparison
    // if player didn't enter anything, display the error
    if (userGuess > maxRange) {
        resultMessage += `Your number can't be higher than ${maxRange}.`;
    } else if (userGuess < minRange) {
        resultMessage += `Your number can't be lower than ${minRange}.`;
    } else if (userGuess < randomNumber) {
        resultMessage += "The correct answer is higher.";
    } else if (userGuess > randomNumber) {
        resultMessage += "The correct answer is lower.";
    } else if (userGuess === randomNumber) {
        resultMessage += "This is the correct answer.";
    } else {
        resultMessage = "Please enter a number.";
    }

    // Add to History and display the final result 
    addToHistory(resultMessage);
    document.getElementById('result').innerHTML = `<hr>${resultMessage}<hr>`;
}

// Dark/Light mode switch by changing body colour
function toggleBackground() {
    var body = document.body;
    body.style.backgroundColor = body.style.backgroundColor === "white" ? "black" : "white";
}

// Add to History with help from Document Object Model (DOM)
function addToHistory(result) {
    let historyDiv = document.getElementById('history');
    let p = document.createElement('p');
    p.textContent = result;
    historyDiv.appendChild(p);
}

// Set History to nada
function clearHistory() {
    let historyDiv = document.getElementById('history');
    historyDiv.innerHTML = '';
}
