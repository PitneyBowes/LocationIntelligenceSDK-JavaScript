describe("GeoTime Test Suite: getTimezoneByAddress", function(){
	var GE;	
	beforeEach(function() {
		GE = new GEOAPIS_V1.geoTime('Basic bGJzYWRtaW46bGJzYWRtaW4jMQ==');
		GE.apiAddress = 'http://52.5.109.175/geoapis/services';
	});
    it("GeoTime Timezone Valid Parameters", function () {
        var geo = GE.getTimezoneByAddress({address:'4750 Walnut st, Boulder, CO', timestamp:1434539197149});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(200);
    });
    it("GeoTime Timezone Invalid Timestamp", function () {
        var geo = GE.getTimezoneByAddress({address:'4750 Walnut st, Boulder, CO', timestamp:''});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(400);
    });
	it("GeoTime Timezone Invalid Address", function () {
        var geo = GE.getTimezoneByAddress({address:'', timestamp:1434539197149});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(400);
    });
});
describe("GeoTime Test Suite: getTimezoneByLocation", function(){
	var GE;	
	beforeEach(function() {
		GE = new GEOAPIS_V1.geoTime('Basic bGJzYWRtaW46bGJzYWRtaW4jMQ==');
		GE.apiAddress = 'http://52.5.109.175/geoapis/services';
	});
    it("GeoTime Timezone Valid Parameters", function () {
        var geo = GE.getTimezoneByLocation({latitude:42.5309, longitude:-73.6572, timestamp:1434539197149});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(200);
    });
    it("GeoTime Timezone Invalid Timestamp", function () {
        var geo = GE.getTimezoneByLocation({latitude:42.5309, longitude:-73.6572, timestamp:''});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(400);
    });
	it("GeoTime Timezone Invalid Latitude", function () {
        var geo = GE.getTimezoneByLocation({latitude:-91, longitude:-73.6572, timestamp:1434539197149});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(400);
    });
	it("GeoTime Timezone Invalid Longitude", function () {
        var geo = GE.getTimezoneByLocation({latitude:42.5309, longitude:200, timestamp:1434539197149});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(400);
    });
});