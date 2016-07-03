describe("GeoEnhance Test Suite: getAddress", function(){
	var GE;	
	beforeEach(function() {
		GE = new GEOAPIS_V1.geoEnhance('<Put your Token Here>');
		GE.apiAddress = 'https://api.pitneybowes.com/location-intelligence';
	});
    it("GeoEnhance Address Valid Parameters", function () {
        var geo = GE.getAddress({latitude:42.5309, longitude:-73.6572, searchRadius:3000, searchRadiusUnit:'feet'});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(200);
    });
    it("GeoEnhance Address Valid Parameters Without SearchRadius", function () {
        var geo = GE.getAddress({latitude:42.5309, longitude:-73.6572});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(200);
    });
	it("GeoEnhance Address Invalid Latitude", function () {
        var geo = GE.getAddress({latitude:-91, longitude:-73.6572});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(400);
    });
	it("GeoEnhance Address Invalid Longitude", function () {
        var geo = GE.getAddress({latitude:42.5309, longitude:200});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(400);
    });
	
	it("GeoEnhance Asynchronous Address Valid Parameters", function () {
        GE.getAddress({latitude:42.5309, longitude:-73.6572, searchRadius:20}, function (data) {
			expect(data).not.toBeNull();
			expect(data.httpResponse.status).toEqual(200);
		});
    });
    it("GeoEnhance Asynchronous Address Valid Parameters Without SearchRadius", function () {
        GE.getAddress({latitude:42.5309, longitude:-73.6572}, function (data) {
			expect(data).not.toBeNull();
			expect(data.httpResponse.status).toEqual(200);
		});
    });
	it("GeoEnhance Asynchronous Address Invalid Latitude", function () {
        GE.getAddress({latitude:-91, longitude:-73.6572}, function (data) {
			expect(data).not.toBeNull();
			expect(data.httpResponse.status).toEqual(400);
		});
    });
	it("GeoEnhance Asynchronous Address Invalid Longitude", function () {
        GE.getAddress({latitude:42.5309, longitude:200}, function (data) {
			expect(data).not.toBeNull();
			expect(data.httpResponse.status).toEqual(400);
		});
    });
});


describe("GeoEnhance Test Suite: getPlace", function(){
	var GE;	
	beforeEach(function() {
		GE = new GEOAPIS_V1.geoEnhance('<Put your Token Here>');
		GE.apiAddress = 'https://api.pitneybowes.com/location-intelligence';
	});
    it("GeoEnhance Place Valid Parameters", function () {
        var geo = GE.getPlace({latitude:42.5309, longitude:-73.6572, levelHint:2});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(200);
    });
    it("GeoEnhance Place Valid Parameters Without LevelHint", function () {
        var geo = GE.getPlace({latitude:42.5309, longitude:-73.6572});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(200);
    });
	it("GeoEnhance Place Invalid Latitude", function () {
        var geo = GE.getPlace({latitude:-91, longitude:-73.6572});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(400);
    });
	it("GeoEnhance Place Invalid Longitude", function () {
        var geo = GE.getPlace({latitude:42.5309, longitude:200});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(400);
    });
	
	it("GeoEnhance Asynchronous Place Valid Parameters", function () {
        GE.getPlace({latitude:42.5309, longitude:-73.6572, levelHint:2}, function (data) {
			expect(data).not.toBeNull();
			expect(data.httpResponse.status).toEqual(200);
		});
    });
    it("GeoEnhance Asynchronous Place Valid Parameters Without LevelHint", function () {
        GE.getPlace({latitude:42.5309, longitude:-73.6572}, function (data) {
			expect(data).not.toBeNull();
			expect(data.httpResponse.status).toEqual(200);
		});
    });
	it("GeoEnhance Asynchronous Place Invalid Latitude", function () {
        GE.getPlace({latitude:-91, longitude:-73.6572}, function (data) {
			expect(data).not.toBeNull();
			expect(data.httpResponse.status).toEqual(400);
		});
    });
	it("GeoEnhance Asynchronous Place Invalid Longitude", function () {
        GE.getPlace({latitude:42.5309, longitude:200}, function (data) {
			expect(data).not.toBeNull();
			expect(data.httpResponse.status).toEqual(400);
		});
    });
});


