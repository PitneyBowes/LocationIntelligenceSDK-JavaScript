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
 * @param Object {address: free-form text} (required), type: string(optional), includeGeometry: string(optional)
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoRisk.prototype.getCrimeRiskByAddress = function(params, callback){
	var apiUrl = '/georisk/v1/crime/byaddress?address='+encodeURIComponent(params.address);
	optionalList = ['type', 'includeGeometry'];
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
 * @param Object {longitude} (required), {latitude} (required), type: string(optional), includeGeometry: string(optional)
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoRisk.prototype.getCrimeRiskByLocation = function(params, callback){
	var apiUrl = '/georisk/v1/crime/bylocation?longitude='+encodeURIComponent(params.longitude)+'&latitude='+encodeURIComponent(params.latitude);
	optionalList = ['type', 'includeGeometry'];
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
 * @param Object {address} (required), richterValue: string(optional), includeGeometry: string(optional)
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoRisk.prototype.getEarthquakeRiskByAddress = function(params, callback){
	var apiUrl = '/georisk/v1/earthquake/byaddress?address='+encodeURIComponent(params.address);
	optionalList = ['richterValue', 'includeGeometry'];
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
 * @param Object {longitude} (required), {latitude} (required), richterValue: string(optional), includeGeometry: string(optional)
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoRisk.prototype.getEarthquakeRiskByLocation = function(params, callback){
	var apiUrl = '/georisk/v1/earthquake/bylocation?longitude='+encodeURIComponent(params.longitude)+'&latitude='+encodeURIComponent(params.latitude);
	optionalList = ['richterValue', 'includeGeometry'];
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
 * Set API URL to get earthquake history
 * @param Object {postCode} (required), startDate: float(optional), endDate: float(optional), minMagnitude: float(optional), maxMagnitude: float(optional), maxCandidates: float(optional)
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoRisk.prototype.getEarthquakeHistory = function(params, callback){
	var apiUrl = '/georisk/v1/earthquakehistory?postCode='+encodeURIComponent(params.postCode);
	optionalList = ['startDate', 'endDate', 'minMagnitude', 'maxMagnitude', 'maxCandidates'];
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
 * @param Object {address} (required), includeZoneDesc: string(optional), includeGeometry: string(optional)
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoRisk.prototype.getFloodRiskByAddress = function(params, callback){
	var apiUrl = '/georisk/v1/flood/byaddress?address='+encodeURIComponent(params.address);
	optionalList = ['includeZoneDesc', 'includeGeometry'];
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
 * Set API URL to post flood risk by address
 * @param Object {preferences: Zone and geometry options (optional), addresses: The address or addresses (required)}
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoRisk.prototype.getAdvancedFloodRiskByAddress = function(params, callback){
	var apiUrl = '/georisk/v1/flood/byaddress';
	postData = '{"preferences":'+params.preferences+', "addresses":'+params.addresses+'}';
	if(callback !== undefined){
		this.callPostApiAsync(apiUrl, postData, callback);
	}
	else{
		this.callPostApi(apiUrl, postData);
		return this.response;
	}
};
/**
 * Set API URL to get flood risk by location
 * @param Object {longitude} (required), {latitude} (required), includeZoneDesc: string(optional), includeGeometry: string(optional)
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoRisk.prototype.getFloodRiskByLocation = function(params, callback){
	var apiUrl = '/georisk/v1/flood/bylocation?longitude='+encodeURIComponent(params.longitude)+'&latitude='+encodeURIComponent(params.latitude);
	optionalList = ['includeZoneDesc', 'includeGeometry'];
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
 * Set API URL to post flood risk by location
 * @param Object {preferences: Zone and geometry options (optional), locations: The location or locations (required)}
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoRisk.prototype.getAdvancedFloodRiskByLocation = function(params, callback){
	var apiUrl = '/georisk/v1/flood/bylocation';
	postData = '{"preferences":'+params.preferences+', "locations":'+params.locations+'}';
	if(callback !== undefined){
		this.callPostApiAsync(apiUrl, postData, callback);
	}
	else{
		this.callPostApi(apiUrl, postData);
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
 * Set API URL to post fire risk by address
 * @param Object {addresses: The address or addresses (required)}
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoRisk.prototype.getAdvancedFireRiskByAddress = function(params, callback){
	var apiUrl = '/georisk/v1/fire/byaddress';
	postData = '{"addresses":'+params.addresses+'}';
	if(callback !== undefined){
		this.callPostApiAsync(apiUrl, postData, callback);
	}
	else{
		this.callPostApi(apiUrl, postData);
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
 * Set API URL to post fire risk by location
 * @param Object {locations: The location or locations (required)}
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoRisk.prototype.getAdvancedFireRiskByLocation = function(params, callback){
	var apiUrl = '/georisk/v1/fire/bylocation';
	postData = '{"locations":'+params.locations+'}';
	if(callback !== undefined){
		this.callPostApiAsync(apiUrl, postData, callback);
	}
	else{
		this.callPostApi(apiUrl, postData);
		return this.response;
	}
};
/**
 * Set API URL to get fire history
 * @param Object {postCode} (required), startDate: float(optional), endDate: float(optional), maxCandidates: float(optional)
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoRisk.prototype.getFireHistory = function(params, callback){
	var apiUrl = '/georisk/v1/earthquakehistory?postCode='+encodeURIComponent(params.postCode);
	optionalList = ['startDate', 'endDate', 'minMagnitude', 'maxMagnitude', 'maxCandidates'];
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

/**
 * Set API URL to get distance to coast by address
 * @param Object {address} (required), maxCandidates: number(optional), waterBodyType: string(optional), searchDistance: float(optional), searchDistanceUnit: string(optional)
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoRisk.prototype.getDistanceToCoastByAddress = function(params, callback){
	var apiUrl = '/georisk/v1/distancetocoast/byaddress?address='+encodeURIComponent(params.address);
	optionalList = ['maxCandidates', 'waterBodyType', 'searchDistance', 'searchDistanceUnit'];
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
 * Set API URL to get distance to coast by location
 * @param Object {longitude} (required), {latitude} (required), maxCandidates: number(optional), waterBodyType: string(optional), searchDistance: float(optional), searchDistanceUnit: string(optional)
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoRisk.prototype.getDistanceToCoastByLocation = function(params, callback){
	var apiUrl = '/georisk/v1/distancetocoast/bylocation?longitude='+encodeURIComponent(params.longitude)+'&latitude='+encodeURIComponent(params.latitude);
	optionalList = ['maxCandidates', 'waterBodyType', 'searchDistance', 'searchDistanceUnit'];
	apiUrl = this.apiGetUrl(params, optionalList, apiUrl);
	if(callback !== undefined){
		this.callApiAsync(apiUrl, callback);
	}
	else{
		this.callApi(apiUrl);
		return this.response;
	}
};