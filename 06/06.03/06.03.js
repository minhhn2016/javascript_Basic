// 06.03 JavasScript code

function comparePackages() {

    // assign input field values into a variables
    var numberOfTextMsg = document.getElementById("txtMessages").value;
    var numberOfCallMin = document.getElementById("txtCallTime").value;
    // calculate the costs of the Special Package
    var priceSpecialPkg = 19.90 + numberOfTextMsg * 0.069 + numberOfCallMin * 0.069;

    // If the Special package is cheaper than the All-inclusive package 
    if (priceSpecialPkg < 29.90) {
        // assign text "The Special package (XX.XX) is cheaper than the All-inclusive package (29.90)"
        // to a variable
        document.getElementById("divAnswer").innerHTML = "The Special package " + priceSpecialPkg.toFixed(2) + " is cheaper than the All-inclusive package (29.90)";
    }
        

    // otherwise
    else {
        // assign text "The All-inclusive package (29.90) is cheaper than the Special package (XX.XX)"
        // to a variable
        document.getElementById("divAnswer").innerHTML = "The All-inclusive package (29.90) is cheaper than the Special package " + priceSpecialPkg.toFixed(2);
    }


}