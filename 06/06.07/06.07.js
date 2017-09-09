// 06.07 JavasScript code

function showStudyGrant() {
    // assign input fields to variables
    var ageText = document.getElementById("txtAge").value;
    var age = Number(ageText);
    var withParents = document.getElementById("txtWithParents").value;

    //if student is (or older than) 20, and lives independently
    if (age >= 20 && withParents === 'n') {
        //display amount of grant in the div
        document.getElementById("divAnswer").innerHTML = "The study grant is 335.20 euros";
    }
    //if student is (or older than) 20, and lives with parents
    else if (age >= 20 && withParents === 'y') {
        //display amount of grant in the div
        document.getElementById("divAnswer").innerHTML = "The study grant is 136,70 euros";
    }
    //otherwise
    else {
        document.getElementById("divAnswer").innerHTML = "Ask Kela";
    }
}


//test example:
//age = 20, withParents = n -> studyGrant = 335.20 euros
//age = 20, withParents = y ->  studyGrant = 136.70 euros
//age = 18, withParents = y -> studyGrant = Ask Kela
