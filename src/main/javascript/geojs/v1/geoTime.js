/*Copyright 2016 Pitney Bowes Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file 
except in compliance with the License.  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the 
License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  
See the License for the specific language governing permissions and limitations under the License. */

/**
 * A geoTime object
 * @namespace
 */
GEOAPIS_V1.geoTime = function(accessToken){
	GEOAPIS_V1.baseService.call(this, accessToken);
};
/**
 * geoTime inherits baseService
 * @namespace
 */
GEOAPIS_V1_INHERIT(GEOAPIS_V1.baseService, GEOAPIS_V1.geoTime);
/**
 * Set API URL to get timezone
 * @param Object {address: free-form text(required), timestamp: float(required)}
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoTime.prototype.getTimezoneByAddress = function(params, callback){
	var apiUrl = '/geotime/v1/timezone/byaddress?address='+encodeURIComponent(params.address)+'&timestamp='+encodeURIComponent(params.timestamp);
	if(callback !== undefined){
		this.callApiAsync(apiUrl, callback);
	}
	else{
		this.callApi(apiUrl);
		return this.response;
	}
};
/**
 * Set API URL to get timezone
 * @param Object {latitude: float(required), longitude: float(required), timestamp: float(required)}
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoTime.prototype.getTimezoneByLocation = function(params, callback){
	var apiUrl = '/geotime/v1/timezone/bylocation?latitude='+encodeURIComponent(params.latitude)+'&longitude='+encodeURIComponent(params.longitude)+'&timestamp='+encodeURIComponent(params.timestamp);
	if(callback !== undefined){
		this.callApiAsync(apiUrl, callback);
	}
	else{
		this.callApi(apiUrl);
		return this.response;
	}
};