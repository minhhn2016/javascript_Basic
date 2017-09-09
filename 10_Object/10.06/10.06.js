// 10.06 JavasScript code

// Data (a single string) in the JSON (JavaScript Object Notation) format.
var jsonText = '[' + 
    '{ "number": 1, "name": "Samsung Smart LED-TV", "price": 449.00, "description": "HD-digi ready" },' +
    '{ "number": 2, "name": "Samsung 2.1 SoundBar Home Theater", "price": 198.00, "description": "Connect to TV and stream music wireless" },' +
    '{ "number": 3, "name": "Dilog CI+/CA module for pay-tv-cards", "price": 63.90, "description": "CI+ module for the table televisions" }' +
']';

var outputText =  "";

function listProducts() {
    // 1. Parse the JSON text into Javascript objects (3 Product objects in an array). See the hints in the task description.
    var productsObject = JSON.parse(jsonText);

    // 2. Create the text to be displayed on the web page. See the hints in the task description.
    for (var i = 0; i < productsObject.length; i++) {
        outputText += "Number: " + productsObject[i].number +
                        "<br />Name: " + productsObject[i].name +
                        "<br />Price: " + productsObject[i].price +
                        "<br />Description: " + productsObject[i].description + "<br />" + "<br />";
    }
    

    // 3. Write the output text to the web page.
    document.getElementById("divOutput").innerHTML = outputText;
}

// INSERT YOUR CODE HERE
listProducts();		

