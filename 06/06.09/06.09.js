// 06.09 JavasScript code

function tellInfractionFine() {
    var outputText;

    //assign input fields to variables
    var drivingSpeedText = document.getElementById("txtDrivingSpeed").value;
    var drivingSpeed = Number(drivingSpeedText);
    var speedLimitText = document.getElementById("txtSpeedLimit").value;
    var speedLimit = Number(speedLimitText);
    
    //calculate excess speed
    var excessSpeed = drivingSpeed - speedLimit;

    //display amount and type of fine
    if (excessSpeed <= 0) {
        outputText = "No speeding, no fine.";
    }
    else if ((speedLimit >= 10 && speedLimit <= 60) && excessSpeed <= 15) {
        outputText = "Infraction fine is 85 euros";
    }
    else if ((speedLimit >= 10 && speedLimit <= 60) && (excessSpeed >= 15 && excessSpeed <= 20)) {
        outputText = "Infraction fine is 115 euros";
    }
    else if ((speedLimit >= 70 && speedLimit <= 120) && excessSpeed <= 15) {
        outputText = "Infraction fine is 70 euros";
    }
    else if ((speedLimit >= 10 && speedLimit <= 60) && (excessSpeed >= 15 && excessSpeed <= 20)) {
        outputText = "Infraction fine is 100 euros";
    }
    else {
        outputText = "Income-based unit fine";
    }

    //display the message in the div
    document.getElementById("divAnswer").innerHTML = outputText;
    
}