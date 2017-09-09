// create earth variable to control the map
var earth;

// create the map using webglearth API
function initialize() {
    earth = new WE.map('earth_div');
    earth.setView([46.8011, 8.2266], 3);
    WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(earth);    
}

// show coordinate of the current center of the map in a pop-up
function showCoords() {
    alert(earth.getCenter());
}

function goHome() {
    // create a marker on the map
    var marker = WE.marker([60.24479, 24.86768]).addTo(earth);
    marker.bindPopup("This is my home", { maxWidth: 150, closeButton: true }).openPopup();

    // change view to my home location
    earth.setView([60.24479, 24.86768]);
    //change zoom level
    earth.setZoom(11);
}