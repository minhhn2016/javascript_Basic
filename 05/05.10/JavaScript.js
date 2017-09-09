/*jslint browser:true */
/*global console */
/*global window*/

function calCosts() {
    "use strict";

    var kmText = document.getElementById("txtKm").value;
    var km = Number(kmText);
    var fuelPerKmText = document.getElementById("txtFuelPerKm").value;
    var fuelPerKm = Number(fuelPerKmText);
    var fuelPriceText = document.getElementById("txtFuelPrice").value;
    var fuelPrice = Number(fuelPriceText);
    var participantsText = document.getElementById("txtParticipants").value;
    var participants = Number(participantsText);

    var costs = fuelPerKm / 100 * fuelPrice * km / participants;
    document.getElementById("txtResult").innerHTML = costs.toFixed(2);
}