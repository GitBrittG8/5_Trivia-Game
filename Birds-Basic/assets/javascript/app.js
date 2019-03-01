    //Variables

    var amountCorrect = 0;
    var amountWrong = 0;
    var amountMissed = 0;
    var answers = [1,1,1,1,1,1,1];
    var question = [];



    //Functions

    function grade() {

        for (var i = 0; i < answers.length; i++) {
            var radios = document.getElementsByName('Q'+ i +'-Option');

            for (var j = 0; j < radios.length; j++) {

                if (radios[j].checked) {
                    if (radios[j].value == answers[i]) {
                    amountCorrect ++;
                    $('#stats').text('Correct: ' + amountCorrect);
                    console.log("Question " + i + " is correct!");
                    }

                    else {
                    amountWrong ++;
                    $('#stats').text('Wrong: ' + amountWrong);
                    console.log("Question " + i + " is incorrect!");
                    }
                    break;
                }
            }
        }
    }