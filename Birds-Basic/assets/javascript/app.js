//VARIABLES

$(document).ready(function() {

var amountCorrect = 0;
var amountWrong = 0;
var amountMissed = 0;
var answers = [1,1,1,1,1,1,1];
var time = 30;
var intervalId;


//FUNCTIONS
$(document).on("click", "#start-button", function(event){
    start()
});

$("#grade-button").on("click", grade());


function start() {
    console.log("start") 
    clearInterval(intervalId);          
    intervalId = setInterval(decrement, 1000);  
}

function decrement() {
    time--;
    $("#timer-row").html("<p> Time left:   " + time + "</p>");
    if (time === 0) {
        grade();
        alert("Time Up!");
    }
}


//when Grade Button clicked... 
function grade() {
    clearInterval(intervalId);

    for (var i = 0; i < answers.length; i++) {                  //Compare user guesses with Answer Array
        var radios = document.getElementsByName('Q'+ i +'-Option');

        for (var j = 0; j < radios.length; j++) {               //Tally Score and place numbers in stats area
            if (radios[j].checked) {
                if (radios[j].value == answers[i]) {
                    amountCorrect ++;
                    $('#amountCorrect-stats').text('Correct: ' + amountCorrect);
                    console.log("Question " + i + " correct");
                
                } if (radios[j].value != answers[i]) {
                    amountWrong ++;
                    $('#amountWrong-stats').text('Wrong: ' + amountWrong);
                    console.log("Question " + i + " wrong");

                } else {
                    amountMissed ++;
                    $('#amountMissed-stats').text('Missed: ' + amountWrong);
                    console.log("Question " + i + " missed");
                }
                break;
            }
        }
    }
}
})