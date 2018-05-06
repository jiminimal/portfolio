var myNewRotate = new ol.control.Rotate({autoHide:false})
var myScaleLine = new ol.control.ScaleLine()
var myOverviewMap = new ol.control.OverviewMap({collapsible:false, collapsed:false})

var myControls = ol.control.defaults({
	attribution:true,
	rotate:true,
	zoom:true
}).extend([myNewRotate,myScaleLine,myOverviewMap])





	var gallup_map = new ol.Map({
		target: 'mapspace',
		layers: [pipe, valves, hydrant, manhole, daily_work],
controls: myControls,

		view: new ol.View({
			center: ol.proj.fromLonLat([-108.7426, 35.5281]), 
			zoom: 13,
			projection: projection,
			})
		})
		
	
			projection: projection,
			})
		})