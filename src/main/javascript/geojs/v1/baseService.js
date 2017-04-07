/*Copyright 2016 Pitney Bowes Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file 
except in compliance with the License.  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the 
License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  
See the License for the specific language governing permissions and limitations under the License. */

/**
 * GEOAPIS_V1_BASESERVICE package declaration.
 * This declaration makes sure to not erase the
 * current declaration. If the package does not
 * exist an empty object is created.
 * @default {}
 */
var GEOAPIS_V1 = GEOAPIS_V1 || {};

/**
 * A baseService object
 * @namespace
 */
GEOAPIS_V1.baseService = function(accessToken){
	this.accessToken = 'Bearer '+accessToken;
	this.apiAddress = 'https://api.pitneybowes.com/location-intelligence';
	this.response = {};
};
/**
 * Call API URL and set response property
 * @param String relative apiUrl
 */
GEOAPIS_V1.baseService.prototype.callApi = function(apiUrl){
	var request = null;
	this.response = {};
	this.response.httpResponse = {};
	try {
		request = $.ajax({
			url: this.apiAddress+apiUrl,			
			type: 'GET',
			async: false,
			headers: {
				'Content-type': 'application/json',
				'Accept': 'application/json',
				'Authorization': this.accessToken
			}
		});		
		this.response.response = JSON.parse(request.responseText);
		if(request.status === 200){
			this.response.status = 'success';
		}
		else{
			this.response.status = 'failed';
		}
	} catch(e){
		this.response.status = 'failed';
		if(request.responseText !== ""){
			this.response.response = request.responseText;
		}
		else{
			this.response.response = {};
			this.response.response.errors = [];
			this.response.response.errors.push({errorCode:"GE0001",errorDescription:"Internal server error encountered."});
		}
	}
	this.response.httpResponse.status = request.status;
	this.response.httpResponse.statusText = request.statusText;
};
/**
 * Call API URL and set response property
 * @param String relative apiUrl
 * @callback {callback: User defined callback}
 */
GEOAPIS_V1.baseService.prototype.callApiAsync = function(apiUrl, callback){
	$.ajax({
		url: this.apiAddress+apiUrl,			
		type: 'GET',
		async: true,
		headers: {
			'Content-type': 'application/json',
			'Accept': 'application/json',
			'Authorization': this.accessToken
		}
	}).done(function (responseData, status, xhr) {
		this.response = {};
		this.response.httpResponse = {};
		this.response.httpResponse.status = xhr.status;
		this.response.httpResponse.statusText = xhr.statusText;
		this.response.response = JSON.parse(xhr.responseText);
		if(xhr.status === 200){
			this.response.status = 'success';
		}
		else{
			this.response.status = 'failed';
		}
		if(callback !== undefined && callback !== null){
			var callbacks = callback;
			callbacks(this.response);
		}
		else{
			alert('Callback are not available.');
		}
	}).fail(function(xhr, status, err){
		this.response = {};
		this.response.status = 'failed';
		this.response.httpResponse = {};
		this.response.httpResponse.status = xhr.status;
		this.response.httpResponse.statusText = xhr.statusText;
		if(xhr.responseText !== ""){
			this.response.response = xhr.responseText;
		}
		else{
			this.response.response = {};
			this.response.response.errors = [];
			this.response.response.errors.push({errorCode:"GE0001",errorDescription:"Internal server error encountered."});
		}
		if(callback !== undefined && callback !== null){
			var callbacks = callback;
			callbacks(this.response);
		}
		else{
			alert('Callback are not available.');
		}
	});
};
/**
 * Call API URL and set response property
 * @param String relative apiUrl
 */
GEOAPIS_V1.baseService.prototype.callPostApi = function(apiUrl, postData){
	var request = null;
	this.response = {};
	this.response.httpResponse = {};
	try {
		request = $.ajax({
			url: this.apiAddress+apiUrl,			
			type: 'POST',
			data: postData,
			async: false,
			headers: {
				'Content-type': 'application/json',
				'Accept': 'application/json',
				'Authorization': this.accessToken
			}
		});
		this.response.response = JSON.parse(request.responseText);
		if(request.status === 200){
			this.response.status = 'success';
		}
		else{
			this.response.status = 'failed';
		}
	} catch(e){
		this.response.status = 'failed';
		if(request.responseText !== ""){
			this.response.response = request.responseText;
		}
		else{
			this.response.response = {};
			this.response.response.errors = [];
			this.response.response.errors.push({errorCode:"GE0001",errorDescription:"Internal server error encountered."});
		}
	}
	this.response.httpResponse.status = request.status;
	this.response.httpResponse.statusText = request.statusText;
};
/**
 * Call API URL and set response property
 * @param String relative apiUrl
 * @param Object post data
 * @callback {callback: User defined callback}
 */
GEOAPIS_V1.baseService.prototype.callPostApiAsync = function(apiUrl, postData, callback){
	$.ajax({
		url: this.apiAddress+apiUrl,			
		type: 'POST',
		data: postData,
		async: true,
		headers: {
			'Content-type': 'application/json',
			'Accept': 'application/json',
			'Authorization': this.accessToken
		}
	}).done(function (responseData, status, xhr) {
		this.response = {};
		this.response.httpResponse = {};
		this.response.httpResponse.status = xhr.status;
		this.response.httpResponse.statusText = xhr.statusText;
		this.response.response = JSON.parse(xhr.responseText);
		if(xhr.status === 200){
			this.response.status = 'success';
		}
		else{
			this.response.status = 'failed';
		}
		if(callback !== undefined && callback !== null){
			var callbacks = callback;
			callbacks(this.response);
		}
		else{
			alert('Callback are not available.');
		}
	}).fail(function(xhr, status, err){
		this.response = {};
		this.response.status = 'failed';
		this.response.httpResponse = {};
		this.response.httpResponse.status = xhr.status;
		this.response.httpResponse.statusText = xhr.statusText;
		if(xhr.responseText !== ""){
			this.response.response = xhr.responseText;
		}
		else{
			this.response.response = {};
			this.response.response.errors = [];
			this.response.response.errors.push({errorCode:"GE0001",errorDescription:"Internal server error encountered."});
		}
		if(callback !== undefined && callback !== null){
			var callbacks = callback;
			callbacks(this.response);
		}
		else{
			alert('Callback are not available.');
		}
	});
};
GEOAPIS_V1.baseService.prototype.apiGetUrl = function(params, optionalList, apiUrl){
	for(var key in params){
		if(optionalList.indexOf(key) >= 0){
			if(params[key] !== null && params[key] !== undefined){
				apiUrl += this.queryDelimiter(apiUrl)+key+'='+encodeURIComponent(params[key]);
			}
		}
	}
	return apiUrl;
};
GEOAPIS_V1.baseService.prototype.queryDelimiter = function(requestUri){
	var queryDelimiter = '&';
	if(requestUri.search('\\?') < 0){
		queryDelimiter = '?';
	}
	return queryDelimiter;
};
function GEOAPIS_V1_INHERIT(SuperType, SubType){
    var p = new SuperType();
    SubType.prototype = p;
    SubType.prototype.constructor = SubType;
}