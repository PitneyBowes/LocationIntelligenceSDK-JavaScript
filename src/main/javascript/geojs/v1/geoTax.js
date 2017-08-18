/*Copyright 2016 Pitney Bowes Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file 
except in compliance with the License.  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the 
License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  
See the License for the specific language governing permissions and limitations under the License. */
/**
 * A geoTax object
 * @namespace
 */
 GEOAPIS_V1.geoTax = function(accessToken){
	GEOAPIS_V1.baseService.call(this, accessToken);
};
/**
 * geoTax inherits baseService
 * @namespace
 */
GEOAPIS_V1_INHERIT(GEOAPIS_V1.baseService, GEOAPIS_V1.geoTax);
/**
 * Set API URL to get tax rate by address
 * @param Object {taxType: Auto/General/Medical/Construction (required), address: free-form text} (required)
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoTax.prototype.getTaxRateByAddress = function(params, callback){
	var apiUrl = '/geotax/v1/taxrate/'+encodeURIComponent(params.taxType)+'/byaddress?address='+encodeURIComponent(params.address);
	if(callback !== undefined){
		this.callApiAsync(apiUrl, callback);
	}
	else{
		this.callApi(apiUrl);
		return this.response;
	}
};
/**
 * Set API URL to get tax rate by location
 * @param Object {taxType: Auto/General/Medical/Construction (required), latitude: float, longitude: float} (required)
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoTax.prototype.getTaxRateByLocation = function(params, callback){
	var apiUrl = '/geotax/v1/taxrate/'+encodeURIComponent(params.taxType)+'/bylocation?latitude='+encodeURIComponent(params.latitude)+'&longitude='+encodeURIComponent(params.longitude);
	if(callback !== undefined){
		this.callApiAsync(apiUrl, callback);
	}
	else{
		this.callApi(apiUrl);
		return this.response;
	}
};
/**
 * Set API URL to get tax by address
 * @param Object {taxType: Auto/General/Medical/Construction (required), address: free-form text, purchaseAmount: float} (required)
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoTax.prototype.getTaxByAddress = function(params, callback){
	var apiUrl = '/geotax/v1/tax/'+encodeURIComponent(params.taxType)+'/byaddress?address='+encodeURIComponent(params.address)+'&purchaseAmount='+encodeURIComponent(params.purchaseAmount);
	if(callback !== undefined){
		this.callApiAsync(apiUrl, callback);
	}
	else{
		this.callApi(apiUrl);
		return this.response;
	}
};
/**
 * Set API URL to get tax by location
 * @param Object {taxType: Auto/General/Medical/Construction (required), latitude: float, longitude: float, purchaseAmount: float} (required)
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoTax.prototype.getTaxByLocation = function(params, callback){
	var apiUrl = '/geotax/v1/tax/'+encodeURIComponent(params.taxType)+'/bylocation?latitude='+encodeURIComponent(params.latitude)+'&longitude='+encodeURIComponent(params.longitude)+'&purchaseAmount='+encodeURIComponent(params.purchaseAmount);
	if(callback !== undefined){
		this.callApiAsync(apiUrl, callback);
	}
	else{
		this.callApi(apiUrl);
		return this.response;
	}
};
/**
 * Set API URL to get IPD tax rate by address
 * @param Object {address: free-form text} (required)
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoTax.prototype.getIpdTaxRateByAddress = function(params, callback){
	var apiUrl = '/geotax/v1/taxdistrict/ipd/byaddress?address='+encodeURIComponent(params.address);
	if(callback !== undefined){
		this.callApiAsync(apiUrl, callback);
	}
	else{
		this.callApi(apiUrl);
		return this.response;
	}
};
/**
 * Set API URL to post tax rate by address
 * @param Object {taxType: Auto/General/Medical/Construction (required), preferences: The matching and geocoding options (optional), taxRateAddresses: The address or addresses (required)}
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoTax.prototype.getAdvancedTaxRateByAddress = function(params, callback){
	var apiUrl = '/geotax/v1/taxrate/'+encodeURIComponent(params.taxType)+'/byaddress';
	postData = '{"preferences":'+params.preferences+', "taxRateAddresses":'+params.taxRateAddresses+'}';
	if(callback !== undefined){
		this.callPostApiAsync(apiUrl, postData, callback);
	}
	else{
		this.callPostApi(apiUrl, postData);
		return this.response;
	}
};
/**
 * Set API URL to post tax rate by location
 * @param Object {taxType: Auto/General/Medical/Construction (required), preferences: The matching and geocoding options (optional), locations: The input coordinates or multiple input coordinates (required)}
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoTax.prototype.getAdvancedTaxRateByLocation = function(params, callback){
	var apiUrl = '/geotax/v1/taxrate/'+encodeURIComponent(params.taxType)+'/bylocation',
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
 * Set API URL to post tax by address
 * @param Object {taxType: Auto/General/Medical/Construction (required), preferences: The matching and geocoding options (optional), taxRateAddresses: The address or addresses with purchase amount (required)}
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoTax.prototype.getAdvancedTaxByAddress = function(params, callback){
	var apiUrl = '/geotax/v1/tax/'+encodeURIComponent(params.taxType)+'/byaddress',
	postData = '{"preferences":'+params.preferences+', "taxAddresses":'+params.taxAddresses+'}';
	if(callback !== undefined){
		this.callPostApiAsync(apiUrl, postData, callback);
	}
	else{
		this.callPostApi(apiUrl, postData);
		return this.response;
	}
};
/**
 * Set API URL to post tax by location
 * @param Object {taxType: Auto/General/Medical/Construction (required), preferences: The matching and geocoding options (optional), locations: The input coordinates or multiple input coordinates with purchase amount (required)}
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoTax.prototype.getAdvancedTaxByLocation = function(params, callback){
	var apiUrl = '/geotax/v1/tax/'+encodeURIComponent(params.taxType)+'/bylocation',
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
 * Set API URL to post IPD tax rate by address
 * @param Object {preferences: The matching and geocoding options (optional), addresses: The address or addresses (required)}
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoTax.prototype.getAdvancedIpdTaxRateByAddress = function(params, callback){
	var apiUrl = '/geotax/v1/taxdistrict/ipd/byaddress';
	postData = '{"preferences":'+params.preferences+', "addresses":'+params.addresses+'}';
	if(callback !== undefined){
		this.callPostApiAsync(apiUrl, postData, callback);
	}
	else{
		this.callPostApi(apiUrl, postData);
		return this.response;
	}
};