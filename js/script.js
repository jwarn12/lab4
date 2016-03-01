//creates a map object and sets lat/lon center and zoom level
var map = L.map('map').setView([35, -100], 5);

//creates an object called streets based on the basemap and adds it to map
var streets = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);

//creates an object called precipitation populated with precipitation data	
var precipitation = L.tileLayer.wms("http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi", {
    layers: 'nexrad-n0r-900913',
    format: 'image/png',
    transparent: true,
    attribution: "Weather data © 2012 IEM Nexrad"
}).addTo(map);

//creates an object called sst populated with sea surface temperature data
var sst = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/analysis_ocean_sfc_sst_time/MapServer/WMSServer", {
    layers: '5',
    format: 'image/png',
    transparent: true,
	opacity: 0.5,
    attribution: "NOAA"
}).addTo(map);	 

//creates an object called maxtemp populated with max daily air temp
var maxtemp = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/forecast_meteoceanhydro_sfc_ndfd_dailymaxairtemp_offsets/MapServer/WMSServer", {
    layers: '1',
    format: 'image/png',
    transparent: true,
	opacity: 0.5,
    attribution: "NOAA"
}).addTo(map);


//creates an object with layers for each basemap (displays basemap but does not make it 
//selectable)
var baselayers = {};

//creates an object with layers for each object created above
var overlays = {
	"Precipitation": precipitation,
	"Sea Surface Temperature": sst,
	"Max Daily Temperature": maxtemp
};

//adds basemaps and overlay layers to map
L.control.layers(baselayers, overlays).addTo(map);
