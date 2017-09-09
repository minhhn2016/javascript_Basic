// 06.05 JavasScript code

function calculateBMI() {

    //assign values of input field to variables
    var weight = document.getElementById("txtWeight").value;
    var height = document.getElementById("txtHeight").value;

    //calculate BMI
    var bmi = weight / ((height / 100) * (height / 100));

    //if BMI is less than normal
    if (bmi <= 18.4) {
        //display answer in the div
        document.getElementById("divAnswer").innerHTML = "You're under-weight";
    }
    //if BMI is normal
    else if (bmi > 18.4 && bmi < 24.9) {
        //display answer in the div
        document.getElementById("divAnswer").innerHTML = "You're normal weight";
    }
    //otherwise
    else {
        //display answer in the div
        document.getElementById("divAnswer").innerHTML = "You're over-weight";
    }

}
