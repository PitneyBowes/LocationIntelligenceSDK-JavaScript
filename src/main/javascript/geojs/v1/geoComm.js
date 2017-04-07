/*Copyright 2016 Pitney Bowes Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file 
except in compliance with the License.  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the 
License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  
See the License for the specific language governing permissions and limitations under the License. */
/**
 * A geoComm object
 * @namespace
 */
 GEOAPIS_V1.geoComm = function(accessToken){
	GEOAPIS_V1.baseService.call(this, accessToken);
};
/**
 * geoComm inherits baseService
 * @namespace
 */
GEOAPIS_V1_INHERIT(GEOAPIS_V1.baseService, GEOAPIS_V1.geoComm);
/**
 * Set API URL to get RateCenter by address
 * @param Object {address: free-form text (required), level: basic/detail (optional), country: ISO code of the country (optional), areaCodeInfo: boolean (optional)}
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoComm.prototype.getRateCenterByAddress = function(params, callback){
	var apiUrl = '/geocomm/v1/ratecenter/byaddress?address='+encodeURIComponent(params.address),
	optionalList = ['level', 'country', 'areaCodeInfo'];
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
 * Set API URL to get RateCenter by location
 * @param Object {latitude: float (required), longitude: float (required), level: basic/detail (optional), areaCodeInfo: boolean (optional)}
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoComm.prototype.getRateCenterByLocation = function(params, callback){
	var apiUrl = '/geocomm/v1/ratecenter/bylocation?latitude='+encodeURIComponent(params.latitude)+'&longitude='+encodeURIComponent(params.longitude),
	optionalList = ['level', 'areaCodeInfo'];
	apiUrl = this.apiGetUrl(params, optionalList, apiUrl);
	if(callback !== undefined){
		this.callApiAsync(apiUrl, callback);
	}
	else{
		this.callApi(apiUrl);
		return this.response;
	}
};