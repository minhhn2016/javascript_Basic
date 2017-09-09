// 10.05 JavasScript code

// Create an array of Course objects
var courses = [ 
    // INSERT THE SWD1TTF001 COURSE HERE
    { "name": "Programming", "code": "SWD1TF002", "extent": "5", "timing": "2.semester" }, 
    { "name": "Data management and databases", "code": "SWD1TF003", "extent":"5", "timing": "2.semester" }, 
    { "name": "Mobile development project", "code": "SWD1TF004", "extent": "10", "timing": "3.semester" }
];
var jsonString = JSON.stringify(courses);
var outputText = "";
var coursesObject = JSON.parse(jsonString);
function listCourses() {
    // INSERT YOUR CODE HERE
    for (var i = 0; i < coursesObject.length; i++) {
        outputText += "Code: " + coursesObject[i].code +
                        "<br />Name: " + coursesObject[i].name +
                        "<br />Extent: " + coursesObject[i].extent +
                        "<br />Timing: " + coursesObject[i].timing + "<br />" + "<br />";
    }
    document.getElementById("divOutput").innerHTML = outputText;
}

// INSERT YOUR CODE HERE
listCourses();
