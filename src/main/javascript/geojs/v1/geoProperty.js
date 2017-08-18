/*Copyright 2016 Pitney Bowes Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file 
except in compliance with the License.  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the 
License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  
See the License for the specific language governing permissions and limitations under the License. */
/**
 * A geoProperty object
 * @namespace
 */
 GEOAPIS_V1.geoProperty = function(accessToken){
	GEOAPIS_V1.baseService.call(this, accessToken);
};
/**
 * geoProperty inherits baseService
 * @namespace
 */
GEOAPIS_V1_INHERIT(GEOAPIS_V1.baseService, GEOAPIS_V1.geoProperty);
/**
 * Set API URL to get Geo Property by Address
 * @param Object {category: string(required), address: string(required)}
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoProperty.prototype.getGeoPropertyByAddress = function(params, callback){
	var apiUrl =  '/geoproperty/v1/'+encodeURIComponent(params.category)+'/attributes/byaddress?address='+encodeURIComponent(params.address);
	if(callback !== undefined){
		this.callApiAsync(apiUrl, callback);
	}
	else{
		this.callApi(apiUrl);
		return this.response;
	}
};
/**
 * Set API URL to post geoProperty by Address Batch
 * @param Object {category: string(required),addresses: The address or addresses to get GeoProperty (required)}
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoProperty.prototype.getGeoPropertyByAddressBatch = function(params, callback){
	var apiUrl =  '/geoproperty/v1/'+encodeURIComponent(params.category)+'/attributes/byaddress';
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
 * Set API URL to get Geo Property by PBKey
 * @param Object {category: string(required),pbKey:string(required)}
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoProperty.prototype.getGeoPropertyByPBKey = function(params, callback){
	var apiUrl =  '/geoproperty/v1/'+encodeURIComponent(params.category)+'/attributes/bypbkey?pbKey='+encodeURIComponent(params.pbKey);
	if(callback !== undefined){
		this.callApiAsync(apiUrl, callback);
	}
	else{
		this.callApi(apiUrl);
		return this.response;
	}
};


/**
 * Set API URL to post geoProperty by PBKey Batch
 * @param Object {category: string(required),pbkeys: The pbkeys to get GeoProperty (required)}
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoProperty.prototype.getGeoPropertyByPBKeyBatch = function(params, callback){
	var apiUrl =  '/geoproperty/v1/'+encodeURIComponent(params.category)+'/attributes/bypbkey';
	postData = '{"pbkeys":'+params.pbkeys+'}';
	if(callback !== undefined){
		this.callPostApiAsync(apiUrl, postData, callback);
	}
	else{
		this.callPostApi(apiUrl, postData);
		return this.response;
	}
};