function checkForDuplicate (numberArray, number) {                      // create a reusable function to check for duplicate number
    for (var i = 0; i < numberArray.length; i++ ){              
        if (numberArray[i] === number) {                                // loop through the created array, comparing array's elements to randomized number
            return true;
        }
    }    
    return false;
}

function drawNumbers() {                                                // create a function to draw the 7 numbers
    var numberArray = [0, 0, 0, 0, 0, 0, 0];                            // array to store 7 numbers
    var outputText = "";
    for (var i = 0; i < numberArray.length; i++) {                      // loop through array's elements
        var number = Math.floor(Math.random() * 39 + 1);                // create a random number between 1 - 39
        var isDuplicate = checkForDuplicate(numberArray, number);       // check for duplicate number
            
            if (isDuplicate === true) {
                numberArray[i] = Math.floor(Math.random() * 39 + 1);    // if a number is duplicated, random a new number
            }
            else {
                numberArray[i] = number;
            }        
    }
    var sortedArray = numberArray.sort(function sortNumber(a, b) { return a - b; });    // sort the randomized array in ascending order

    for (var x = 0; x < sortedArray.length; x++) {
        outputText += sortedArray[x] + " ";
    }
    document.getElementById("pOutput").innerHTML = outputText;          // display the result
    
}




 
