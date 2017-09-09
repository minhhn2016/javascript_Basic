// 09.array_warm_up_2.js JavasScript code
// Initially, this program shows the given digit (0-9) as a Finnish word.
// Modify the program so that it asks the user to enter a month number (1-12).
// When the user clicks the button the program should show the month name in English. 

function showFinnishWord() {
    var wordArray = ["nolla", "yksi", "kaksi", "kolme", "neljä", "viisi", 
                     "kuusi", "seitsemän", "kahdeksan", "yhdeksän"];
    
    var digitText = document.getElementById("txtDigit").value;
    var digit = Number(digitText);
    
    if (digit >= 0 && digit <= 9) {
        outputText = wordArray[digit];
    } else {
        outputText = "Please enter a valid digit (0-9)!";
    }
        
    document.getElementById("pOutput").innerHTML = outputText;
}


/* create the function to show desired month into English */
function showMonthInEnglish() {
    var monthArray = ["January", "February", "March", "April", "May", "June", "July", /* create the array to store month strings */
                      "August", "September", "October", "November", "December"];
    var month = Number(document.getElementById("txtMonth").value); /* get the input value from the html, and convert it into number */
    if (month >= 1 && month <= 12) {
        outputText = monthArray[(month -1)]
     }
    else {
        outputText = "Pleaser enter a valid number between 1 - 12!";
    } 
    
    document.getElementById("pOutputMonth").innerHTML = outputText;
}

// End