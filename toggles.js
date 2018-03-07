// attempt at kml toggle
// toggle the display of the KML Layer 01 
function togglewater_mains() { 
        if (!document.getElementById('show_hide_water_mains').checked) 
                water_mains.setMap(null); 
        else 
                water_mains.setMap(map); 
} 


// end attempt at kml toggle