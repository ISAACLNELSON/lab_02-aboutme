'use strict';
//Which greeting to use
var today = new Date();
var hour = today.getHours();
determineGreeting();
var properGreeting;
function determineGreeting() {
    if (hour > 18) {
        properGreeting = 'Good Evening ';
    } else if (hour > 12) {
        properGreeting = 'Good afternoon ';
    } else if (hour > 0) {
        properGreeting = 'Good morning '
    } else { properGreeting = 'Welcome ' }
}


//Quiz Code 
var name = prompt('Welcome, what is your name?');
var ready = prompt('Have you read my biography yet? \n Yes or No');
ready = ready.toLowerCase();
if (ready === 'yes') {
    testing();
}
function testing() {
    var score = 0;
    alert('You will now be prompted to complete a short questionaire about my biography, the questions will all be yes or no. \n \nThank you for your participation!\n Please Press Enter.');

    //question 1
    var q1 = prompt('Is my last name Melson?');
    q1 = q1.toLowerCase();
    var q1Flag = false;
    while (q1Flag === false) {
        if (q1 === 'no' || q1 === 'n') {
            alert('Correct!');
            score += 1;
            q1Flag = true;
        } else if (q1 === 'yes' || q1 === 'y') {
            alert('Incorrect...')
            q1Flag = true;
        } else {
            q1 = prompt('Please answer with yes or no \n Is my last name Melson?');
        }
    }
    //question 2
    var q2 = prompt('Is my son\'s due date in 2020?');
    q2 = q2.toLowerCase();
    var q2Flag = false;
    while (q2Flag === false) {
        if (q2 === 'yes' || q2 === 'y') {
            alert('Correct!');
            score += 1;
            q2Flag = true;
        } else if (q2 === 'no' || q2 === 'n') {
            alert('Incorrect...')
            q2Flag = true;
        } else {
            q2 = prompt('Please answer with yes or no \n Is my son\'s due date in 2020?');
        }
    }
    //question 3
    var q3 = prompt('Was I in the Army?');
    q3 = q3.toLowerCase();
    var q3Flag = false;
    while (q3Flag === false) {
        if (q3 === 'no' || q3 === 'n') {
            alert('Correct!');
            score += 1;
            q3Flag = true
        } else if (q3 === 'yes' || q3 === 'y') {
            alert('Incorrect...')
            q3Flag = true;
        } else {
            q3 = prompt('Please answer with yes or no \n Was I in the Army?')
        }
    }

    //question 4
    var q4 = prompt('Will my son\'s initials will be MDN?');
    q4 = q4.toLowerCase();
    var q4Flag = false;
    while (q4Flag === false) {
        if (q4 === 'yes' || q4 === 'y') {
            alert('Correct!');
            score += 1;
            q4Flag = true;
        } else if (q4 === 'no' || q4 === 'n') {
            alert('Incorrect...')
            q4Flag = true;
        } else {
            q4 = prompt('Please answer with yes or no \n    Will my son\'s initials be MDN?');
        }
    }


    var q5 = prompt('I\'m thinking of a number between 1 and 10...\n I\'ll give you four tries \n What is it?');
    var guessCount = 3;
    var random = Math.ceil(Math.random() * (10 - 1) + 1);
    while (guessCount > 0) {
        guessCount--;

        var newQ5 = parseInt(q5, 10);
        console.log('newQ5 = ' + newQ5 + ' \n q5 = ' + q5 + 'random = ' + random);

        if (newQ5 === 10 || newQ5 === 9 || newQ5 === 8 || newQ5 === 7 || newQ5 === 6 || newQ5 === 5 || newQ5 === 4 || newQ5 === 3 || newQ5 === 2 || newQ5 === 1) {
            if (q5 < random) {
                q5 = prompt('Sorry, too low!\n Try again!');
            } else if (q5 > random) {
                q5 = prompt('Nope too high! \n Try again!');
            } else if (newQ5 === random) {
                alert('YES, YOU GOT IT!');
                score +=1;
                break;
            }
        }else if(guessCount === 0){
            alert('sorry, you ran out of guesses...')
        } else {
            q5 = prompt('YOU MUST ENTER A NUMBER \n Pick any number between 1 and 10!');
        }

        

    }

    var q6 = prompt('Try to guess one of my three favorite foods!');
    q6 = q6.toLowerCase();
    
    // food guess game
    var foodGuesses = 5;

    var foodFlag = false;

    var favFoods = ['pizza', 'ramen', 'mochi'];
    while (foodFlag === false && foodGuesses > 0) {
        foodGuesses--;
        
        for (var i = 0; i < favFoods.length; i++) {
            var currentFood;
            if (q6 === favFoods[i]) {
                foodFlag = true;

                currentFood = favFoods[i];
                console.log('foodFlag = ' + foodFlag)
            }
        } if (foodFlag === true) {
            alert('Yup! I love ' + currentFood);
            score += 1;

        } else if (foodGuesses === 0) {
            alert('sorry, you ran out of guesses...')
        } else {
            q6 = prompt('Nope, nice try though!')
        }

    }

    var finished = confirm('Score ' + score +'/6 \n   Correct answer   |   Your answer \n   Question 1:  No  | ' + q1 + '\n   Question 2:  Yes  | ' + q2 + '\n   Question 3:  No  | ' + q3 + '\n   Question 4:  Yes  | ' + q4 + '\n   Question 5:   ' + random + '   | ' + newQ5 + '\n Food Quiz: Pizza, Ramen, and Mochi! Your final Guess was ' + q6 + '\n Press OK to retake this quiz. Press cancel to go to my page.')
    if (finished) {
        testing()
    }

}