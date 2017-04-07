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
	GEOAPIS_V1.baseService.call(this, '');
	this.apiKey = apiKey;
};
/**
 * geoMap inherits baseService
 * @namespace
 */
GEOAPIS_V1_INHERIT(GEOAPIS_V1.baseService, GEOAPIS_V1.geoMap);
/**
 * Get GeoMap
 * @param Object initialView: this object contains information about initial view. It has three properties {latitude: float, longitude: float, zoom: number} (required)
 * @param String eleId: HTML element Id to render map (required)
 * @return map object
 */
GEOAPIS_V1.geoMap.prototype.getGeoMap = function(initialView, eleId){
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
	map.setView([initialView.latitude, initialView.longitude], initialView.zoom);
	return map;
};
/**
 * Get GeoMap (Raster)
 * @param Object mapObj: map object to render raster tile layer (required)
 * @param String mapStyle: map style bronze/iron/steel (optional)
 * @return map object
 */
GEOAPIS_V1.geoMap.prototype.getGeoMapRaster = function(mapObj, mapStyle){
	var tmpMapStyle = 'bronze',
	tileLayerUrl,
	tileLayer;
	if(mapStyle == 'bronze' || mapStyle == 'iron' || mapStyle == 'steel'){
		tmpMapStyle = mapStyle;
	}
	tileLayerUrl = this.apiAddress+ '/geomap/v1/tile/osm/{z}/{x}/{y}.png?api_key=' +this.apiKey+ '&theme=' +tmpMapStyle;
	tileLayer = L.tileLayer(tileLayerUrl, {attribution: '<a target="_blank" href="https://carto.com/attributions">&copy; CARTO</a> | <a target="_blank" href="http://www.openstreetmap.org/copyright">&copy; OpenStreetMap contributors</a>'}).addTo(mapObj);
	return mapObj;
};
/**
 * Get GeoMap (Vector)
 * @param Object mapObj: map object to render vector tile layer (required)
 * @param String mapStyle: map style bronze/iron/steel (optional)
 * @return map object
 */
GEOAPIS_V1.geoMap.prototype.getGeoMapVector = function(mapObj, mapStyle){
	var tmpMapStyle = 'bronze',
	tileLayer;
	if(mapStyle == 'bronze' || mapStyle == 'iron' || mapStyle == 'steel'){
		tmpMapStyle = mapStyle;
	}
	tileLayer = Tangram.leafletLayer({
		scene: 'resources/'+tmpMapStyle+'.yaml',
		attribution: '<a target="_blank" href="https://carto.com/attributions">&copy; CARTO</a> | <a target="_blank" href="http://www.openstreetmap.org/copyright">&copy; OpenStreetMap contributors</a> | <a target="_blank" href="http://mapzen.com">&copy; Mapzen</a>',
		introspection: true
	}).addTo(mapObj);
	return mapObj;
};