describe("geoComm Test Suite: getRateCenterByAddress", function(){
	var GCOMM;	
	beforeEach(function() {
		GCOMM = new GEOAPIS_V1.geoComm('Basic bGJzYWRtaW46bGJzYWRtaW4jMQ==');
		GCOMM.apiAddress = 'http://54.86.242.73/geoapis/services';
	});
    it("geoComm ByAddress Valid Parameters", function () {
        var geo = GCOMM.getRateCenterByAddress({address:'4750 Walnut St, Boulder, CO', level: 'detail', country: 'USA', areaCodeInfo: true});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(200);
    });
	it("geoComm ByAddress Valid Parameters without optional parameters", function () {
        var geo = GCOMM.getRateCenterByAddress({address:'4750 Walnut St, Boulder, CO'});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(200);
    });
    it("geoComm ByAddress Invalid Address", function () {
        var geo = GCOMM.getRateCenterByAddress({address:'', level: 'detail', country: 'USA', areaCodeInfo: true});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(400);
    });
});
describe("geoComm Test Suite: getRateCenterByLocation", function(){
	var GCOMM;	
	beforeEach(function() {
		GCOMM = new GEOAPIS_V1.geoComm('Basic bGJzYWRtaW46bGJzYWRtaW4jMQ==');
		GCOMM.apiAddress = 'http://54.86.242.73/geoapis/services';
	});
    it("geoComm ByLocation Valid Parameters", function () {
        var geo = GCOMM.getRateCenterByLocation({latitude:42.5309, longitude:-73.6572, level: 'detail', areaCodeInfo: true});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(200);
    });
	it("geoComm ByLocation Valid Parameters without optional parameters", function () {
        var geo = GCOMM.getRateCenterByLocation({latitude:42.5309, longitude:-73.6572});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(200);
    });
	it("geoComm ByLocation Invalid Latitude", function () {
        var geo = GCOMM.getRateCenterByLocation({latitude:-91, longitude:-73.6572, level: 'detail', areaCodeInfo: true});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(400);
    });
	it("geoComm ByLocation Invalid Longitude", function () {
        var geo = GCOMM.getRateCenterByLocation({latitude:42.5309, longitude:200, level: 'detail', areaCodeInfo: true});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(400);
    });	
});