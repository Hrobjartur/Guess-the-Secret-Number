// System generates a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Compare the numbers
function checkGuess() {
    // Declare player's guess and convert it to integer for safety
    const userGuess = parseInt(document.getElementById('guessInput').value);
    
    // Start result message by showing the player's choice
    let resultMessage = `You answered ${userGuess}. `;
    
    // Test/check if player's guess is between 1 and 100
    // if 1<Guess<100, compare player's guess with system's number
    // add 1st part of result message to the comparison
    // if player didn't enter anything, display the error
    if (userGuess > 100) {
        resultMessage += "Your number can't be higher than 100.";
    } else if (userGuess < 1) {
        resultMessage += "Your number can't be lower than 1.";
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