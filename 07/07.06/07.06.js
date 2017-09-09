// 07.06 JavasScript code

// Define a function (1.) 
function maxReimbursement(visitLength) {
    var time = parseInt(visitLength, 10);
    var reimbursement;

    //condition to get the correct reimbursement amount
    if (time <= 10) {
        reimbursement = 8;
    }
    else if (time > 10 && time <= 20) {
        reimbursement = 11;
    }
    else if (time > 20 && time <= 30) {
        reimbursement = 13.5;
    }
    else if (time > 30 && time <= 45) {
        reimbursement = 16.5;
    }
    else if (time > 45 && time <= 60) {
        reimbursement = 21;
    }
    else {
        alert("Please enter a valid number of minutes between 0 - 60!");
    }
    return reimbursement;
}

// Define a function (2.) 
function calculateFeeAfterReimbursement(doctorFee, maxReimbursement) {
    var fee = parseFloat(doctorFee);
    var reimbursement = parseInt(maxReimbursement, 10);

    //calculate amount customer need to pay
    var customerPay = 15.9 + fee - reimbursement;
    return customerPay;
}

// Define a function (3.) 


// Complete the code of the function calculate.
function calculate() {

    // 1. Get values from the input fields
    var visitTime = document.getElementById("txtLength").value;
    var doctorFee = document.getElementById("txtDoctorsFee").value;

    // 2. Call the function (1.) which calculates Kela reimbursement 
    var kelaReimbursement = maxReimbursement(visitTime);

    // 3. Call the function (2.) which calculates amount left for the customer to pay
    var customerPay = calculateFeeAfterReimbursement(doctorFee, kelaReimbursement);
    var answer = "Doctor's Fee is " + doctorFee + " euros. <br /> Kela reimbursement is " + kelaReimbursement + " euros. <br /> Office Fee is 15.90 euros. <br /> Customer needs to pay " + customerPay.toFixed(2) + " euros.";

    // 4. Display the answer    
    document.getElementById("divOutput").innerHTML = answer;
}