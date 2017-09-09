// 07.09 JavasScript code

// Complete the code of the function tellAge.
function tellAge() {
    var date = new Date();
    // 1. Read birth year from the input field 
    var dateInputText = document.getElementById("txtBirthYear").value;
    var dateInput = Number(dateInputText);
    // 2. Figure out the current date into today variable 
    var today = date.getDate()

    // 3. Use the getFullYear() method to get the current year out from the today variable
    var year = date.getFullYear();
    
    // 4. Calculate (rough estimate of) the age
    var age = year - dateInput;

    // 5. If age is less than zero, then show an error message, otherwise show the age.
    if (age < 0) {
        alert("Please enter your correct birth year!");
    }
    else {
        document.getElementById("divOutput").innerHTML = "You are now " + age + " years old. <br /> Current year is: " + year + ".";
    }
}