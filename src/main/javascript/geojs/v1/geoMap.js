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
 GEOAPIS_V1.geoMap = function(accessToken){
	GEOAPIS_V1.baseService.call(this, accessToken);
};
/**
 * geoMap inherits baseService
 * @namespace
 */
GEOAPIS_V1_INHERIT(GEOAPIS_V1.baseService, GEOAPIS_V1.geoMap);
/**
 * Get GeoMap (Raster)
 * @param String mapStyle: map style bronze/iron/steel (required)
 * @param String apiKey: api key for map (required)
 * @param String latitude: map center position latitude (required)
 * @param String longitude: map center position longitude (required)
 * @param String zoom: map zoom level (required)
 * @param String eleId: HTML element Id to render map (required)
 * @return map object
 */
GEOAPIS_V1.geoMap.prototype.getGeoMapRaster = function(mapStyle, apiKey, latitude, longitude, zoom, eleId){
	$('#'+eleId).html('');
	$( '<div></div>', {
		'id': 'geoAPI-geoMap-raster'
	}).appendTo('#'+eleId);
	$('#geoAPI-geoMap-raster').css('position', 'absolute');
	$('#geoAPI-geoMap-raster').css('width', '100%');
	$('#geoAPI-geoMap-raster').css('height', '100%');

	var map = L.map('geoAPI-geoMap-raster');
	map.setView([latitude, longitude], zoom);

	var tileLayerUrl = this.apiAddress+'/geomap/v1/tile/osm/{z}/{x}/{y}.png?api_key='+apiKey+'&theme='+mapStyle;
	var tileLayer = L.tileLayer(tileLayerUrl, {attribution: '<a target="_blank" href="https://carto.com/attributions">CARTO</a> | &copy; OSM contributors | <a target="_blank" href="http://mapzen.com/attributions">Mapzen</a>'}).addTo(map);
	return map;
};
/**
 * Get GeoMap (Vector)
 * @param String mapStyle: map style bronze/iron/steel (required)
 * @param String apiKey: api key for map (required)
 * @param String latitude: map center position latitude (required)
 * @param String longitude: map center position longitude (required)
 * @param String zoom: map zoom level (required)
 * @param String eleId: HTML element Id to render map (required)
 * @param String format: MVT/GeoJSON (required)
 * @return map object
 */
GEOAPIS_V1.geoMap.prototype.getGeoMapVector = function(mapStyle, apiKey, latitude, longitude, zoom, eleId, format){
	var that = this;
	$('#'+eleId).html('');
	$( '<div></div>', {
		'id': 'geoAPI-geoMap-vector'
	}).appendTo('#'+eleId);
	$('#geoAPI-geoMap-vector').css('position', 'absolute');
	$('#geoAPI-geoMap-vector').css('width', '100%');
	$('#geoAPI-geoMap-vector').css('height', '100%');

	var map = L.map('geoAPI-geoMap-vector');
	map.setView([latitude, longitude], zoom);

	var tileLayer = Tangram.leafletLayer({
		scene: '../../lib/'+mapStyle+'.yaml',
		attribution: '<a target="_blank" href="https://carto.com/attributions">CARTO</a> | &copy; OSM contributors | <a target="_blank" href="http://mapzen.com/attributions">Mapzen</a>',
		introspection: true
	}).addTo(map);

	// set scene of the tangram layer
	var scene = tileLayer.scene;

	// once the scene is completely loaded
	scene.subscribe({
		view_complete: function(){
			scene.config.sources.mapzen.type = format;
			switch(format){
				case "MVT":
					scene.config.sources.mapzen.url = that.apiAddress+ '/geomap/v1/tile/osm/{z}/{x}/{y}.mvt?api_key=' +apiKey;
					break;
				case "GeoJSON":
					scene.config.sources.mapzen.url = that.apiAddress+ '/geomap/v1/tile/osm/{z}/{x}/{y}.geojson?api_key=' +apiKey;
					break;
			}
			scene.rebuild();
		}
	});
	return map;
};