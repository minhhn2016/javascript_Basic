// 07.07 JavasScript code

// Complete the code of the function processName
function processName() {

    // 1. Read value of name from the input field
    var name = document.getElementById("txtName").value;

    // 2. Show it with "ALL CAPS" using toUpperCase()
    var allCaps = "To upper characters: " + name.toUpperCase();
    document.getElementById("divUpperCase").innerHTML = allCaps;
    // 3. Show it with  "all small letters" using toLowerCase()
    var allSmall = "To lower characters: " + name.toLowerCase();
    document.getElementById("divLowerCase").innerHTML = allSmall;
    // 4. Tell how many characters are there (length, includes also all spaces) 
    var length = "Character count: " + name.length;
    document.getElementById("divLength"), innerHTML = length;
    // 5. Tell, whether the input string contains the word 'muumi'
    var checkString = name.indexOf("muumi");
    if (checkString >= 0) {
        document.getElementById("divContains").innerHTML = "Does contain the word 'muumi'";
    } 
    else {
        document.getElementById("divContains").innerHTML = "Doesn't contain the word 'muumi'";
    }

    // 6. Tell the first character using charAt()
    var firstChar = name.charAt(0);
    document.getElementById("divFirstCharacter").innerHTML = "First character: " + firstChar;

    // 7. Tell which ones are the first three characters using substr().
    var firstThreeChar = name.substr(0, 3);
    document.getElementById("divManyCharacters").innerHTML = "First three characters: " + firstThreeChar;
}