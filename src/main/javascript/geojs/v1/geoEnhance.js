/*Copyright 2016 Pitney Bowes Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file 
except in compliance with the License.  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the 
License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  
See the License for the specific language governing permissions and limitations under the License. */

/**
 * A geoEnhance object
 * @namespace
 */
GEOAPIS_V1.geoEnhance = function(accessToken){
	GEOAPIS_V1.baseService.call(this, accessToken);
};
/**
 * geoEnhance inherits baseService
 * @namespace
 */
GEOAPIS_V1_INHERIT(GEOAPIS_V1.baseService, GEOAPIS_V1.geoEnhance);
/**
 * Set API URL to get address
 * @param Object {latitude: float(required), longitude: float(required), searchRadius: number(optional), searchRadiusUnit: string(optional)}
 * @param String callback method name (optional)
 * @return response object or calls callback
 */
GEOAPIS_V1.geoEnhance.prototype.getAddress = function(params, callback){
	var apiUrl = '/geoenhance/v1/address/bylocation?latitude='+encodeURIComponent(params.latitude)+'&longitude='+encodeURIComponent(params.longitude);
	var optionalList = ['searchRadius', 'searchRadiusUnit'];
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
 * @param String callback method name (optional)
 * @return response object or calls callback
 */
GEOAPIS_V1.geoEnhance.prototype.getPlace = function(params, callback){
	var apiUrl =  '/geoenhance/v1/place/bylocation?latitude='+encodeURIComponent(params.latitude)+'&longitude='+encodeURIComponent(params.longitude);
	var optionalList = ['levelHint'];
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
 * @param String callback method name (optional)
 * @return response object or calls callback
 */
GEOAPIS_V1.geoEnhance.prototype.getPOI = function(params, callback){
	var apiUrl =  '/geoenhance/v1/poi/bylocation?latitude='+encodeURIComponent(params.latitude)+'&longitude='+encodeURIComponent(params.longitude);
	var optionalList = ['category', 'searchRadius', 'maxCandidates', 'searchRadiusUnit', 'searchPriority', 'searchDataset'];
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
 * Set API URL to get timezone
 * @param Object {latitude: float(required), longitude: float(required), timestamp: float(required)}
 * @param String callback method name (optional)
 * @return response object or calls callback
 */
GEOAPIS_V1.geoEnhance.prototype.getTimezone = function(params, callback){
	var apiUrl =  '/geoenhance/v1/timezone/bylocation?latitude='+encodeURIComponent(params.latitude)+'&longitude='+encodeURIComponent(params.longitude)+'&timestamp='+encodeURIComponent(params.timestamp);
	if(callback !== undefined){
		this.callApiAsync(apiUrl, callback);
	}
	else{
		this.callApi(apiUrl);
		return this.response;
	}
};