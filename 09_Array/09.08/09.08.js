// 09.08 JavasScript code


// Define the array variable inside the script element, but NOT inside the function.
// Then they will be global and thus available for all functions to read from or write to.
var namesArray = [];

function addName() {
    // Assign name from the input field to the array
    var addedName = document.getElementById("txtName").value;
    namesArray.push(addedName);
    // Go through the array in a for loop adding each name at the end of the namesText
    for (i = 0; i < namesArray.length; i++) {
        var namesText = namesArray[i];
    }
    // Write the names on the page, to the names div, as content of the div    
    document.getElementById("divNameList").innerHTML += (namesText + ", ");
    // Empty the input field of name as that name was just put in the array
    document.getElementById("txtName").value = "" ;
    // Empty the answer text

}

function makeDraw() {

    // Randomize the index of the winner
    var winningIndex = Math.floor(Math.random() * namesArray.length);
    
    // Write the answer on the page
    document.getElementById("divOutput").innerHTML = "The winner is: " + namesArray[winningIndex] + "!";

}
