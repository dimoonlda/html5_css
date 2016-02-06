/**
 * Created by lutay.d on 06.02.2016.
 */
var colorArray = ['green', 'yellow', 'white', 'black', 'red', 'blue', 'cyan', 'gray', 'gold', 'orange'].sort();
var gameColorIndex = Math.floor(Math.random() * colorArray.length);
var gameColor = colorArray[gameColorIndex];
var endGame = false;
var tryCount = 0;
console.log('Game color: ' + gameColor);

function game_start(){
    var myColor;
    while(!endGame){
        tryCount++;
         myColor = prompt("I am thinking of one of these colors:\n" +
            colorArray + "\n" +
        "What color am I thinking on?");
        console.log("My color: " + myColor);
        endGame = check_answer(myColor);
    }
}

function check_answer(answer){
    var answerIndex = colorArray.indexOf(answer);
    if (answerIndex == gameColorIndex){
        //win
        var myBody = document.getElementsByTagName("body")[0];
        myBody.style.background = colorArray[gameColorIndex];
        alert("Congratulations! You have guessed the color.\n" +
            "It took you " + tryCount + " guesses to finish the game!" +
            "You can see the color in the background.");
        return true;
    }
    if (answerIndex < 0){
        alert("Sorry, I don't recognize your color.\n Please try again.");
        return false;
    }
    if (answerIndex > gameColorIndex){
        alert("Sorry, your guess is not correct!\n" +
            "Hint: Your color is alphabetically higher than mine.\n" +
            "Please try again.");
        return false;
    }
    if (answerIndex < gameColorIndex){
        alert("Sorry, your guess is not correct!\n" +
            "Hint: Your color is alphabetically lower than mine.\n" +
            "Please try again.");
        return false;
    }
}