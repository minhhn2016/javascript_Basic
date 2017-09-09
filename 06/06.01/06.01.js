// 06.01 JavasScript code

function calculateFee() {

    // Read value from the input field
    var price = document.getElementById("txtPrice").value;    
    // Calculate fee, save the result to a variable
    var fee = price / 100 * 3.44;
    // If the fee is under minimum, change the fee
    if (fee <= 2400) {
        fee = 2400;
    }
    // Write the answer on the page, to the divFeeOutput div, as content of the div
    document.getElementById("divAnswer").innerHTML = "Real estate agent's fee is " + fee + " euros";
   
}


