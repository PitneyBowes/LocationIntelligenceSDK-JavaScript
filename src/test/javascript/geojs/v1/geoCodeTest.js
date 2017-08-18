describe("GeoCode Test Suite: getCapabilities", function(){
	var GC;	
	beforeEach(function() {
		GC = new GEOAPIS_V1.geoCode('Basic bGJzYWRtaW46bGJzYWRtaW4jMQ==');
		GC.apiAddress = 'http://54.86.242.73/geocodeapis/services';
	});
    it("GeoCode Get Capabilities Valid Parameters", function () {
        var geo = GC.getCapabilities({bundleType:'premium', country:'USA', operation:'geocode'});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(200);
    });
    it("GeoCode Get Capabilities Invalid Bundle Type", function () {
        var geo = GC.getCapabilities({bundleType:'', country:'USA', operation:'geocode'});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(404);
    });
});
describe("GeoCode Test Suite: getConfigureDictionary", function(){
	var GC;	
	beforeEach(function() {
		GC = new GEOAPIS_V1.geoCode('Basic bGJzYWRtaW46bGJzYWRtaW4jMQ==');
		GC.apiAddress = 'http://54.86.242.73/geocodeapis/services';
	});
    it("GeoCode Get Dictionary Valid Parameters", function () {
        var geo = GC.getConfigureDictionary({bundleType:'premium', country:'USA'});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(200);
    });
	it("GeoCode Get Dictionary Invalid Bundle Type", function () {
        var geo = GC.getConfigureDictionary({bundleType:'', country:'USA'});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(404);
    });
});
describe("GeoCode Test Suite: getGeocode", function(){
	var GC;	
	beforeEach(function() {
		GC = new GEOAPIS_V1.geoCode('Basic bGJzYWRtaW46bGJzYWRtaW4jMQ==');
		GC.apiAddress = 'http://54.86.242.73/geocodeapis/services';
	});
    it("GeoCode Get Forward Geocode Valid Parameters", function () {
        var geo = GC.getGeocode({bundleType:'premium', country:'USA', mainAddress:'4750 Walnut St., Boulder CO, 80301', matchMode: 'Standard', fallbackGeo: 'true', fallbackPostal: 'true', maxCands: 1, streetOffset: 7, streetOffsetUnits: 'METERS', cornerOffset: 7, cornerOffsetUnits: 'METERS'});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(200);
    });
	it("GeoCode Get Forward Geocode Invalid Country", function () {
        var geo = GC.getGeocode({bundleType:'premium', country:'', mainAddress:'4750 Walnut St., Boulder CO, 80301', matchMode: 'Standard', fallbackGeo: 'true', fallbackPostal: 'true', maxCands: 1, streetOffset: 7, streetOffsetUnits: 'METERS', cornerOffset: 7, cornerOffsetUnits: 'METERS'});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(400);
    });
	it("GeoCode Get Forward Geocode Invalid Bundle Type", function () {
        var geo = GC.getGeocode({bundleType:'', country:'USA', mainAddress:'4750 Walnut St., Boulder CO, 80301', matchMode: 'Standard', fallbackGeo: 'true', fallbackPostal: 'true', maxCands: 1, streetOffset: 7, streetOffsetUnits: 'METERS', cornerOffset: 7, cornerOffsetUnits: 'METERS'});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(404);
    });
});
describe("GeoCode Test Suite: getReverseGeocode", function(){
	var GC;	
	beforeEach(function() {
		GC = new GEOAPIS_V1.geoCode('Basic bGJzYWRtaW46bGJzYWRtaW4jMQ==');
		GC.apiAddress = 'http://54.86.242.73/geocodeapis/services';
	});
    it("GeoCode Get Reverse Geocode Valid Parameters", function () {
        var geo = GC.getReverseGeocode({bundleType:'premium', x: -105.240976, y: 40.018301, country:'USA', coordSysName: 'EPSG:4326', distance: 7, distanceUnits: 'METERS'});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(200);
    });
	it("GeoCode Get Reverse Geocode Invalid Country", function () {
        var geo = GC.getReverseGeocode({bundleType:'premium', x: -105.240976, y: 40.018301, country:'USAA', coordSysName: 'EPSG:4326', distance: 7, distanceUnits: 'METERS'});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(500);
    });
	it("GeoCode Get Reverse Geocode Invalid DistanceUnits", function () {
        var geo = GC.getReverseGeocode({bundleType:'premium', x: -105.240976, y: 40.018301, country:'USA', coordSysName: 'EPSG:4326', distance: 7, distanceUnits: 'METE'});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(400);
    });
	it("GeoCode Get Reverse Geocode Invalid CoordSysName", function () {
        var geo = GC.getReverseGeocode({bundleType:'premium', x: -105.240976, y: 40.018301, country:'USA', coordSysName: 'EPSG:sasasazassa', distance: 7, distanceUnits: 'METERS'});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(400);
    });
	it("GeoCode Get Reverse Geocode Invalid Bundle Type", function () {
        var geo = GC.getReverseGeocode({bundleType:'', x: -105.240976, y: 40.018301, country:'USA', coordSysName: 'EPSG:4326', distance: 7, distanceUnits: 'METERS'});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(404);
    });
});
describe("GeoCode Test Suite: getGeocodeAdvanced", function(){
	var GC;	
	beforeEach(function() {
		GC = new GEOAPIS_V1.geoCode('Basic bGJzYWRtaW46bGJzYWRtaW4jMQ==');
		GC.apiAddress = 'http://54.86.242.73/geocodeapis/services';
	});
    it("GeoCode Post Forward Geocode Valid Parameters", function () {
        var geo = GC.getGeocodeAdvanced({bundleType:'premium', type: 'ADDRESS', preferences: '{"maxReturnedCandidates":1,"returnAllCandidateInfo":"false","preferredDictionaryOrders":[],"fallbackToGeographic":"true","fallbackToPostal":"true","streetOffset":7,"streetOffsetUnits":"METERS","cornerOffset":7,"cornerOffsetUnits":"METERS","clientLocale":"en_US","clientCoordSysName":"EPSG:4326","matchMode":"STANDARD","mustMatchFields":{"matchOnAddressNumber":"false","matchOnPostCode1":"false","matchOnPostCode2":"false","matchOnAreaName1":"false","matchOnAreaName2":"false","matchOnAreaName3":"false","matchOnAreaName4":"false","matchOnAllStreetFields":"false","matchOnStreetName":"false","matchOnStreetType":"false","matchOnStreetDirectional":"false","matchOnPlaceName":"false","matchOnInputFields":"false"},"returnFieldsDescriptor":{"returnAllCustomFields":"false","returnMatchDescriptor":"false","returnStreetAddressFields":"false","returnUnitInformation":"false","returnedCustomFieldKeys":[""]}}', addresses: '[{"mainAddressLine": "Empire State Building, 350 5th Ave, New York, USA","country": "USA"},{"mainAddressLine": "39 Sycamore Rd,Stafford 08050, USA","country": "USA"}]'});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(200);
    });
	it("GeoCode Post Forward Geocode Invalid Type", function () {
        var geo = GC.getGeocodeAdvanced({bundleType:'premium', type: '', preferences: '{"maxReturnedCandidates":1,"returnAllCandidateInfo":"false","preferredDictionaryOrders":[],"fallbackToGeographic":"true","fallbackToPostal":"true","streetOffset":7,"streetOffsetUnits":"METERS","cornerOffset":7,"cornerOffsetUnits":"METERS","clientLocale":"en_US","clientCoordSysName":"EPSG:4326","matchMode":"STANDARD","mustMatchFields":{"matchOnAddressNumber":"false","matchOnPostCode1":"false","matchOnPostCode2":"false","matchOnAreaName1":"false","matchOnAreaName2":"false","matchOnAreaName3":"false","matchOnAreaName4":"false","matchOnAllStreetFields":"false","matchOnStreetName":"false","matchOnStreetType":"false","matchOnStreetDirectional":"false","matchOnPlaceName":"false","matchOnInputFields":"false"},"returnFieldsDescriptor":{"returnAllCustomFields":"false","returnMatchDescriptor":"false","returnStreetAddressFields":"false","returnUnitInformation":"false","returnedCustomFieldKeys":[""]}}', addresses: '[{"mainAddressLine": "Empire State Building, 350 5th Ave, New York, USA","country": "USA"},{"mainAddressLine": "39 Sycamore Rd,Stafford 08050, USA","country": "USA"}]'});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(400);
    });
	it("GeoCode Post Forward Geocode Invalid Preferences", function () {
        var geo = GC.getGeocodeAdvanced({bundleType:'premium', type: 'ADDRESS', preferences: '', addresses: '[{"mainAddressLine": "Empire State Building, 350 5th Ave, New York, USA","country": "USA"},{"mainAddressLine": "39 Sycamore Rd,Stafford 08050, USA","country": "USA"}]'});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(400);
    });
	it("GeoCode Post Forward Geocode Invalid Addresses", function () {
        var geo = GC.getGeocodeAdvanced({bundleType:'premium', type: 'ADDRESS', preferences: '{"maxReturnedCandidates":1,"returnAllCandidateInfo":"false","preferredDictionaryOrders":[],"fallbackToGeographic":"true","fallbackToPostal":"true","streetOffset":7,"streetOffsetUnits":"METERS","cornerOffset":7,"cornerOffsetUnits":"METERS","clientLocale":"en_US","clientCoordSysName":"EPSG:4326","matchMode":"STANDARD","mustMatchFields":{"matchOnAddressNumber":"false","matchOnPostCode1":"false","matchOnPostCode2":"false","matchOnAreaName1":"false","matchOnAreaName2":"false","matchOnAreaName3":"false","matchOnAreaName4":"false","matchOnAllStreetFields":"false","matchOnStreetName":"false","matchOnStreetType":"false","matchOnStreetDirectional":"false","matchOnPlaceName":"false","matchOnInputFields":"false"},"returnFieldsDescriptor":{"returnAllCustomFields":"false","returnMatchDescriptor":"false","returnStreetAddressFields":"false","returnUnitInformation":"false","returnedCustomFieldKeys":[""]}}', addresses: ''});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(400);
    });
	it("GeoCode Post Forward Geocode Invalid Bundle Type", function () {
        var geo = GC.getGeocodeAdvanced({bundleType:'', type: 'ADDRESS', preferences: '{"maxReturnedCandidates":1,"returnAllCandidateInfo":"false","preferredDictionaryOrders":[],"fallbackToGeographic":"true","fallbackToPostal":"true","streetOffset":7,"streetOffsetUnits":"METERS","cornerOffset":7,"cornerOffsetUnits":"METERS","clientLocale":"en_US","clientCoordSysName":"EPSG:4326","matchMode":"STANDARD","mustMatchFields":{"matchOnAddressNumber":"false","matchOnPostCode1":"false","matchOnPostCode2":"false","matchOnAreaName1":"false","matchOnAreaName2":"false","matchOnAreaName3":"false","matchOnAreaName4":"false","matchOnAllStreetFields":"false","matchOnStreetName":"false","matchOnStreetType":"false","matchOnStreetDirectional":"false","matchOnPlaceName":"false","matchOnInputFields":"false"},"returnFieldsDescriptor":{"returnAllCustomFields":"false","returnMatchDescriptor":"false","returnStreetAddressFields":"false","returnUnitInformation":"false","returnedCustomFieldKeys":[""]}}', addresses: '[{"mainAddressLine": "Empire State Building, 350 5th Ave, New York, USA","country": "USA"},{"mainAddressLine": "39 Sycamore Rd,Stafford 08050, USA","country": "USA"}]'});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(404);
    });
});
describe("GeoCode Test Suite: getReverseGeocodeAdvance", function(){
	var GC;	
	beforeEach(function() {
		GC = new GEOAPIS_V1.geoCode('Basic bGJzYWRtaW46bGJzYWRtaW4jMQ==');
		GC.apiAddress = 'http://54.86.242.73/geocodeapis/services';
	});
    it("GeoCode Post Reverse Geocode Valid Parameters", function () {
        var geo = GC.getReverseGeocodeAdvance({bundleType:'premium', preferences: '{"returnAllCandidateInfo": false,"fallbackToGeographic": true,"fallbackToPostal": true,"maxReturnedCandidates": 1,"distance": 150,"streetOffset": 7,"cornerOffset": 7,"matchMode": "UNSPECIFIED","clientLocale": "en_US","clientCoordSysName": "epsg:4326","distanceUnits": "METERS","streetOffsetUnits": "METERS","cornerOffsetUnits": "METERS","mustMatchFields": {"matchOnAddressNumber": false,"matchOnPostCode1": false,"matchOnPostCode2": false,"matchOnAreaName1": false,"matchOnAreaName2": false,"matchOnAreaName3": false,"matchOnAreaName4": false,"matchOnAllStreetFields": false,"matchOnStreetName": false,"matchOnStreetType": false,"matchOnStreetDirectional": false,"matchOnPlaceName": false,"matchOnInputFields": false},"returnFieldsDescriptor": {"returnAllCustomFields": false,"returnMatchDescriptor": false,"returnStreetAddressFields": false,"returnUnitInformation": false},"customPreferences": {}}', points: '[{"country": "AUS","geometry": {"type": "point","coordinates": [151.196036,-33.879637],"crs": {"type": "name","properties": {"name": "EPSG:4326"}}}}]'});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(200);
    });
	it("GeoCode Post Reverse Geocode Invalid Preferences", function () {
        var geo = GC.getReverseGeocodeAdvance({bundleType:'premium', preferences: '', points: '[{"country": "AUS","geometry": {"type": "point","coordinates": [151.196036,-33.879637],"crs": {"type": "name","properties": {"name": "EPSG:4326"}}}}]'});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(400);
    });
	it("GeoCode Post Reverse Geocode Invalid Points", function () {
        var geo = GC.getReverseGeocodeAdvance({bundleType:'premium', preferences: '{"returnAllCandidateInfo": false,"fallbackToGeographic": true,"fallbackToPostal": true,"maxReturnedCandidates": 1,"distance": 150,"streetOffset": 7,"cornerOffset": 7,"matchMode": "UNSPECIFIED","clientLocale": "en_US","clientCoordSysName": "epsg:4326","distanceUnits": "METERS","streetOffsetUnits": "METERS","cornerOffsetUnits": "METERS","mustMatchFields": {"matchOnAddressNumber": false,"matchOnPostCode1": false,"matchOnPostCode2": false,"matchOnAreaName1": false,"matchOnAreaName2": false,"matchOnAreaName3": false,"matchOnAreaName4": false,"matchOnAllStreetFields": false,"matchOnStreetName": false,"matchOnStreetType": false,"matchOnStreetDirectional": false,"matchOnPlaceName": false,"matchOnInputFields": false},"returnFieldsDescriptor": {"returnAllCustomFields": false,"returnMatchDescriptor": false,"returnStreetAddressFields": false,"returnUnitInformation": false},"customPreferences": {}}', points: ''});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(400);
    });
	it("GeoCode Post Reverse Geocode Invalid Bundle Type", function () {
        var geo = GC.getReverseGeocodeAdvance({bundleType:'', preferences: '{"returnAllCandidateInfo": false,"fallbackToGeographic": true,"fallbackToPostal": true,"maxReturnedCandidates": 1,"distance": 150,"streetOffset": 7,"cornerOffset": 7,"matchMode": "UNSPECIFIED","clientLocale": "en_US","clientCoordSysName": "epsg:4326","distanceUnits": "METERS","streetOffsetUnits": "METERS","cornerOffsetUnits": "METERS","mustMatchFields": {"matchOnAddressNumber": false,"matchOnPostCode1": false,"matchOnPostCode2": false,"matchOnAreaName1": false,"matchOnAreaName2": false,"matchOnAreaName3": false,"matchOnAreaName4": false,"matchOnAllStreetFields": false,"matchOnStreetName": false,"matchOnStreetType": false,"matchOnStreetDirectional": false,"matchOnPlaceName": false,"matchOnInputFields": false},"returnFieldsDescriptor": {"returnAllCustomFields": false,"returnMatchDescriptor": false,"returnStreetAddressFields": false,"returnUnitInformation": false},"customPreferences": {}}', points: '[{"country": "AUS","geometry": {"type": "point","coordinates": [151.196036,-33.879637],"crs": {"type": "name","properties": {"name": "EPSG:4326"}}}}]'});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(404);
    });
});