describe("GeoEnhance Test Suite: getPOI", function(){
	var GE;	
	beforeEach(function() {
		GE = new GEOAPIS_V1.geoEnhance('<Put your Token Here>');
		GE.apiAddress = 'https://api.pitneybowes.com/location-intelligence';
	});
    it("GeoEnhance POI Valid Parameters", function () {
        var geo = GE.getPOI({latitude:42.5309, longitude:-73.6572, category:1023, searchRadius:20, maxCandidates:10, searchRadiusUnit:'MILES', searchPriority:'N', searchDataset:'PBData'});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(200);
    });
    it("GeoEnhance POI Valid Parameters Without Optional Parameters", function () {
        var geo = GE.getPOI({latitude:42.5309, longitude:-73.6572});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(200);
    });
	it("GeoEnhance POI Invalid Latitude", function () {
        var geo = GE.getPOI({latitude:-91, longitude:-73.6572});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(400);
    });
	it("GeoEnhance POI Invalid Longitude", function () {
        var geo = GE.getPOI({latitude:42.5309, longitude:200});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(400);
    });
	
    it("GeoEnhance Asynchronous POI Valid Parameters", function () {
        GE.getPOI({latitude:42.5309, longitude:-73.6572, category:1023, searchRadius:20, maxCandidates:10, searchRadiusUnit:'MILES'}, function (data) {
			expect(data).not.toBeNull();
			expect(data.httpResponse.status).toEqual(200);
		});
    });
    it("GeoEnhance Asynchronous POI Valid Parameters Without Optional Parameters", function () {
        GE.getPOI({latitude:42.5309, longitude:-73.6572}, function (data) {
			expect(data).not.toBeNull();
			expect(data.httpResponse.status).toEqual(200);
		});
    });
	it("GeoEnhance Asynchronous POI Invalid Latitude", function () {
        GE.getPOI({latitude:-91, longitude:-73.6572}, function (data) {
			expect(data).not.toBeNull();
			expect(data.httpResponse.status).toEqual(400);
		});
    });
	it("GeoEnhance Asynchronous POI Invalid Longitude", function () {
        GE.getPOI({latitude:42.5309, longitude:200}, function (data) {
			expect(data).not.toBeNull();
			expect(data.httpResponse.status).toEqual(400);
		});
    });
});

describe("GeoEnhance Test Suite: getTimezone", function(){
	var GE;	
	beforeEach(function() {
		GE = new GEOAPIS_V1.geoEnhance('<Put your Token Here>');
		GE.apiAddress = 'https://api.pitneybowes.com/location-intelligence';
	});
    it("GeoEnhance Timezone Valid Parameters", function () {
        var geo = GE.getTimezone({latitude:42.5309, longitude:-73.6572, timestamp:1434539197149});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(200);
    });
    it("GeoEnhance Timezone Invalid Timestamp", function () {
        var geo = GE.getTimezone({latitude:42.5309, longitude:-73.6572, timestamp:''});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(400);
    });
	it("GeoEnhance Timezone Invalid Latitude", function () {
        var geo = GE.getTimezone({latitude:-91, longitude:-73.6572, timestamp:1434539197149});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(400);
    });
	it("GeoEnhance Timezone Invalid Longitude", function () {
        var geo = GE.getTimezone({latitude:42.5309, longitude:200, timestamp:1434539197149});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(400);
    });
	
	it("GeoEnhance Asynchronous Timezone Valid Parameters", function () {
        GE.getTimezone({latitude:42.5309, longitude:-73.6572, timestamp:1434539197149}, function (data) {
			expect(data).not.toBeNull();
			expect(data.httpResponse.status).toEqual(200);
		});
    });
    it("GeoEnhance Asynchronous Timezone Invalid Timestamp", function () {
        GE.getTimezone({latitude:42.5309, longitude:-73.6572, timestamp:''}, function (data) {
			expect(data).not.toBeNull();
			expect(data.httpResponse.status).toEqual(400);
		});
    });
	it("GeoEnhance Asynchronous Timezone Invalid Latitude", function () {
        GE.getTimezone({latitude:-91, longitude:-73.6572, timestamp:1434539197149}, function (data) {
			expect(data).not.toBeNull();
			expect(data.httpResponse.status).toEqual(400);
		});
    });
	it("GeoEnhance Asynchronous Timezone Invalid Longitude", function () {
        GE.getTimezone({latitude:42.5309, longitude:200, timestamp:1434539197149}, function (data) {
			expect(data).not.toBeNull();
			expect(data.httpResponse.status).toEqual(400);
		});
    });
});