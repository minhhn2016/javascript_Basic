// 09.04 JavasScript code

// Create an array with minigolf results of eight players 
// (23, 19, 37, 20, 21, 30, 26, 24)
var resultArray = [23, 19, 37, 20, 21, 30, 26, 24];


// Sort the array
resultArray.sort()


// Assign the smallest result to a variable
var min = resultArray[0];


// Assign the biggest result to a variable
var max = resultArray[resultArray.length - 1];



// Write the answer on the page
document.getElementById("pOutput").innerHTML = "The smallest point a player got was: " + min + "</ br> The biggest point a player got was: " + max;


