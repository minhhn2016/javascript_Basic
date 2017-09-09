// 08.06 JavasScript code

function showComparisonScores() {
    var outputText = "";
    var votes = Number(document.getElementById("txtVotes").value);
    var numberOfCandidates = Number(document.getElementById("txtCandidates").value);
    // For each candidate
    for (var i = 1; i <= numberOfCandidates; i++) {
        // Calculate comparison score for the candidate
        var score = votes / i;
        
        outputText +=  i + ". candidate: " + score.toFixed(0) + "<br />";
    }     


    // Show scores
    document.getElementById("pOutput").innerHTML = outputText;

}
