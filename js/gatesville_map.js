function initialize() {
	var towncenter = new google.maps.LatLng(31.4351600,-97.7439100)
	var mapOptions = {
		zoom: 15,
		center: towncenter,
		mapTypeId: google.maps.MapTypeId.HYBRID
	};
	var map = new google.maps.Map(
		document.getElementById("map_canvas"),
		mapOptions);
}