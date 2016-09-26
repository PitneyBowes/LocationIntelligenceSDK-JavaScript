/*Copyright 2016 Pitney Bowes Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file 
except in compliance with the License.  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the 
License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  
See the License for the specific language governing permissions and limitations under the License. */
/**
 * A geo911 object
 * @namespace
 */
 GEOAPIS_V1.geo911 = function(accessToken){
	GEOAPIS_V1.baseService.call(this, accessToken);
};
/**
 * geo911 inherits baseService
 * @namespace
 */
GEOAPIS_V1_INHERIT(GEOAPIS_V1.baseService, GEOAPIS_V1.geo911);
/**
 * Set API URL to get PSAP by address
 * @param Object {address: free-form text} (required)
 * @param String callback method name (optional)
 * @return response object or calls callback
 */
GEOAPIS_V1.geo911.prototype.getPSAPByAddress = function(params, callback){
	var apiUrl = '/geo911/v1/psap/byaddress?address='+encodeURIComponent(params.address);
	if(callback !== undefined){
		this.callApiAsync(apiUrl, callback);
	}
	else{
		this.callApi(apiUrl);
		return this.response;
	}
};
/**
 * Set API URL to get PSAP by location
 * @param Object {latitude: float, longitude: float} (required)
 * @param String callback method name (optional)
 * @return response object or calls callback
 */
GEOAPIS_V1.geo911.prototype.getPSAPByLocation = function(params, callback){
	var apiUrl = '/geo911/v1/psap/bylocation?latitude='+encodeURIComponent(params.latitude)+'&longitude='+encodeURIComponent(params.longitude);
	if(callback !== undefined){
		this.callApiAsync(apiUrl, callback);
	}
	else{
		this.callApi(apiUrl);
		return this.response;
	}
};
/**
 * Set API URL to get AHJ by address
 * @param Object {address: free-form text} (required)
 * @param String callback method name (optional)
 * @return response object or calls callback
 */
GEOAPIS_V1.geo911.prototype.getAHJPLUSPSAPByAddress = function(params, callback){
	var apiUrl = '/geo911/v1/ahj-psap/byaddress?address='+encodeURIComponent(params.address);
	if(callback !== undefined){
		this.callApiAsync(apiUrl, callback);
	}
	else{
		this.callApi(apiUrl);
		return this.response;
	}
};
/**
 * Set API URL to get AHJ by location
 * @param Object {latitude: float, longitude: float} (required)
 * @param String callback method name (optional)
 * @return response object or calls callback
 */
GEOAPIS_V1.geo911.prototype.getAHJPLUSPSAPByLocation = function(params, callback){
	var apiUrl = '/geo911/v1/ahj-psap/bylocation?latitude='+encodeURIComponent(params.latitude)+'&longitude='+encodeURIComponent(params.longitude);
	if(callback !== undefined){
		this.callApiAsync(apiUrl, callback);
	}
	else{
		this.callApi(apiUrl);
		return this.response;
	}
};