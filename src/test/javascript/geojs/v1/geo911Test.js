describe("Geo911 Test Suite: getPSAPByAddress", function(){
	var G911;	
	beforeEach(function() {
		G911 = new GEOAPIS_V1.geo911('<Put your Token Here>');
		G911.apiAddress = 'https://api.pitneybowes.com/location-intelligence';
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
	
	it("Geo911 Asynchronous ByAddress Valid Parameters", function () {
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
    });
});
describe("Geo911 Test Suite: getPSAPByLocation", function(){
	var G911;	
	beforeEach(function() {
		G911 = new GEOAPIS_V1.geo911('<Put your Token Here>');
		G911.apiAddress = 'https://api.pitneybowes.com/location-intelligence';
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
	
	it("Geo911 Asynchronous ByLocation Valid Parameters", function () {
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
    });
	
});