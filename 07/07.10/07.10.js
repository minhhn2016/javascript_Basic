// 07.10 JavasScript code

// Complete the code of the function calculate.
function calculate() {
    var price;
    
    // Calculate length of the work as minutes.
    var startTimeText = document.getElementById("txtStartTime").value;
    var startHour = Number(startTimeText.substr(0, 2));
    var startMinute = Number(startTimeText.substr(3, 4));    
    var startTime = startHour * 60 + startMinute;

    var endTimeText = document.getElementById("txtEndTime").value;
    var endHour = Number(endTimeText.substr(0, 2));
    var endMinute = Number(endTimeText.substr(3, 4));
    var endTime = endHour * 60 + endMinute;

    var timeInMinute = endTime - startTime;

    
    // If it is not Sunday, then
    //     Call isSunday() function from 07.10_functions.js file
    
    
    //     Calculate and show price of the repair work during the workdays,
    if (isSunday() === true) {
        price = timeInMinute / 60 * 72;
        document.getElementById("divOutput").innerHTML = "Length of the work was: " + timeInMinute + " minutes. <br /> The hourly price for Sundays is: 72.00 euros <br /> The Price of this repair works is : " + price.toFixed(2) + " euros.";
    }
    // otherwise
    //     Calculate and show price of the repair work on Sundays
    else {
        price = timeInMinute / 60 * 48;
        document.getElementById("divOutput").innerHTML = "Length of the work was: " + timeInMinute + " minutes. <br /> The hourly price for workdays is: 48.00 euros <br /> The Price of this repair works is : " + price.toFixed(2) + " euros.";
    }

    


}

// Complete the code of the function modifyTitle.
function modifyTitle() {
		
    // Read value of title from the input field
    var titleText = document.getElementById("txtTitle").value;


    // Call allCapsTitleTrimmed() function from 07.10_functions.js file    
    document.getElementById("txtTitle").value = allCapsTitleTrimmed(titleText);
		
}