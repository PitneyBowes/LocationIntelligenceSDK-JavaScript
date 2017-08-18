describe("GeoTax Test Suite: getTaxRateByAddress", function(){
	var GT;	
	beforeEach(function() {
		GT = new GEOAPIS_V1.geoTax('Basic bGJzYWRtaW46bGJzYWRtaW4jMQ==');
		GT.apiAddress = 'http://52.5.109.175/geotax/services';
	});
    it("GeoTax TaxRate ByAddress Valid Parameters", function () {
        var geo = GT.getTaxRateByAddress({taxType: 'Auto', address:'4750 Walnut st, Boulder, CO'});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(200);
    });
    it("GeoTax TaxRate ByAddress Invalid Address", function () {
        var geo = GT.getTaxRateByAddress({taxType: 'Auto', address:''});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(400);
    });
    it("GeoTax TaxRate ByAddress Invalid Tax Type", function () {
        var geo = GT.getTaxRateByAddress({taxType: '', address:'4750 Walnut st, Boulder, CO'});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(404);
    });
});
describe("GeoTax Test Suite: getTaxRateByLocation", function(){
	var GT;	
	beforeEach(function() {
		GT = new GEOAPIS_V1.geoTax('Basic bGJzYWRtaW46bGJzYWRtaW4jMQ==');
		GT.apiAddress = 'http://52.5.109.175/geotax/services';
	});
    it("GeoTax TaxRate ByLocation Valid Parameters", function () {
        var geo = GT.getTaxRateByLocation({taxType: 'Auto', latitude:42.5309, longitude:-73.6572});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(200);
    });
	it("GeoTax TaxRate ByLocation Invalid Latitude", function () {
        var geo = GT.getTaxRateByLocation({taxType: 'Auto', latitude:-91, longitude:-73.6572});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(400);
    });
	it("GeoTax TaxRate ByLocation Invalid Longitude", function () {
        var geo = GT.getTaxRateByLocation({taxType: 'Auto', latitude:42.5309, longitude:200});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(400);
    });
	it("GeoTax TaxRate ByLocation Invalid Tax Type", function () {
        var geo = GT.getTaxRateByLocation({taxType: '', latitude:42.5309, longitude:-73.6572});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(404);
    });
});
describe("GeoTax Test Suite: getTaxByAddress", function(){
	var GT;	
	beforeEach(function() {
		GT = new GEOAPIS_V1.geoTax('Basic bGJzYWRtaW46bGJzYWRtaW4jMQ==');
		GT.apiAddress = 'http://52.5.109.175/geotax/services';
	});
    it("GeoTax ByAddress Valid Parameters", function () {
        var geo = GT.getTaxByAddress({taxType: 'Auto', address:'4750 Walnut st, Boulder, CO', purchaseAmount: 100});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(200);
    });
    it("GeoTax ByAddress Invalid Address", function () {
        var geo = GT.getTaxByAddress({taxType: 'Auto', address:'', purchaseAmount: 100});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(400);
    });
    it("GeoTax ByAddress Invalid Tax Type", function () {
        var geo = GT.getTaxByAddress({taxType: '', address:'4750 Walnut st, Boulder, CO', purchaseAmount: 100});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(404);
    });
    it("GeoTax ByAddress Invalid Purchase Amount", function () {
        var geo = GT.getTaxByAddress({taxType: 'Auto', address:'4750 Walnut st, Boulder, CO', purchaseAmount: ''});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(400);
    });
});
describe("GeoTax Test Suite: getTaxByLocation", function(){
	var GT;	
	beforeEach(function() {
		GT = new GEOAPIS_V1.geoTax('Basic bGJzYWRtaW46bGJzYWRtaW4jMQ==');
		GT.apiAddress = 'http://52.5.109.175/geotax/services';
	});
    it("GeoTax ByLocation Valid Parameters", function () {
        var geo = GT.getTaxByLocation({taxType: 'Auto', latitude:42.5309, longitude:-73.6572, purchaseAmount: 100});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(200);
    });
	it("GeoTax ByLocation Invalid Latitude", function () {
        var geo = GT.getTaxByLocation({taxType: 'Auto', latitude:-91, longitude:-73.6572, purchaseAmount: 100});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(400);
    });
	it("GeoTax ByLocation Invalid Longitude", function () {
        var geo = GT.getTaxByLocation({taxType: 'Auto', latitude:42.5309, longitude:200, purchaseAmount: 100});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(400);
    });
	it("GeoTax ByLocation Invalid Tax Type", function () {
        var geo = GT.getTaxByLocation({taxType: '', latitude:42.5309, longitude:-73.6572, purchaseAmount: 100});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(404);
    });	
	it("GeoTax ByLocation Invalid Purchase Amount", function () {
        var geo = GT.getTaxByLocation({taxType: 'Auto', latitude:42.5309, longitude:-73.6572, purchaseAmount: ''});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(400);
    });
});
describe("GeoTax Test Suite: getIpdTaxRateByAddress", function(){
	var GT;	
	beforeEach(function() {
		GT = new GEOAPIS_V1.geoTax('Basic bGJzdXNlcjptYXBpbmZvQDEyMw==');
		GT.apiAddress = 'http://52.7.233.3/geotax/services';
	});
    it("GeoTax TaxRate ByAddress Valid Parameters", function () {
        var geo = GT.getIpdTaxRateByAddress({address:'4750 Walnut st, Boulder, CO'});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(200);
    });
    it("GeoTax TaxRate ByAddress Invalid Address", function () {
        var geo = GT.getIpdTaxRateByAddress({address:''});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(400);
    });
});
describe("GeoTax Test Suite: getAdvancedTaxRateByAddress", function(){
	var GT;	
	beforeEach(function() {
		GT = new GEOAPIS_V1.geoTax('Basic bGJzYWRtaW46bGJzYWRtaW4jMQ==');
		GT.accessToken = 'Basic bGJzdXNlcjptYXBpbmZvQDEyMw==';
		GT.apiAddress = 'http://54.86.242.73/geotax/services';
	});
    it("geoTax Post Tax Rate By Address Valid Parameters", function () {
        var geo = GT.getAdvancedTaxRateByAddress({taxType:'General', preferences: '{"fallbackToGeographic": "true", "useGeoTaxAuxiliaryFile": "Y", "matchMode": "EXACT", "latLongOffset": "40", "squeeze": "Y", "latLongFormat": "Decimal", "defaultBufferWidth": "50", "distanceUnits": "Feet", "outputCasing": "M", "returnCensusFields": "Y", "returnLatLongFields": "Y", "customPreferences": { "FIND_ADDR_POINT_INTERP": "true", "FIND_SEARCH_AREA": "1", "FIND_ADDRESS_RANGE": "true", "FIND_EXPANDED_SEARCH_RADIUS": "50", "FIND_ALTERNATE_LOOKUP": "2", "FIND_STREET_CENTROID": "true", "FIND_FIRST_LETTER_EXPANDED": "true" }}', taxRateAddresses: '[{"mainAddressLine": "Empire State Building, 350 5th Ave, New York, USA"},{"mainAddressLine": "39 Sycamore Rd,Stafford 08050, USA"}]'});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(200);
    });
	it("geoTax Post Tax Rate By Address Invalid TaxType", function () {
         var geo = GT.getAdvancedTaxRateByAddress({taxType:'', preferences: '{"fallbackToGeographic": "true", "useGeoTaxAuxiliaryFile": "Y", "matchMode": "EXACT", "latLongOffset": "40", "squeeze": "Y", "latLongFormat": "Decimal", "defaultBufferWidth": "50", "distanceUnits": "Feet", "outputCasing": "M", "returnCensusFields": "Y", "returnLatLongFields": "Y", "customPreferences": { "FIND_ADDR_POINT_INTERP": "true", "FIND_SEARCH_AREA": "1", "FIND_ADDRESS_RANGE": "true", "FIND_EXPANDED_SEARCH_RADIUS": "50", "FIND_ALTERNATE_LOOKUP": "2", "FIND_STREET_CENTROID": "true", "FIND_FIRST_LETTER_EXPANDED": "true" }}', taxRateAddresses: '[{"mainAddressLine": "Empire State Building, 350 5th Ave, New York, USA"},{"mainAddressLine": "39 Sycamore Rd,Stafford 08050, USA"}]'});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(404);
    });
	it("geoTax Post Tax Rate By Address Invalid Preferences", function () {
          var geo = GT.getAdvancedTaxRateByAddress({taxType:'General', preferences: '', taxRateAddresses: '[{"mainAddressLine": "Empire State Building, 350 5th Ave, New York, USA"},{"mainAddressLine": "39 Sycamore Rd,Stafford 08050, USA"}]'});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(400);
    });
	it("geoTax Post Tax Rate By Address Invalid TaxRateAddresses", function () {
		 var geo = GT.getAdvancedTaxRateByAddress({taxType:'General', preferences: '{"fallbackToGeographic": "true", "useGeoTaxAuxiliaryFile": "Y", "matchMode": "EXACT", "latLongOffset": "40", "squeeze": "Y", "latLongFormat": "Decimal", "defaultBufferWidth": "50", "distanceUnits": "Feet", "outputCasing": "M", "returnCensusFields": "Y", "returnLatLongFields": "Y", "customPreferences": { "FIND_ADDR_POINT_INTERP": "true", "FIND_SEARCH_AREA": "1", "FIND_ADDRESS_RANGE": "true", "FIND_EXPANDED_SEARCH_RADIUS": "50", "FIND_ALTERNATE_LOOKUP": "2", "FIND_STREET_CENTROID": "true", "FIND_FIRST_LETTER_EXPANDED": "true" }}', taxRateAddresses: ''});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(400);
    });
});
describe("GeoTax Test Suite: getAdvancedTaxRateByLocation", function(){
	var GT;	
	beforeEach(function() {
		GT = new GEOAPIS_V1.geoTax('Basic bGJzYWRtaW46bGJzYWRtaW4jMQ==');
		GT.accessToken = 'Basic bGJzdXNlcjptYXBpbmZvQDEyMw==';
		GT.apiAddress = 'http://54.86.242.73/geotax/services';
	});
    it("geoTax Post Tax Rate By Location Valid Parameters", function () {
        var geo = GT.getAdvancedTaxRateByLocation({taxType:'General', preferences: '{"outputCasing":"M", "defaultBufferWidth":"", "distanceUnits":"METERS", "returnCensusFields":"Y", "returnLatLongFields":"Y"}', locations: '[{"geometry": {"type": "point", "coordinates": [-101.2369835, 45.0001134]}}, {"geometry": {"type": "point", "coordinates": [-101.2369835, 45.0001134]}}]'});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(200);
    });
	it("geoTax Post Tax Rate By Location Invalid TaxType", function () {
         var geo = GT.getAdvancedTaxRateByLocation({taxType:'', preferences: '{"outputCasing":"M", "defaultBufferWidth":"", "distanceUnits":"METERS", "returnCensusFields":"Y", "returnLatLongFields":"Y"}', locations: '[{"geometry": {"type": "point", "coordinates": [-101.2369835, 45.0001134]}}, {"geometry": {"type": "point", "coordinates": [-101.2369835, 45.0001134]}}]'});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(404);
    });
	it("geoTax Post Tax Rate By Location Invalid Preferences", function () {
          var geo = GT.getAdvancedTaxRateByLocation({taxType:'General', preferences: '', locations: '[{"geometry": {"type": "point", "coordinates": [-101.2369835, 45.0001134]}}, {"geometry": {"type": "point", "coordinates": [-101.2369835, 45.0001134]}}]'});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(400);
    });
	it("geoTax Post Tax Rate By Location Invalid Location", function () {
		 var geo = GT.getAdvancedTaxRateByLocation({taxType:'General', preferences: '{"outputCasing":"M", "defaultBufferWidth":"", "distanceUnits":"METERS", "returnCensusFields":"Y", "returnLatLongFields":"Y"}', locations: ''});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(400);
    });
});
describe("GeoTax Test Suite: getAdvancedTaxByAddress", function(){
	var GT;	
	beforeEach(function() {
		GT = new GEOAPIS_V1.geoTax('Basic bGJzYWRtaW46bGJzYWRtaW4jMQ==');
		GT.accessToken = 'Basic bGJzdXNlcjptYXBpbmZvQDEyMw==';
		GT.apiAddress = 'http://54.86.242.73/geotax/services';
	});
    it("geoTax Post Tax By Address Valid Parameters", function () {
        var geo = GT.getAdvancedTaxByAddress({taxType:'General', preferences: '{"fallbackToGeographic": "true", "useGeoTaxAuxiliaryFile": "Y", "matchMode": "EXACT", "latLongOffset": "40", "squeeze": "Y", "latLongFormat": "Decimal", "defaultBufferWidth": "50", "distanceUnits": "Feet", "outputCasing": "M", "returnCensusFields": "Y", "returnLatLongFields": "Y", "customPreferences": {"FIND_ADDR_POINT_INTERP": "true", "FIND_SEARCH_AREA": "1", "FIND_ADDRESS_RANGE": "true", "FIND_EXPANDED_SEARCH_RADIUS": "50", "FIND_ALTERNATE_LOOKUP": "2", "FIND_STREET_CENTROID": "true", "FIND_FIRST_LETTER_EXPANDED": "true"}}', taxAddresses: '[{"mainAddressLine": "2001 Main St, Eagle Butte, SD 57625", "purchaseAmount":"10"}, {"mainAddressLine": "39 Sycamore Rd,Stafford 08050, USA", "purchaseAmount":"10"}]'});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(200);
    });
	it("geoTax Post Tax By Address Invalid TaxType", function () {
        var geo = GT.getAdvancedTaxByAddress({taxType:'', preferences: '{"fallbackToGeographic": "true", "useGeoTaxAuxiliaryFile": "Y", "matchMode": "EXACT", "latLongOffset": "40", "squeeze": "Y", "latLongFormat": "Decimal", "defaultBufferWidth": "50", "distanceUnits": "Feet", "outputCasing": "M", "returnCensusFields": "Y", "returnLatLongFields": "Y", "customPreferences": {"FIND_ADDR_POINT_INTERP": "true", "FIND_SEARCH_AREA": "1", "FIND_ADDRESS_RANGE": "true", "FIND_EXPANDED_SEARCH_RADIUS": "50", "FIND_ALTERNATE_LOOKUP": "2", "FIND_STREET_CENTROID": "true", "FIND_FIRST_LETTER_EXPANDED": "true"}}', taxAddresses: '[{"mainAddressLine": "2001 Main St, Eagle Butte, SD 57625", "purchaseAmount":"10"}, {"mainAddressLine": "39 Sycamore Rd,Stafford 08050, USA", "purchaseAmount":"10"}]'});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(404);
    });
	it("geoTax Post Tax By Address Invalid Preferences", function () {
        var geo = GT.getAdvancedTaxByAddress({taxType:'General', preferences: '', taxAddresses: '[{"mainAddressLine": "2001 Main St, Eagle Butte, SD 57625", "purchaseAmount":"10"}, {"mainAddressLine": "39 Sycamore Rd,Stafford 08050, USA", "purchaseAmount":"10"}]'});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(400);
    });
	it("geoTax Post Tax By Address Invalid TaxAddresses", function () {
         var geo = GT.getAdvancedTaxByAddress({taxType:'General', preferences: '{"fallbackToGeographic": "true", "useGeoTaxAuxiliaryFile": "Y", "matchMode": "EXACT", "latLongOffset": "40", "squeeze": "Y", "latLongFormat": "Decimal", "defaultBufferWidth": "50", "distanceUnits": "Feet", "outputCasing": "M", "returnCensusFields": "Y", "returnLatLongFields": "Y", "customPreferences": {"FIND_ADDR_POINT_INTERP": "true", "FIND_SEARCH_AREA": "1", "FIND_ADDRESS_RANGE": "true", "FIND_EXPANDED_SEARCH_RADIUS": "50", "FIND_ALTERNATE_LOOKUP": "2", "FIND_STREET_CENTROID": "true", "FIND_FIRST_LETTER_EXPANDED": "true"}}', taxAddresses: ''});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(400);
    });
});
describe("GeoTax Test Suite: getAdvancedTaxByLocation", function(){
	var GT;	
	beforeEach(function() {
		GT = new GEOAPIS_V1.geoTax('Basic bGJzYWRtaW46bGJzYWRtaW4jMQ==');
		GT.accessToken = 'Basic bGJzdXNlcjptYXBpbmZvQDEyMw==';
		GT.apiAddress = 'http://54.86.242.73/geotax/services';
	});
    it("geoTax Post Tax By Location Valid Parameters", function () {
        var geo = GT.getAdvancedTaxByLocation({taxType:'General', preferences: '{"outputCasing":"M", "defaultBufferWidth":"", "distanceUnits":"METERS", "returnCensusFields":"Y", "returnLatLongFields":"Y"}', locations: '[{"geometry": {"type": "point", "coordinates": [-101.2369835, 45.0001134]}, "purchaseAmount": "100"}, {"geometry": {"type": "point", "coordinates": [-101.2369835, 45.0001134]}, "purchaseAmount": "50"}]'});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(200);
    });
	it("geoTax Post Tax By Location Invalid TaxType", function () {
        var geo = GT.getAdvancedTaxByLocation({taxType:'', preferences: '{"outputCasing":"M", "defaultBufferWidth":"", "distanceUnits":"METERS", "returnCensusFields":"Y", "returnLatLongFields":"Y"}', locations: '[{"geometry": {"type": "point", "coordinates": [-101.2369835, 45.0001134]}, "purchaseAmount": "100"}, {"geometry": {"type": "point", "coordinates": [-101.2369835, 45.0001134]}, "purchaseAmount": "50"}]'});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(404);
    });
	it("geoTax Post Tax By Location Invalid Preferences", function () {
        var geo = GT.getAdvancedTaxByLocation({taxType:'General', preferences: '', locations: '[{"geometry": {"type": "point", "coordinates": [-101.2369835, 45.0001134]}, "purchaseAmount": "100"}, {"geometry": {"type": "point", "coordinates": [-101.2369835, 45.0001134]}, "purchaseAmount": "50"}]'});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(400);
    });
	it("geoTax Post Tax By Location Invalid Location", function () {
         var geo = GT.getAdvancedTaxByLocation({taxType:'General', preferences: '{"outputCasing":"M", "defaultBufferWidth":"", "distanceUnits":"METERS", "returnCensusFields":"Y", "returnLatLongFields":"Y"}', locations: ''});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(400);
    });
});
describe("GeoTax Test Suite: getAdvancedIpdTaxRateByAddress", function(){
	var GT;	
	beforeEach(function() {
		GT = new GEOAPIS_V1.geoTax('Basic bGJzdXNlcjptYXBpbmZvQDEyMw==');
		GT.accessToken = 'Basic bGJzdXNlcjptYXBpbmZvQDEyMw==';
		GT.apiAddress = 'http://52.7.233.3/geotax/services';
	});
    it("geoTax Post Tax Rate By Address Valid Parameters", function () {
        var geo = GT.getAdvancedIpdTaxRateByAddress({preferences: '{"fallbackToGeographic": "true","matchMode": "EXACT","latLongOffset": "40","squeeze": "Y","latLongFormat": "Decimal","defaultBufferWidth": "50","distanceUnits": "Feet","outputCasing": "M","returnCensusFields": "Y","returnLatLongFields": "Y","returnAllCandidateInfo": "","maxReturnedCandidates": "","streetOffset": "","cornerOffset": "","customPreferences": {"FIND_ADDR_POINT_INTERP": "true","FIND_SEARCH_AREA": "1","FIND_ADDRESS_RANGE": "true","FIND_EXPANDED_SEARCH_RADIUS": "50","FIND_ALTERNATE_LOOKUP": "2","FIND_STREET_CENTROID": "true","FIND_FIRST_LETTER_EXPANDED": "true"}}', addresses: '[{"mainAddressLine": "Empire State Building, 350 5th Ave, New York, USA"},{"mainAddressLine": "39 Sycamore Rd,Stafford 08050, USA"}]'});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(200);
    });
	it("geoTax Post Tax Rate By Address Invalid Preferences", function () {
          var geo = GT.getAdvancedIpdTaxRateByAddress({preferences: '', addresses: '[{"mainAddressLine": "Empire State Building, 350 5th Ave, New York, USA"},{"mainAddressLine": "39 Sycamore Rd,Stafford 08050, USA"}]'});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(400);
    });
	it("geoTax Post Tax Rate By Address Invalid Addresses", function () {
		 var geo = GT.getAdvancedIpdTaxRateByAddress({preferences: '{"fallbackToGeographic": "true","matchMode": "EXACT","latLongOffset": "40","squeeze": "Y","latLongFormat": "Decimal","defaultBufferWidth": "50","distanceUnits": "Feet","outputCasing": "M","returnCensusFields": "Y","returnLatLongFields": "Y","returnAllCandidateInfo": "","maxReturnedCandidates": "","streetOffset": "","cornerOffset": "","customPreferences": {"FIND_ADDR_POINT_INTERP": "true","FIND_SEARCH_AREA": "1","FIND_ADDRESS_RANGE": "true","FIND_EXPANDED_SEARCH_RADIUS": "50","FIND_ALTERNATE_LOOKUP": "2","FIND_STREET_CENTROID": "true","FIND_FIRST_LETTER_EXPANDED": "true"}}', addresses: ''});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(400);
    });
});