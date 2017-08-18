/*Copyright 2016 Pitney Bowes Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file 
except in compliance with the License.  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the 
License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  
See the License for the specific language governing permissions and limitations under the License. */
/**
 * A geoSearch object
 * @namespace
 */
 GEOAPIS_V1.geoSearch = function(accessToken){
	GEOAPIS_V1.baseService.call(this, accessToken);
};
/**
 * geoSearch inherits baseService
 * @namespace
 */
GEOAPIS_V1_INHERIT(GEOAPIS_V1.baseService, GEOAPIS_V1.geoSearch);
/**
 * Set API URL to get location
 * @param Object {searchText: string(required), latitude: float(optional), longitude: float(optional), country:string(optional), areaName1:string(optional), areaName3:string(optional), postCode:string(optional), maxCandidates: number(optional), searchRadius: number(optional), searchRadiusUnit: string(optional), matchOnAddressNumber:string(optional), autoDetectLocation:string(optional), ipAddress:string(optional)}
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoSearch.prototype.getLocation = function(params, callback){
	var apiUrl = '/geosearch/v1/locations?searchText='+encodeURIComponent(params.searchText),
	optionalList = ['latitude', 'longitude', 'country', 'areaName1', 'areaName3', 'postCode', 'maxCandidates', 'searchRadius', 'searchRadiusUnit', 'matchOnAddressNumber', 'autoDetectLocation', 'ipAddress'];
	apiUrl = this.apiGetUrl(params, optionalList, apiUrl);
	if(callback !== undefined){
		this.callApiAsync(apiUrl, callback);
	}
	else{
		this.callApi(apiUrl);
		return this.response;
	}
};