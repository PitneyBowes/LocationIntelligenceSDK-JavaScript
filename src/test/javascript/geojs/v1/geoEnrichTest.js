describe("GeoEnrich Test Suite: getAddress", function(){
	var GE;	
	beforeEach(function() {
		GE = new GEOAPIS_V1.geoEnrich('Basic bGJzYWRtaW46bGJzYWRtaW4jMQ==');
		GE.apiAddress = 'http://52.5.109.175/geoapis/services';
	});
    it("GeoEnrich Address Valid Parameters", function () {
        var geo = GE.getAddress({latitude:42.5309, longitude:-73.6572, searchRadius:3000, searchRadiusUnit:'feet'});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(200);
    });
    it("GeoEnrich Address Valid Parameters Without SearchRadius", function () {
        var geo = GE.getAddress({latitude:42.5309, longitude:-73.6572});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(200);
    });
	it("GeoEnrich Address Invalid Latitude", function () {
        var geo = GE.getAddress({latitude:-91, longitude:-73.6572});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(400);
    });
	it("GeoEnrich Address Invalid Longitude", function () {
        var geo = GE.getAddress({latitude:42.5309, longitude:200});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(400);
    });
});


describe("GeoEnrich Test Suite: getPlace", function(){
	var GE;	
	beforeEach(function() {
		GE = new GEOAPIS_V1.geoEnrich('Basic bGJzYWRtaW46bGJzYWRtaW4jMQ==');
		GE.apiAddress = 'http://52.5.109.175/geoapis/services';
	});
    it("GeoEnrich Place Valid Parameters", function () {
        var geo = GE.getPlace({latitude:42.5309, longitude:-73.6572, levelHint:2});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(200);
    });
    it("GeoEnrich Place Valid Parameters Without LevelHint", function () {
        var geo = GE.getPlace({latitude:42.5309, longitude:-73.6572});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(200);
    });
	it("GeoEnrich Place Invalid Latitude", function () {
        var geo = GE.getPlace({latitude:-91, longitude:-73.6572});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(400);
    });
	it("GeoEnrich Place Invalid Longitude", function () {
        var geo = GE.getPlace({latitude:42.5309, longitude:200});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(400);
    });
});


describe("GeoEnrich Test Suite: getPOI", function(){
	var GE;	
	beforeEach(function() {
		GE = new GEOAPIS_V1.geoEnrich('Basic bGJzYWRtaW46bGJzYWRtaW4jMQ==');
		GE.apiAddress = 'http://52.5.109.175/geoapis/services';
	});
    it("GeoEnrich POI Valid Parameters", function () {
        var geo = GE.getPOI({latitude:42.5309, longitude:-73.6572, category:1023, searchRadius:20, maxCandidates:10, searchRadiusUnit:'MILES', searchPriority:'N', searchDataset:'PBData'});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(200);
    });
    it("GeoEnrich POI Valid Parameters Without Optional Parameters", function () {
        var geo = GE.getPOI({latitude:42.5309, longitude:-73.6572});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(200);
    });
	it("GeoEnrich POI Invalid Latitude", function () {
        var geo = GE.getPOI({latitude:-91, longitude:-73.6572});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(400);
    });
	it("GeoEnrich POI Invalid Longitude", function () {
        var geo = GE.getPOI({latitude:42.5309, longitude:200});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(400);
    });
});