'use strict';
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





var name = prompt('Welcome, what is your name?');
var ready = prompt('Have you read my biography yet? \n Yes or No');
ready = ready.toLowerCase();
if (ready === 'yes') {
    testing();
}
function testing() {
    alert('You will now be prompted to complete a short questionaire about my biography, the questions will all be yes or no. \n \nThank you for your participation!\n Please Press Enter.')
    var q1 = prompt('Is my last name Melson?');
    var q2 = prompt('Is my son\'s due date in 2020?');
    var q3 = prompt('Was I in the Army?');
    var q4 = prompt('Will my son\'s initials will be MDN?');
    var finished = confirm('Here are the answers \n    Correct answer  |   Your answer \n   Question 1:  No  | ' + q1 + '\n   Question 2:  Yes  | ' + q2 + '\n   Question 3:  No  | ' + q3 + '\n   Question 4:  Yes  | ' + q4 + '\n Press OK to retake this quiz. \n Press cancel to go to my page.')
    if(finished){
        testing()
    }

}