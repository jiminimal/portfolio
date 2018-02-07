
function initialize() {
var map;

function initMap() {

map = new google.maps.Map(document.getElementById('map'), {

center: {lat: 31.4351600, lng: -97.7439100},

zoom: 8

mapTypeId: google.maps.MapTypeId.HYBRID
};
var map = new google.maps.Map(
document.getElementById("map_canvas"),
mapOptions);
}