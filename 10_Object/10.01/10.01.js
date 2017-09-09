// 10.01 JavasScript code

//  Create a JavaScript object that includes facts about one student
var student = {
    // INSERT YOUR CODE HERE    
    studentNumber: "a1234567",
    studentName: "Virtanen Pekka",
    studentAddress: "Virtakatu 11, 1234 Virtala"
    
};

function showStudentName(name) {

    // INSERT YOUR CODE HERE
    var name = student.studentName;
    return name;
}

// INSERT YOUR CODE HERE
function showStudentAddress(address) {
    var address = student.studentAddress;
    return address;
}

student.studentDOB = "24.12.1990"; // adding DOB property to the student object

document.getElementById("divOutput").innerHTML = "Student Name: " + showStudentName() +
                                                    "<br />Address: " + showStudentAddress() +
                                                    "<br />Date of birth: " + student.studentDOB;

