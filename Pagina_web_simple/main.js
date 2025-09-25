/**
 * Triggers two user alerts and logs informational messages plus the integers 0 through 19 to the console.
 *
 * Displays two alert dialogs and logs two informational messages, then logs each integer from 0 to 19 (inclusive of 0, exclusive of 20).
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

function timerCOOL() {
    console.log("This is a timer so wait the time!");
    const timer = setTimeout(() => {
        console.log("wswkslwkswsl")        
        alert("Cool!")
    }, 1000);

    var numTime = timer;
    console.log(numTime);
}

function forGo() {
    for (var i = 0; i < 10; i++) {
        console.log("This is a for loop: " + i);
    }
}
