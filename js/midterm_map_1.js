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
            '<h1> Stonehenge</h1>'+
            '</div>'+
            
            '<div id="bodyContent">'+
            'In ancient times, ' +
            'hundreds of years before the dawn of history, ' +
            '<br>lived a strange race of people, the Druids.  '+
            '<p>No one knows who they were or what they were doing, '+
            '<br>but their legacy remains, '+
            '<br>hewn into the living rock, of Stonehenge ... '+
            '<p><b>Stonehenge!</b> Where the demons dwell, '+
            '<br>where the banshees live, and they do live well. '+
            '<br><b>Stonehenge!</b> Where a man"s a man, '+
            '<br>and the children dance, to the pipes of Pan '+
            '<br><b>Hey!</b></p>'+
            '<p>If you don"t get it yet, click here: <a href="https://www.youtube.com/watch?v=qAXzzHM8zLw">'+
            '"Stonehenge"</a> '+
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