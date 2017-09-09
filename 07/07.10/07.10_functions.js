// 07.10_functions JavasScript code

// Define here the following functions: allCapsTitleTrimmed(originalText) and isSunday(dateText). 
function allCapsTitleTrimmed(originalText) {
    var modifiedText = originalText.trim().toUpperCase();    
    return modifiedText;
    
}

function isSunday(dateText) {
    dateText = document.getElementById("txtDate").value;

    var dayText = dateText.substr(0, 2);
    var monthText = dateText.substr(3, 2);
    var yearText = dateText.substr(6, 4);

    var asDate = new Date();
    var day = asDate.setDate(dayText);
    var month = asDate.setMonth(monthText - 1);
    var year = asDate.setFullYear(yearText);
    var dayOfWeek = asDate.getDay();

    if (dayOfWeek === 0) {
        return true;
    }
    else {
        return false;
    }
}






