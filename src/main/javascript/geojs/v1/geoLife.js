/*Copyright 2016 Pitney Bowes Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file 
except in compliance with the License.  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the 
License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  
See the License for the specific language governing permissions and limitations under the License. */
/**
 * A geoLife object
 * @namespace
 */
 GEOAPIS_V1.geoLife = function(accessToken){
	GEOAPIS_V1.baseService.call(this, accessToken);
};
/**
 * geoLife inherits baseService
 * @namespace
 */
GEOAPIS_V1_INHERIT(GEOAPIS_V1.baseService, GEOAPIS_V1.geoLife);
/**
 * Set API URL to get demographic by address
 * @param Object {address: free-form text} (required)
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoLife.prototype.getDemographicByAddress = function(params, callback){
	var apiUrl = '/geolife/v1/demographics/byaddress?address='+encodeURIComponent(params.address),
	optionalList = ['filter', 'profile', 'country'];
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
 * Set API URL to get demographic by location
 * @param Object {latitude: float, longitude: float} (required)
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoLife.prototype.getDemographicByLocation = function(params, callback){
	var apiUrl = '/geolife/v1/demographics/bylocation?latitude='+encodeURIComponent(params.latitude)+'&longitude='+encodeURIComponent(params.longitude),
	optionalList = ['filter', 'profile'];
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
 * Set API URL to get segmentation by address
 * @param Object {address: free-form text} (required)
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoLife.prototype.getSegmentationByAddress = function(params, callback){
	var apiUrl = '/geolife/v1/segmentation/byaddress?address='+encodeURIComponent(params.address),
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
 * Set API URL to get segmentation by location
 * @param Object {latitude: float, longitude: float} (required)
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoLife.prototype.getSegmentationByLocation = function(params, callback){
	var apiUrl = '/geolife/v1/segmentation/bylocation?latitude='+encodeURIComponent(params.latitude)+'&longitude='+encodeURIComponent(params.longitude);
	if(callback !== undefined){
		this.callApiAsync(apiUrl, callback);
	}
	else{
		this.callApi(apiUrl);
		return this.response;
	}
};