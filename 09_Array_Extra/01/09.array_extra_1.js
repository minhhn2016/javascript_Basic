// create an array to store aphorisms
var aphorismArray = ["Pray that success will not come any faster than you are able to endure it.",
                     "Women are never disarmed by compliments. Men always are. That is the difference between the sexes.",
                     "A friend is one who has the same enemies as you have.",
                     "The world of reality has its limits; the world of imagination is boundless.",
                     "Life is short. The sooner a man begins to enjoy his wealth the better."];

// randomize an index for the array
var randomIndex = Math.floor(Math.random() * aphorismArray.length);

// display the randomized aphorism on the html page
document.getElementById("txtAphorism").innerHTML = aphorismArray[randomIndex];
 


// End