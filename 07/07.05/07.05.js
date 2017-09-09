// 07.05 JavasScript code

// (1) Write below a new function called calculateSalary
function calculateSalary(hours, hourlySalary) {
    //calculate salary
    var grossSalary = hours * hourlySalary;

    //return the gross salary with the reutnr satement
    return grossSalary;
}




// (2) Complete the code of the function showGrossSalary
function showGrossSalary() {
    
    // 1. Get values from the input fields
    var hoursText = document.getElementById("txtHours").value;
    var hours = Number(hoursText);
    var hourlySalaryText = document.getElementById("txtHourlySalary").value;
    var hourlySalary = Number(hourlySalaryText);

    // 2. Call the calculateSalary function
    var salary = calculateSalary(hours, hourlySalary);

    // 3. Display the answer
    var outputText = "Salary is " + salary.toFixed(2) + " euros.";
    document.getElementById("divOutput").innerHTML = outputText;
}



