var nameArray = [];
var ageArray = [];
var minorList = "";
var adultList = "";
var oldestList = "";
var youngestList = "";

function saveMember() {
    nameArray.push(document.getElementById("txtName").value);
    ageArray.push(document.getElementById("txtAge").value);    
    document.getElementById("pNumberOfMembers").innerHTML = nameArray.length + " member(s)";
    document.getElementById("txtName").value = "";
    document.getElementById("txtAge").value = "";
}

function showMinors() {
    document.getElementById("divOutput").innerHTML = "";
    for (var i = 0; i < ageArray.length; i++) {
        if (ageArray[i] < 18) {
            minorList = nameArray[i] + ", " + ageArray[i] + " years <br />";
            document.getElementById("divOutput").innerHTML += minorList;
        }         
    }    
}

function showAdults() {
    document.getElementById("divOutput").innerHTML = "";
    for (var i = 0; i < ageArray.length; i++) {
        if (ageArray[i] >= 18) {
            adultList = nameArray[i] + ", " + ageArray[i] + " years <br />";
            document.getElementById("divOutput").innerHTML += adultList;
        }        
    }     
}

function showOldest() {
    var oldestAge = 0;
    document.getElementById("divOutput").innerHTML = "";
    
    for (var i = 0; i < ageArray.length; i++) {
        oldestAge = Math.max.apply(Math, ageArray);
        if (ageArray[i] >= oldestAge) {             
            oldestAge = ageArray[i];
            oldestList = nameArray[i] + ", " + ageArray[i] + " years <br />";
            document.getElementById("divOutput").innerHTML += oldestList;
        }        
    }
}

function showYoungest() {
    var youngestAge = 0;
    document.getElementById("divOutput").innerHTML = "";
    
    for (var i = 0; i < ageArray.length; i++) {
        youngestAgeAge = Math.min.apply(Math, ageArray);
        if (ageArray[i] <= youngestAgeAge) {             
            youngestAgeAge = ageArray[i];
            youngestList = nameArray[i] + ", " + ageArray[i] + " years <br />";
            document.getElementById("divOutput").innerHTML += youngestList;
        }        
    }
}