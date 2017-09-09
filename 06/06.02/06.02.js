// 06.02 JavasScript code

function checkAge() {
		
    // Assign the age input field value into a variable
    var age = document.getElementById("txtAge").value;
    // if the age is smaller than 18
    if (age < 18) {
        // assign text "Adolescents are not allowed to play." to a variable
        document.getElementById("divAnswer").innerHTML = "Adolescents are not allowed to play."
    }

    // otherwise
    else {
        // assign text "Old enough to play." to a variable  
        document.getElementById("divAnswer").innerHTML = "Old enough to play.";
    }  
		
}