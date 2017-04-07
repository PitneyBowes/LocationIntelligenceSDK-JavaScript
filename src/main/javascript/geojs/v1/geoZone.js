/*Copyright 2016 Pitney Bowes Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file 
except in compliance with the License.  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the 
License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  
See the License for the specific language governing permissions and limitations under the License. */
/**
 * A geoZone object
 * @namespace
 */
 GEOAPIS_V1.geoZone = function(accessToken){
	GEOAPIS_V1.baseService.call(this, accessToken);
};
/**
 * geoZone inherits baseService
 * @namespace
 */
GEOAPIS_V1_INHERIT(GEOAPIS_V1.baseService, GEOAPIS_V1.geoZone);
/**
 * Set API URL to get Travel boundary by time
 * @param Object {point: string(optional), address: string(optional), country: string(optional), costs: float(required), costUnit: string(optional), db: string(optional), maxOffroadDistance: float(optional), maxOffroadDistanceUnit: string(optional), destinationSrs: string(optional), majorRoads: boolean(optional), returnHoles: boolean(optional), returnIslands: boolean(optional), simplificationFactor: float(optional), bandingStyle: string(optional), historicTrafficTimeBucket: string(optional)}
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoZone.prototype.getTravelBoundaryByTime = function(params, callback){
	var apiUrl =  '/geozone/v1/travelboundary/bytime?costs='+encodeURIComponent(params.costs);
	optionalList = ['costUnit', 'point', 'address', 'country', 'db', 'maxOffroadDistance', 'maxOffroadDistanceUnit', 'destinationSrs', 'majorRoads', 'returnHoles', 'returnIslands', 'simplificationFactor', 'bandingStyle', 'historicTrafficTimeBucket'];
	apiUrl = this.apiGetUrl(params, optionalList, apiUrl);
	if(callback !== undefined){
		this.callApiAsync(apiUrl, callback);
	}
	else{
		this.callApi(apiUrl);
		return this.response;
	}
};
/**
 * Set API URL to get Travel boundary by distance
 * @param Object {point: string(optional), address: string(optional), country: string(optional), costs: float(required), costUnit: string(optional), db: string(optional), maxOffroadDistance: float(optional), maxOffroadDistanceUnit: string(optional), destinationSrs: string(optional), majorRoads: boolean(optional), returnHoles: boolean(optional), returnIslands: boolean(optional), simplificationFactor: float(optional), bandingStyle: string(optional), historicTrafficTimeBucket: string(optional)}
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoZone.prototype.getTravelBoundaryByDistance = function(params, callback){
	var apiUrl =  '/geozone/v1/travelboundary/bydistance?costs='+encodeURIComponent(params.costs);
	optionalList = ['costUnit', 'point', 'address', 'country', 'db', 'maxOffroadDistance', 'maxOffroadDistanceUnit', 'destinationSrs', 'majorRoads', 'returnHoles', 'returnIslands', 'simplificationFactor', 'bandingStyle', 'historicTrafficTimeBucket'];
	apiUrl = this.apiGetUrl(params, optionalList, apiUrl);
	if(callback !== undefined){
		this.callApiAsync(apiUrl, callback);
	}
	else{
		this.callApi(apiUrl);
		return this.response;
	}
};