
# 2i Mock Interview Code Challenge

---

## Challenge Description

---

In a language of your choice, write a higher/lower game that satisfies the following criteria: 
*	Generates a random number. 
*	Takes in a guess. 
*	Returns a string with the guess and whether that guess is lower or higher than the random number. E.g., “You answered 9. The correct answer is higher.” 
*	If the guess matches the random number, then return a string which confirms this. E.g., “You answered 9. This is the correct answer!” 

## My attempt

---

I have chosen to write this is HTML + CSS + JavaScript.

I started with my HTML file, creating the game’s visual elements for which I’ve used a custom CSS and Bootstrap CSS.

Added a Dark/Light mode switch, instructions, text box set to number type and range from 1 to 100.

Submit button and an empty paragraph where the result will be displayed, injected by the JavaScript functions.
Finally, added the History feature so the player can see his choices and their result.

From this I have moved on to CSS where I have styled the HTML elements.
Giving an overall more aesthetically pleasing look and making the buttons interactive.

Lastly, I have created my JS script file, where apart from my main game function I’ve made several other functions: Dark/Light mode, History and Clear History button.

For my main game function (checkGuess) I’ve started by using Math to generate a random number.
Used parseInt and getElementById to get the players guess (userGuess) and convert it to an integer (input validation).

Created a new variable (resultMessage) to show the user choice and eventually the final result.
Checked if the number is over or under the range, and if it’s within the range, compared it to the system’s choice.
If no number was entered at all, display a notice.
For all options, combine the user choice to the check/comparison result.
Called the add to History function with the result as a parameter.
Finally inject the complete message into HTML.

For the Dark/Light mode I have changed the body background colour from default white to black and vice versa.

For History, I have created a new element and used DOM to append it for future choices.

For the clear History functions, I have simply set the History to nothing.

## V2

---

I wanted to remove the range limit, letting the player choose their own so I have made a V2.

Kept the same CSS file but made a few changes to the HTML and JS files.

In HTML, I've added two text boxes for range min and max.
Plus a submit button for the range values.

In JS, I've kept most of the same code appart from the beginning where I have added:
* two new variable, minRange and maxRange;
* a new function to set the range before making the system choice;
* check to see if the range number are numbers and if min < max;
* if all is ok, make the choice and update game instructions showing the new range;
* made a few more tweaks so that the choice is compared to min and max, not 1 and 100.
