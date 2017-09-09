// 08.05 JavasScript code
	
function showWeightGoals() {
    // Read the original weight to a variable.
    var weightText = document.getElementById("txtWeight").value;
    var weight = Number(weightText);
    // Calculate how many kgs one should get lighter each week = weight * 0.1 / 7
    var weeklyWeightToReduce = weight * 0.1 / 7;
    // Initialize output text variable to start from empty text: "" 
    var outputText = "";
    // It will be used later to gather all the output lines. (String can hold also line breaks) 
    
    
    
    
    for (var i = 1; i <= 7; i++) { 
     	// Give the weight variable a new value which is weight after last
        // measurement reduced by the how much to lose this week.
        weight -= weeklyWeightToReduce;
        // Add this week’s text + line break to the output text variable 
        outputText += "After " + i + " week " + weight.toFixed(1) + " kg.<br />";
    
        
    
    } 

        
    // Write the whole output text to the HTML page at once
    document.getElementById("pOutput").innerHTML = outputText;
    
}
