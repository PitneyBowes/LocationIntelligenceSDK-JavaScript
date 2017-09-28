/*Copyright 2016 Pitney Bowes Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file 
except in compliance with the License.  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the 
License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  
See the License for the specific language governing permissions and limitations under the License. */

/**
 * A geoLocation object
 * @namespace
 */
GEOAPIS_V1.geoLocation = function(accessToken){
	GEOAPIS_V1.baseService.call(this, accessToken);
};
/**
 * geoLocation inherits baseService
 * @namespace
 */
GEOAPIS_V1_INHERIT(GEOAPIS_V1.baseService, GEOAPIS_V1.geoLocation);
 /**
     * Location By Fixed Line Network.
     * This service accepts a fixed line phone number and returns the location coordinates corresponding to that phone number.
     * @param deviceId This is the fixed line phone number (US only). This is a mandatory parameter. (required)
     * @return GeoLocation
     *
     */
GEOAPIS_V1.geoLocation.prototype.getLocationByFixedLine = function(params, callback){
	var apiUrl = '/geolocation/v1/location/byfixedline?deviceId='+encodeURIComponent(params.deviceId);
	if(callback !== undefined){
		this.callApiAsync(apiUrl, callback);
	}
	else{
		this.callApi(apiUrl);
		return this.response;
	}
};
    /**
     * Location By IP Address.
     * This service accepts an IP address and returns the location coordinates corresponding to that IP address.
     * @param ipAddress This is the ip address of network connected device. It must be a standard IPv4 octet and a valid external address. (required)
     * @return GeoLocation
     *
     */
GEOAPIS_V1.geoLocation.prototype.getLocationByIPAddress = function(params, callback){
	var apiUrl = '/geolocation/v1/location/byipaddress?ipAddress='+encodeURIComponent(params.ipAddress);
	if(callback !== undefined){
		this.callApiAsync(apiUrl, callback);
	}
	else{
		this.callApi(apiUrl);
		return this.response;
	}
};

    /**
     * Location by WiFi Access Point.
     * This service accepts a WiFi access point MAC address and returns the location coordinates corresponding to that access point.
     * @param mac This should be the 48 bit mac address (or BSSID) of wireless access point. Accepted format is Six groups of two hexadecimal digits, separated by hyphens (-) or colons. (required)
     * @param ssid The service set identifier for wi-fi access point. It should be alphanumeric with maximum 32 characters. (optional)
     * @param rsid This is the received signal strength indicator from particular wi-fi access point. It should be a number from -113 to 0 and the unit of this strength is dBm. (optional)
     * @param speed This is the connection speed for wi-fi. It should be a number from 0 to 6930 and the unit should be Mbps. (optional)
     * @param accessPoint This is the JSON based list of wifi access points in the vicinity of device to be located. This parameter is helpful in case, multiple wifi points are visible and we want to make sure that the location of device is best calculated considering all the access points location. (optional)
     * @return GeoLocation
     *
     */
GEOAPIS_V1.geoLocation.prototype.getLocationByWiFiAccessPoint = function(params, callback){
	var apiUrl = '/geolocation/v1/location/byaccesspoint?mac='+encodeURIComponent(params.mac);
	optionalList = ['ssid', 'rsid', 'speed', 'accessPoint'];
	apiUrl = this.apiGetUrl(params, optionalList, apiUrl);
	if(callback !== undefined){
		this.callApiAsync(apiUrl, callback);
	}
	else{
		this.callApi(apiUrl);
		return this.response;
	}
};