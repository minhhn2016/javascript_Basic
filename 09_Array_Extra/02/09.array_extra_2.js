"use strict";
    // create an array to store all the blood types, and needed variables
    var bloodTypes = ["A+", "O-", "AB+", "O+", "AB+", "AB+", "O-", "AB+", "O+", "AB+"];
    var outputText = "";
    var countBloodType = 0;


function checkBloodType() {
    var enteredBloodType = document.getElementById("txtBloodType").value;   // create a variable to hold the user input value
    var indexOfBloodType = bloodTypes.indexOf(enteredBloodType);            // get the idex of the first matched user input from the array
    if (indexOfBloodType < 0) {                                             // check if the user input is valid
        outputText = "Please enter a valid blood type among: A+, O-, AB+, O+ !"
    }
    else {
        for (var i = 0; i < bloodTypes.length; i++) {                       // loop through the array
            if (enteredBloodType === bloodTypes[i]) {
                countBloodType++;                                           // increase the count of matched input inside the array
            }
            var percentageOfBloodType = countBloodType / bloodTypes.length * 100    // calculate the percentage of input inside the array
            outputText = enteredBloodType + " " + percentageOfBloodType.toFixed(2) + " percent";    // modify the outputText accordingly
            
        }
        countBloodType = 0;                                                 // reset the count of matched input
    }
     
    document.getElementById("txtOutput").innerHTML = outputText;
}