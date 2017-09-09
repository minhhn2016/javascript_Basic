function addImg() {
    // create a new variable for img element 
    var img = document.createElement("img");
    // link the img to hh logo
    img.src = "http://www.haaga-helia.fi/sites/all/themes/haagahelia/images/logo.png";
    // append img element to html's div
    document.getElementById("images").appendChild(img)

}