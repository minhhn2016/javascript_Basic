/*jslint browser:true */
/*global console */
/*global window*/


function calRent() {
    "use strict";

    var rentText = document.getElementById("txtRent").value;
    var rent = Number(rentText);
    var participantsText = document.getElementById("txtParticipants").value;
    var participants = Number(participantsText);

    var result = rent / participants;
    document.getElementById("txtResult").innerHTML = result.toFixed(2);
}