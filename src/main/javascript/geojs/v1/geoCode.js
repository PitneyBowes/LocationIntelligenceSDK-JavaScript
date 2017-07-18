/*Copyright 2016 Pitney Bowes Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file 
except in compliance with the License.  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the 
License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  
See the License for the specific language governing permissions and limitations under the License. */

/**
 * A geoCode object
 * @namespace
 */
 GEOAPIS_V1.geoCode = function(accessToken){
	GEOAPIS_V1.baseService.call(this, accessToken);
};
/**
 * geoCode inherits baseService
 * @namespace
 */
GEOAPIS_V1_INHERIT(GEOAPIS_V1.baseService, GEOAPIS_V1.geoCode);
/**
 * Set API URL to get capabilities
 * @param Object {bundleType: basic/premium (required), country: string ISO country code(optional), operation: string operation type(optional)}
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoCode.prototype.getCapabilities = function(params, callback){
	var apiUrl = '/geocode-service/v1/transient/' +encodeURIComponent(params.bundleType)+ '/capabilities',
	optionalList = ['country', 'operation'];
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
 * Set API URL to get configure dictionary
 * @param Object {bundleType: basic/premium (required), country: string ISO country code (optional)}
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoCode.prototype.getConfigureDictionary = function(params, callback){
	var apiUrl = '/geocode-service/v1/transient/' +encodeURIComponent(params.bundleType)+ '/dictionaries',
	optionalList = ['country'];
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
 * Set API URL to get forward geocode
 * @param Object {bundleType: basic/premium (required), country: string ISO country code(optional), mainAddress: string (optional), placeName: string (optional), lastLine: string (optional), areaName1: string (optional), areaName2: string (optional), areaName3: string (optional), areaName4: string (optional), postCode1: string (optional), postCode2: string (optional), matchMode: string (optional), fallbackGeo: boolean (optional), fallbackPostal: boolean (optional), maxCands: integer (optional), streetOffset: float (optional), streetOffsetUnits: string (optional), cornerOffset: float (optional), cornerOffsetUnits: string (optional)}
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoCode.prototype.getGeocode = function(params, callback){
	var apiUrl = '/geocode-service/v1/transient/' +encodeURIComponent(params.bundleType)+ '/geocode',
	optionalList = ['country', 'mainAddress', 'placeName', 'lastLine', 'areaName1', 'areaName2', 'areaName3', 'areaName4', 'postCode1', 'postCode2', 'matchMode', 'fallbackGeo', 'fallbackPostal', 'maxCands', 'streetOffset', 'streetOffsetUnits', 'cornerOffset', 'cornerOffsetUnits'];
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
 * Set API URL to get reverse geocode
 * @param Object {bundleType: basic/premium (required), x: float (required), y: float (required), country: string ISO country code (optional), coordSysName: string (optional), distance: float (optional), distanceUnits: string (optional)}
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoCode.prototype.getReverseGeocode = function(params, callback){
	var apiUrl = '/geocode-service/v1/transient/' +encodeURIComponent(params.bundleType)+ '/reverseGeocode?x='+encodeURIComponent(params.x)+'&y='+encodeURIComponent(params.y),
	optionalList = ['country', 'coordSysName', 'distance', 'distanceUnits'];
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
 * Set API URL to post forward geocode
 * @param Object {bundleType: basic/premium (required), type: ADDRESS/GEOGRAPHIC/POSTAL (optional), preferences: The matching and geocoding options (optional), addresses: The address or addresses to be geocoded (required)}
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoCode.prototype.getGeocodeAdvanced = function(params, callback){
	var apiUrl = '/geocode-service/v1/transient/' +encodeURIComponent(params.bundleType)+ '/geocode',
	postData = '{"type": "'+params.type+'", "preferences":'+params.preferences+', "addresses":'+params.addresses+'}';
	if(callback !== undefined){
		this.callPostApiAsync(apiUrl, postData, callback);
	}
	else{
		this.callPostApi(apiUrl, postData);
		return this.response;
	}
};
/**
 * Set API URL to post reverse geocode
 * @param Object {bundleType: basic/premium (required), preferences: The matching options (optional), points: The input coordinates or multiple input coordinates to be reverse geocoded (required)}
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoCode.prototype.getReverseGeocodeAdvance = function(params, callback){
	var apiUrl = '/geocode-service/v1/transient/' +encodeURIComponent(params.bundleType)+ '/reverseGeocode',
	postData = '{"preferences":'+params.preferences+', "points":'+params.points+'}';
	if(callback !== undefined){
		this.callPostApiAsync(apiUrl, postData, callback);
	}
	else{
		this.callPostApi(apiUrl, postData);
		return this.response;
	}
};/**
 * Set API URL to get PB key by address
 * @param Object {address: free-form text} (required), type: string(optional), includeGeometry: string(optional)
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoCode.prototype.getPbKeyByAddress = function(params, callback){
	var apiUrl = '/geocode-service/v1/key/byaddress?address='+encodeURIComponent(params.address);
	if(callback !== undefined){
		this.callApiAsync(apiUrl, callback);
	}
	else{
		this.callApi(apiUrl);
		return this.response;
	}
};
/**
 * Set API URL to post PB key by address
 * @param Object {addresses: The address or addresses (required)}
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoCode.prototype.getPbKeyByAddressAdvance = function(params, callback){
	var apiUrl = '/geocode-service/v1/key/byaddress';
	postData = '{"addresses":'+params.addresses+'}';
	if(callback !== undefined){
		this.callPostApiAsync(apiUrl, postData, callback);
	}
	else{
		this.callPostApi(apiUrl, postData);
		return this.response;
	}
};