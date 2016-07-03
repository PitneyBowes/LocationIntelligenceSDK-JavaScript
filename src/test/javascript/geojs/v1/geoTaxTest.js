describe("GeoTax Test Suite: getTaxRateByAddress", function(){
	var GT;	
	beforeEach(function() {
		GT = new GEOAPIS_V1.geoTax('<Put your Token Here>');
		GT.apiAddress = 'https://api.pitneybowes.com/location-intelligence';
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
		GT = new GEOAPIS_V1.geoTax('<Put your Token Here>');
		GT.apiAddress = 'https://api.pitneybowes.com/location-intelligence';
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
		GT = new GEOAPIS_V1.geoTax('<Put your Token Here>');
		GT.apiAddress = 'https://api.pitneybowes.com/location-intelligence';
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
		GT = new GEOAPIS_V1.geoTax('<Put your Token Here>');
		GT.apiAddress = 'https://api.pitneybowes.com/location-intelligence';
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