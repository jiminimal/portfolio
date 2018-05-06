// OpenLayers_01.js


,

  var pipe = new ol.layer.Tile({
target: 'map'
    source: new ol.source.TileWMS({
    url: 'http://internetmapping.net:8080/geoserver/wms?',
      params: {
        LAYERS: 'jmarkham:PIPE',
        FORMAT: 'image/png',
        TRANSPARENT: true
        },
      })
    })