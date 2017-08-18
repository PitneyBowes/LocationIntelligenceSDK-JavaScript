/*Copyright 2016 Pitney Bowes Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file 
except in compliance with the License.  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the 
License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  
See the License for the specific language governing permissions and limitations under the License. */

/**
 * A geoEnrich object
 * @namespace
 */
GEOAPIS_V1.geoEnrich = function(accessToken){
	GEOAPIS_V1.baseService.call(this, accessToken);
};
/**
 * geoEnrich inherits baseService
 * @namespace
 */
GEOAPIS_V1_INHERIT(GEOAPIS_V1.baseService, GEOAPIS_V1.geoEnrich);
/**
 * Set API URL to get address
 * @param Object {latitude: float(required), longitude: float(required), searchRadius: number(optional), searchRadiusUnit: string(optional)}
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoEnrich.prototype.getAddress = function(params, callback){
	var apiUrl = '/geoenrich/v1/address/bylocation?latitude='+encodeURIComponent(params.latitude)+'&longitude='+encodeURIComponent(params.longitude),
	optionalList = ['searchRadius', 'searchRadiusUnit'];
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
 * Set API URL to get place
 * @param Object {latitude: float(required), longitude: float(required), levelHint: number(optional)}
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoEnrich.prototype.getPlace = function(params, callback){
	var apiUrl = '/geoenrich/v1/place/bylocation?latitude='+encodeURIComponent(params.latitude)+'&longitude='+encodeURIComponent(params.longitude),
	optionalList = ['levelHint'];
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
 * Set API URL to get POIs
 * @param Object {latitude: float(required), longitude: float(required), category: number(optional), searchRadius: number(optional), maxCandidates: number(optional), searchRadiusUnit: string(optional), searchPriority: string(optional), searchDataset: string(optional)}
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoEnrich.prototype.getPOI = function(params, callback){
	var apiUrl = '/geoenrich/v1/poi/bylocation?latitude='+encodeURIComponent(params.latitude)+'&longitude='+encodeURIComponent(params.longitude),
	optionalList = ['category', 'searchRadius', 'maxCandidates', 'searchRadiusUnit', 'searchPriority', 'searchDataset', 'brandName', 'travelTime', 'travelTimeUnit', 'travelDistance', 'travelDistanceUnit', 'mode'];
	apiUrl = this.apiGetUrl(params, optionalList, apiUrl);
	if(callback !== undefined){
		this.callApiAsync(apiUrl, callback);
	}
	else{
		this.callApi(apiUrl);
		return this.response;
	}
};