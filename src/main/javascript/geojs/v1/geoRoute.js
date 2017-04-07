/*Copyright 2016 Pitney Bowes Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file 
except in compliance with the License.  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the 
License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  
See the License for the specific language governing permissions and limitations under the License. */
/**
 * A geoRoute object
 * @namespace
 */
 GEOAPIS_V1.geoRoute = function(accessToken){
	GEOAPIS_V1.baseService.call(this, accessToken);
};
/**
 * geoRoute inherits baseService
 * @namespace
 */
GEOAPIS_V1_INHERIT(GEOAPIS_V1.baseService, GEOAPIS_V1.geoRoute);
/**
 * Set API URL to get Route by address
 * @param Object {startAddress: string(required), endAddress: string(required), db: string(optional), country: string(optional), intermediateAddresses: string(optional), oip: boolean(optional),  destinationSrs: string(optional), optimizeBy: string(optional), returnDistance: boolean(optional), distanceUnit: string(optional), returnTime: boolean(optional), timeUnit: string(optional), language: string(optional), directionsStyle: string(optional), segmentGeometryStyle: string(optional), primaryNameOnly: boolean(optional), majorRoads: boolean(optional), returnDirectionGeometry: boolean(optional), historicTrafficTimeBucket: string(optional)}
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoRoute.prototype.getRouteByAddress = function(params, callback){
	var apiUrl =  '/georoute/v1/route/byaddress?startAddress='+encodeURIComponent(params.startAddress)+'&endAddress='+encodeURIComponent(params.endAddress);
	optionalList = ['db', 'country', 'intermediateAddresses', 'oip', 'destinationSrs', 'optimizeBy', 'returnDistance', 'distanceUnit', 'returnTime', 'timeUnit', 'language', 'directionsStyle', 'segmentGeometryStyle', 'primaryNameOnly', 'majorRoads', 'returnDirectionGeometry', 'historicTrafficTimeBucket'];
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
 * Set API URL to get Route by location
 * @param Object {startPoint: string(required), endPoint: string(required), db: string(optional), intermediatePoints: string(optional), oip: boolean(optional),  destinationSrs: string(optional), optimizeBy: string(optional), returnDistance: boolean(optional), distanceUnit: string(optional), returnTime: boolean(optional), timeUnit: string(optional), language: string(optional), directionsStyle: string(optional), segmentGeometryStyle: string(optional), primaryNameOnly: boolean(optional), majorRoads: boolean(optional), returnDirectionGeometry: boolean(optional), historicTrafficTimeBucket: string(optional)}
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoRoute.prototype.getRouteByLocation = function(params, callback){
	var apiUrl =  '/georoute/v1/route/bylocation?startPoint='+encodeURIComponent(params.startPoint)+'&endPoint='+encodeURIComponent(params.endPoint);
	optionalList = ['db', 'intermediatePoints', 'oip', 'destinationSrs', 'optimizeBy', 'returnDistance', 'distanceUnit', 'returnTime', 'timeUnit', 'language', 'directionsStyle', 'segmentGeometryStyle', 'primaryNameOnly', 'majorRoads', 'returnDirectionGeometry', 'historicTrafficTimeBucket'];
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
 * Set API URL to get travel cost Matrix by address
 * @param Object {startAddresses: string(required), endAddresses: string(required), db: string(optional), country: string(optional), optimizeBy: string(optional), returnDistance: boolean(optional), destinationSrs: string(optional), distanceUnit: string(optional), returnTime: boolean(optional), timeUnit: string(optional), majorRoads: boolean(optional), returnOptimalRoutesOnly: boolean(optional), historicTrafficTimeBucket: string(optional)}
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoRoute.prototype.getTravelCostMatrixByAddress= function(params, callback){
	var apiUrl =  '/georoute/v1/travelcostmatrix/byaddress?startAddresses='+encodeURIComponent(params.startAddresses)+'&endAddresses='+encodeURIComponent(params.endAddresses);
	optionalList = ['db', 'country', 'optimizeBy', 'returnDistance', 'destinationSrs', 'distanceUnit', 'returnTime', 'timeUnit', 'majorRoads', 'returnOptimalRoutesOnly', 'historicTrafficTimeBucket'];
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
 * Set API URL to get travel cost Matrix by locations
 * @param Object {startPoints: string(required), endPoints: string(required), db: string(optional), optimizeBy: string(optional), returnDistance: boolean(optional), destinationSrs: string(optional), distanceUnit: string(optional), returnTime: boolean(optional), timeUnit: string(optional), majorRoads: boolean(optional), returnOptimalRoutesOnly: boolean(optional), historicTrafficTimeBucket: string(optional)}
 * @callback {callback: User defined callback} (optional) or
 * @return response object
 */
GEOAPIS_V1.geoRoute.prototype.getTravelCostMatrixByLocation= function(params, callback){
	var apiUrl =  '/georoute/v1/travelcostmatrix/bylocation?startPoints='+encodeURIComponent(params.startPoints)+'&endPoints='+encodeURIComponent(params.endPoints);
	optionalList = ['db', 'optimizeBy', 'returnDistance', 'destinationSrs', 'distanceUnit', 'returnTime', 'timeUnit', 'majorRoads', 'returnOptimalRoutesOnly', 'historicTrafficTimeBucket'];
	apiUrl = this.apiGetUrl(params, optionalList, apiUrl);
	if(callback !== undefined){
		this.callApiAsync(apiUrl, callback);
	}
	else{
		this.callApi(apiUrl);
		return this.response;
	}
};