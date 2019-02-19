var userChoice = document.getElementById("idOption")
var amountCorrect = 0;
var amountWrong = 0;



// When timer runs out, run grade function
function gradesAnswers () {
    if (idOption.value === true) {
        amountCorrect ++;
    } else {
        amountWrong ++;
    }
    console.log("Correct: " + amountCorrect + " Missed: " + amountWrong);
    // Display scores to div
}

//Create Start Button to display on load... Hide Trivia Questions

// When Start Button clicked, Hide button... Display Trivia Questions... Timer Countdown


// Assign correct id to each pic


// Randomize with each refresh