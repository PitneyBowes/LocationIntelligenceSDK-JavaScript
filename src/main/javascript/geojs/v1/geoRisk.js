/*Copyright 2016 Pitney Bowes Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file 
except in compliance with the License.  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the 
License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  
See the License for the specific language governing permissions and limitations under the License. */
/**
 * A geoRiskobject
 * @namespace
 */
 GEOAPIS_V1.geoRisk = function(accessToken){
	GEOAPIS_V1.baseService.call(this, accessToken);
};
/**
 * geoRisk inherits baseService
 * @namespace
 */
GEOAPIS_V1_INHERIT(GEOAPIS_V1.baseService, GEOAPIS_V1.geoRisk);
/**
 * Set API URL to get crime risk by address
 * @param Object {address: free-form text} (required), type: string(optional)
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoRisk.prototype.getCrimeRiskByAddress = function(params, callback){
	var apiUrl = '/georisk/v1/crime/byaddress?address='+encodeURIComponent(params.address);
	optionalList = ['type'];
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
 * Set API URL to get crime risk by location
 * @param Object {longitude} (required), {latitude} (required), type: string(optional)
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoRisk.prototype.getCrimeRiskByLocation = function(params, callback){
	var apiUrl = '/georisk/v1/crime/bylocation?longitude='+encodeURIComponent(params.longitude)+'&latitude='+encodeURIComponent(params.latitude);
	optionalList = ['type'];
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
 * Set API URL to get earthquake risk by address
 * @param Object {address} (required), richterValue: string(optional)
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoRisk.prototype.getEarthquakeRiskByAddress = function(params, callback){
	var apiUrl = '/georisk/v1/earthquake/byaddress?address='+encodeURIComponent(params.address);
	optionalList = ['richterValue'];
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
 * Set API URL to get earthquake risk by location
 * @param Object {longitude} (required), {latitude} (required), richterValue: string(optional)
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoRisk.prototype.getEarthquakeRiskByLocation = function(params, callback){
	var apiUrl = '/georisk/v1/earthquake/bylocation?longitude='+encodeURIComponent(params.longitude)+'&latitude='+encodeURIComponent(params.latitude);
	optionalList = ['richterValue'];
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
 * Set API URL to get flood risk by address
 * @param Object {address} (required), includeZoneDesc
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoRisk.prototype.getFloodRiskByAddress = function(params, callback){
	var apiUrl = '/georisk/v1/flood/byaddress?address='+encodeURIComponent(params.address);
	optionalList = ['includeZoneDesc'];
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
 * Set API URL to get flood risk by location
 * @param Object {longitude} (required), {latitude} (required), includeZoneDesc
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoRisk.prototype.getFloodRiskByLocation = function(params, callback){
	var apiUrl = '/georisk/v1/flood/bylocation?longitude='+encodeURIComponent(params.longitude)+'&latitude='+encodeURIComponent(params.latitude);
	optionalList = ['includeZoneDesc'];
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
 * Set API URL to get fire risk by address
 * @param Object {address} (required)
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoRisk.prototype.getFireRiskByAddress = function(params, callback){
	var apiUrl = '/georisk/v1/fire/byaddress?address='+encodeURIComponent(params.address);
	if(callback !== undefined){
		this.callApiAsync(apiUrl, callback);
	}
	else{
		this.callApi(apiUrl);
		return this.response;
	}
};
/**
 * Set API URL to get fire risk by location
 * @param Object {longitude} (required), {latitude} (required)
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoRisk.prototype.getFireRiskByLocation = function(params, callback){
	var apiUrl = '/georisk/v1/fire/bylocation?longitude='+encodeURIComponent(params.longitude)+'&latitude='+encodeURIComponent(params.latitude);
	if(callback !== undefined){
		this.callApiAsync(apiUrl, callback);
	}
	else{
		this.callApi(apiUrl);
		return this.response;
	}
};

/**
 * Set API URL to get firestation risk by address
 * @param Object {address} (required), maxCandidates: number(optional), travelTime: float(optional), travelTimeUnit: string(optional), travelDistance: float(optional), travelDistanceUnit: string(optional), sortBy: string(optional)
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoRisk.prototype.getFireStationByAddress = function(params, callback){
	var apiUrl = '/georisk/v1/firestation/byaddress?address='+encodeURIComponent(params.address);
	optionalList = ['maxCandidates', 'travelTime', 'travelTimeUnit', 'travelDistance', 'travelDistanceUnit', 'sortBy'];
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
 * Set API URL to get firestation by location
 * @param Object {longitude} (required), {latitude} (required), maxCandidates: number(optional), travelTime: float(optional), travelTimeUnit: string(optional), travelDistance: float(optional), travelDistanceUnit: string(optional), sortBy: string(optional)
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoRisk.prototype.getFireStationByLocation = function(params, callback){
	var apiUrl = '/georisk/v1/firestation/bylocation?longitude='+encodeURIComponent(params.longitude)+'&latitude='+encodeURIComponent(params.latitude);
	optionalList = ['maxCandidates', 'travelTime', 'travelTimeUnit', 'travelDistance', 'travelDistanceUnit', 'sortBy'];
	apiUrl = this.apiGetUrl(params, optionalList, apiUrl);
	if(callback !== undefined){
		this.callApiAsync(apiUrl, callback);
	}
	else{
		this.callApi(apiUrl);
		return this.response;
	}
};