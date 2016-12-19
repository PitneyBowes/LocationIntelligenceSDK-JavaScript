/*Copyright 2016 Pitney Bowes Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file 
except in compliance with the License.  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the 
License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  
See the License for the specific language governing permissions and limitations under the License. */
/**
 * A geoMap object
 * @namespace
 */
 GEOAPIS_V1.geoMap = function(apiKey){
	this.apiKey = apiKey;
	GEOAPIS_V1.baseService.call(this, '');
};
/**
 * geoMap inherits baseService
 * @namespace
 */
GEOAPIS_V1_INHERIT(GEOAPIS_V1.baseService, GEOAPIS_V1.geoMap);
/**
 * Get GeoMap (Raster)
 * @param String latitude: map center position latitude (required)
 * @param String longitude: map center position longitude (required)
 * @param String zoom: map zoom level (required)
 * @param String eleId: HTML element Id to render map (required)
 * @param String mapStyle: map style bronze/iron/steel (required)
 * @return map object
 */
GEOAPIS_V1.geoMap.prototype.getGeoMapRaster = function(latitude, longitude, zoom, eleId, mapStyle){
	$('#'+eleId).html('');
	$( '<div></div>', {
		'id': 'geoAPI-geoMap-raster'
	}).appendTo('#'+eleId);
	$( '<div></div>', {
		'id': 'geoAPI-geoMap-raster-logo'
	}).appendTo('#'+eleId);
	$('#geoAPI-geoMap-raster').css('position', 'absolute');
	$('#geoAPI-geoMap-raster').css('width', '100%');
	$('#geoAPI-geoMap-raster').css('height', '100%');
	
	$( '<img/>', {
		'src': 'https://developer2.pitneybowes.com/en/pitneyboweslogo.png'
	}).appendTo('#geoAPI-geoMap-raster-logo');
	$('#geoAPI-geoMap-raster-logo').css('position', 'absolute');
	$('#geoAPI-geoMap-raster-logo').css('bottom', '0px');
	$('#geoAPI-geoMap-raster-logo').css('z-index', '4');

	var map = L.map('geoAPI-geoMap-raster');
	map.setView([latitude, longitude], zoom);
	
	var tmpMapStyle = 'bronze';
	if(mapStyle == 'bronze' || mapStyle == 'iron' || mapStyle == 'steel'){
		tmpMapStyle = mapStyle;
	}
	var tileLayerUrl = this.apiAddress+'/geomap/v1/tile/osm/{z}/{x}/{y}.png?api_key='+this.apiKey+'&theme='+tmpMapStyle;
	var tileLayer = L.tileLayer(tileLayerUrl, {attribution: '<a target="_blank" href="https://carto.com/attributions">&copy; CARTO</a> | <a target="_blank" href="http://www.openstreetmap.org/copyright">&copy; OpenStreetMap contributors</a>'}).addTo(map);
	return map;
};
/**
 * Get GeoMap (Vector)
 * @param String latitude: map center position latitude (required)
 * @param String longitude: map center position longitude (required)
 * @param String zoom: map zoom level (required)
 * @param String eleId: HTML element Id to render map (required)
 * @param String mapStyle: map style bronze/iron/steel (required)
 * @return map object
 */
GEOAPIS_V1.geoMap.prototype.getGeoMapVector = function(latitude, longitude, zoom, eleId, mapStyle){
	var that = this;
	$('#'+eleId).html('');
	$( '<div></div>', {
		'id': 'geoAPI-geoMap-vector'
	}).appendTo('#'+eleId);
	$( '<div></div>', {
		'id': 'geoAPI-geoMap-vector-logo'
	}).appendTo('#'+eleId);
	$('#geoAPI-geoMap-vector').css('position', 'absolute');
	$('#geoAPI-geoMap-vector').css('width', '100%');
	$('#geoAPI-geoMap-vector').css('height', '100%');

	$( '<img/>', {
		'src': 'https://developer2.pitneybowes.com/en/pitneyboweslogo.png'
	}).appendTo('#geoAPI-geoMap-vector-logo');
	$('#geoAPI-geoMap-vector-logo').css('position', 'absolute');
	$('#geoAPI-geoMap-vector-logo').css('bottom', '0px');
	$('#geoAPI-geoMap-vector-logo').css('z-index', '4');

	var map = L.map('geoAPI-geoMap-vector');
	map.setView([latitude, longitude], zoom);

	var tmpMapStyle = 'bronze';
	if(mapStyle == 'bronze' || mapStyle == 'iron' || mapStyle == 'steel'){
		tmpMapStyle = mapStyle;
	}
	var tileLayer = Tangram.leafletLayer({
		scene: 'resources/'+tmpMapStyle+'.yaml',
		attribution: '<a target="_blank" href="https://carto.com/attributions">&copy; CARTO</a> | <a target="_blank" href="http://www.openstreetmap.org/copyright">&copy; OpenStreetMap contributors</a> | <a target="_blank" href="http://mapzen.com">&copy; Mapzen</a>',
		introspection: true
	}).addTo(map);
	return map;
};