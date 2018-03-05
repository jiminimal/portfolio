function initialize() {
	var mapcenter = new google.maps.LatLng(51.178884,-1.826214)
	var mapOptions = {
		zoom: 18,
		center: mapcenter,
		mapTypeId: google.maps.MapTypeId.SATELLITE
	};
	var map = new google.maps.Map(
		document.getElementById("map_canvas"),
		mapOptions);

// infobox

var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Stonehenge</h1>'+
            '<div id="bodyContent">'+
            '<p>In ancient times, ' +
            'hundreds of years before the dawn of history. ' +
            'lived a strange race of people, the Druids.  '+
            '<p>No one knows who they were or what they were doing, '+
            'but their legacy remains, '+
            'hewn into the living rock, of Stonehenge ... '+
            '<p><b>Stonehenge!</b> Where the demons dwell '+
            'where the banshees live and they do live well '+
            '<b>Stonehenge!</b> Where a man"s a man '+
            'and the children dance, to the pipes of Pan '+
            '<b>Hey!</b></p>'+
            '<p>If you don"t get yet it click here to watch: <a href="https://www.youtube.com/watch?v=qAXzzHM8zLw">'+
            '"Stonehenge" by Spinal Tap, on YouTube</a> '+
            '</p>'+
            '</div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });


// end infobox

// add a marker
          var mapcenterMarker = new google.maps.Marker({
            position: mapcenter,
            map: map,
            title: 'Stonehenge'
            });
          mapcenterMarker.setMap(map);

     // end of marker 
 mapcenterMarker.addListener('click', function() {
          infowindow.open(map, mapcenterMarker);
        });


    

};