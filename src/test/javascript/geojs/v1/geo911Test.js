describe("Geo911 Test Suite: getPSAPByAddress", function(){
	var G911;	
	beforeEach(function() {
		G911 = new GEOAPIS_V1.geo911('Basic bGJzYWRtaW46bGJzYWRtaW4jMQ==');
		G911.apiAddress = 'http://52.5.109.175/geoapis/services';
	});
    it("Geo911 ByAddress Valid Parameters", function () {
        var geo = G911.getPSAPByAddress({address:'4750 Walnut St, Boulder, CO'});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(200);
    });
    it("Geo911 ByAddress Invalid Address", function () {
        var geo = G911.getPSAPByAddress({address:''});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(400);
    });
	
	/*it("Geo911 Asynchronous ByAddress Valid Parameters", function () {
        G911.getPSAPByAddress({address:'4750 Walnut St, Boulder, CO'},function(data){
			expect(data).not.toBeNull();
			expect(data.httpResponse.status).toEqual(200);
		});
    });
    it("Geo911 Asynchronous ByAddress Invalid Address", function () {
        G911.getPSAPByAddress({address:''},function(data){
			expect(data).not.toBeNull();
			expect(data.httpResponse.status).toEqual(400);
		});
    });*/
});
describe("Geo911 Test Suite: getPSAPByLocation", function(){
	var G911;	
	beforeEach(function() {
		G911 = new GEOAPIS_V1.geo911('Basic bGJzYWRtaW46bGJzYWRtaW4jMQ==');
		G911.apiAddress = 'http://52.5.109.175/geoapis/services';
	});
    it("Geo911 ByLocation Valid Parameters", function () {
        var geo = G911.getPSAPByLocation({latitude:42.5309, longitude:-73.6572});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(200);
    });
	it("Geo911 ByLocation Invalid Latitude", function () {
        var geo = G911.getPSAPByLocation({latitude:-91, longitude:-73.6572});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(400);
    });
	it("Geo911 ByLocation Invalid Longitude", function () {
        var geo = G911.getPSAPByLocation({latitude:42.5309, longitude:200});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(400);
    });
	
	/*it("Geo911 Asynchronous ByLocation Valid Parameters", function () {
        G911.getPSAPByLocation({latitude:42.5309, longitude:-73.6572},function(data){
			expect(data).not.toBeNull();
			expect(data.httpResponse.status).toEqual(200);
		});
    });
	it("Geo911 Asynchronous ByLocation Invalid Latitude", function () {
        G911.getPSAPByLocation({latitude:-91, longitude:-73.6572}, function(data){
			expect(data).not.toBeNull();
			expect(data.httpResponse.status).toEqual(400);
		});
    });
	it("Geo911 Asynchronous ByLocation Invalid Longitude", function () {
        G911.getPSAPByLocation({latitude:42.5309, longitude:200}, function(data){
			expect(data).not.toBeNull();
			expect(data.httpResponse.status).toEqual(400);
		});
    });*/
	
});
describe("Geo911 Test Suite: getAHJPLUSPSAPByAddress", function(){
	var G911;	
	beforeEach(function() {
		G911 = new GEOAPIS_V1.geo911('Basic bGJzYWRtaW46bGJzYWRtaW4jMQ==');
		G911.apiAddress = 'http://52.5.109.175/geoapis/services';
	});
    it("Geo911 AHJ - PSAP ByAddress Valid Parameters", function () {
        var geo = G911.getAHJPLUSPSAPByAddress({address:'4750 Walnut St, Boulder, CO'});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(200);
    });
    it("Geo911 AHJ - PSAP ByAddress Invalid Address", function () {
        var geo = G911.getAHJPLUSPSAPByAddress({address:''});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(400);
    });
	
	/*it("Geo911 Asynchronous AHJ - PSAP ByAddress Valid Parameters", function () {
        G911.getAHJPLUSPSAPByAddress({address:'4750 Walnut St, Boulder, CO'},function(data){
			expect(data).not.toBeNull();
			expect(data.httpResponse.status).toEqual(200);
		});
    });
    it("Geo911 Asynchronous AHJ - PSAP ByAddress Invalid Address", function () {
        G911.getAHJPLUSPSAPByAddress({address:''},function(data){
			expect(data).not.toBeNull();
			expect(data.httpResponse.status).toEqual(400);
		});
    });*/
});
describe("Geo911 Test Suite: getAHJPLUSPSAPByLocation", function(){
	var G911;	
	beforeEach(function() {
		G911 = new GEOAPIS_V1.geo911('Basic bGJzYWRtaW46bGJzYWRtaW4jMQ==');
		G911.apiAddress = 'http://52.5.109.175/geoapis/services';
	});
    it("Geo911 AHJ - PSAP ByLocation Valid Parameters", function () {
        var geo = G911.getAHJPLUSPSAPByLocation({latitude:42.5309, longitude:-73.6572});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(200);
    });
	it("Geo911 AHJ - PSAP ByLocation Invalid Latitude", function () {
        var geo = G911.getAHJPLUSPSAPByLocation({latitude:-91, longitude:-73.6572});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(400);
    });
	it("Geo911 AHJ - PSAP ByLocation Invalid Longitude", function () {
        var geo = G911.getAHJPLUSPSAPByLocation({latitude:42.5309, longitude:200});
        expect(geo).not.toBeNull();
		expect(geo.httpResponse.status).toEqual(400);
    });
	
	/*it("Geo911 Asynchronous AHJ - PSAP ByLocation Valid Parameters", function () {
        G911.getAHJPLUSPSAPByLocation({latitude:42.5309, longitude:-73.6572},function(data){
			expect(data).not.toBeNull();
			expect(data.httpResponse.status).toEqual(200);
		});
    });
	it("Geo911 Asynchronous AHJ - PSAP ByLocation Invalid Latitude", function () {
        G911.getAHJPLUSPSAPByLocation({latitude:-91, longitude:-73.6572}, function(data){
			expect(data).not.toBeNull();
			expect(data.httpResponse.status).toEqual(400);
		});
    });
	it("Geo911 Asynchronous AHJ - PSAP ByLocation Invalid Longitude", function () {
        G911.getAHJPLUSPSAPByLocation({latitude:42.5309, longitude:200}, function(data){
			expect(data).not.toBeNull();
			expect(data.httpResponse.status).toEqual(400);
		});
    });*/
	
});