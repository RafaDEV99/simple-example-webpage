/**
 * Shows two alert dialogs and several console messages, then logs the integers 0 through 19.
 *
 * Displays fixed alert dialogs and console messages, then iterates 20 times logging each loop index.
 */
function yeet() {
    var xd = 20;
    
    console.log("You have been alerted!!");
    alert("This is cool!!");
    console.log("This is a test for the console log");
    alert("Something cool is happening here!");

    for (var i = 0; i < xd; i++) {
        console.log(i)
    }

}

/**
 * Logs a startup message, schedules a callback to run after one second that logs and shows an alert, and then logs the timer identifier.
 *
 * The scheduled callback logs "wswkslwkswsl" and shows an alert with "Cool!" when it executes; the function itself does not return a value.
 */
function timerCOOL() {
    console.log("This is a timer so wait the time!");
    const timer = setTimeout(() => {
        console.log("wswkslwkswsl")        
        alert("Cool!")
    }, 1000);

    var numTime = timer;
    console.log(numTime);
}
