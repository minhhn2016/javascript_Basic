/*jslint browser:true */
/*global console */
/*global window*/

function calFine() {
    "use strict";

    var netIncomeText = document.getElementById("txtNetIncome").value;
    var netIncome = Number(netIncomeText);

    var fine = (netIncome - 255) / 60;

    document.getElementById("fineCalculated").innerHTML = fine.toFixed(2);
}