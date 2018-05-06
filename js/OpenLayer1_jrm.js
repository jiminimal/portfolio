// OpenLayer1_jrm.js

var myMap = new ol.Map({
	target: 'map',
	layers: [
		new ol.layer.Tile({
			source: new ol.source.OSM()
		})
	],
	view: new ol.View({
		center: ol.proj.fromLonLat([-108.7426, 35.5281]),
		zoom: 13
		})
	});