function initialize() {
	var basemap = new google.maps.LatLng(31.4351600,-97.7439100)
	
var mapOptions = {
		zoom: 15,
		center: basemap,
		mapTypeId: google.maps.MapTypeId.HYBRID
	};
	var map = new google.maps.Map(
		document.getElementById("map_canvas"),
		mapOptions);
}

