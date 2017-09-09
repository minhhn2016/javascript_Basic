// 06.08 JavasScript code

function play() {
    // Read value from the input field
    var betText = document.getElementById("txtBet").value;
    var bet = Number(betText);
    var win = 0;
        
    // Randomize dice pips between 1-6
    var pips = Math.round((Math.random() * 5) + 1);
    
    if (pips === 1 || pips ===3 || pips===5) {
        // Write the answer on the page, to the answer div, as content of the div
        document.getElementById("divAnswer").innerHTML = "Pips was " + pips + " -no pay!";
    }
    // Otherwise alculate win base on pips
    else {

        if (pips === 2||pips ===4) {
            win = bet*1.25;
        }
        else if (pips ===6) {
            win = bet*1.5;
        }
        document.getElementById("divAnswer").innerHTML = "Pips was " + pips + " -Paid back: " + win.toFixed(2) + " euros";
    }
    // Write the answer on the page, to the answer div, as content of the div

}
