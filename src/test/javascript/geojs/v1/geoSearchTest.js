describe("GeoSearch Test Suite", function (){	
	var GeoSearch;	 
	beforeEach(function() {
		GeoSearch = new GEOAPIS_V1.geoSearch('Basic bGJzYWRtaW46bGJzYWRtaW4jMQ==');
		GeoSearch.apiAddress = 'http://52.5.109.175/geosearch/services';
	});
	
	it("GeoSearch Valid Parameters", function () {
        var geo = GeoSearch.getLocation({searchText:'times sq', latitude:40.761819, longitude:-73.997533, maxCandidates:5, searchRadius:1, searchRadiusUnit:'MILES'});
		expect(geo.httpResponse.status).toEqual(200);
    });
	
	it("GeoSearch Invalid Search Text", function () {
        var geo = GeoSearch.getLocation({searchText:'zzz', latitude:40.761819, longitude:-73.997533, maxCandidates:5, searchRadius:1, searchRadiusUnit:'MILES'});
		expect(geo.httpResponse.status).toEqual(200);
    });
	
	it("GeoSearch Invalid Latitude", function () {
        var geo = GeoSearch.getLocation({searchText:'times sq', latitude:4299, longitude:-73.997533, maxCandidates:5, searchRadius:1, searchRadiusUnit:'MILES'});
		expect(geo.httpResponse.status).toEqual(400);
    });
		
	it("GeoSearch Invalid Longitude", function () {
        var geo = GeoSearch.getLocation({searchText:'times sq', latitude:40.761819, longitude:21111, maxCandidates:5, searchRadius:1, searchRadiusUnit:'MILES'});
		expect(geo.httpResponse.status).toEqual(400);
    });

	it("GeoSearch InValid Max Candidate", function () {
        var geo = GeoSearch.getLocation({searchText:'times sq', latitude:40.761819, longitude:-73.997533, maxCandidates:-12, searchRadius:1, searchRadiusUnit:'MILES'});
		expect(geo.httpResponse.status).toEqual(400);
    });

	it("GeoSearch InValid Search Radius", function () {
        var geo = GeoSearch.getLocation({searchText:'times sq', latitude:40.761819, longitude:-73.997533, maxCandidates:5, searchRadius:-1, searchRadiusUnit:'MILES'});
		expect(geo.httpResponse.status).toEqual(400);
    });
	
	it("GeoSearch InValid Search Unit", function () {
        var geo = GeoSearch.getLocation({searchText:'times sq', latitude:40.761819, longitude:-73.997533, maxCandidates:5, searchRadius:1, searchRadiusUnit:'Yards'});
		expect(geo.httpResponse.status).toEqual(400);
    });
	it("GeoSearch InValid country", function () {
        var geo = GeoSearch.getLocation({searchText:'times sq', latitude:40.761819, longitude:-73.997533, maxCandidates:5, searchRadius:1, searchRadiusUnit:'Yards',country:'abc'});
		expect(geo.httpResponse.status).toEqual(400);
    });
	it("Either provide country or latitude/longitude", function () {
        var geo = GeoSearch.getLocation({searchText:'times sq',  maxCandidates:5, searchRadius:1, searchRadiusUnit:'Yards'});
		expect(geo.httpResponse.status).toEqual(400);
    });

	/*it("GeoSearch Async Valid Parameters", function () {
        GeoSearch.getLocation({searchText:'times sq', latitude:40.761819, longitude:-73.997533, maxCandidates:5, searchRadius:1, searchRadiusUnit:'MILES'}, function(data){
			expect(data.httpResponse.status).toEqual(200);
		});
    });

	it("GeoSearch Async Invalid Search Text", function () {
        GeoSearch.getLocation({searchText:'zzz', latitude:40.761819, longitude:-73.997533, maxCandidates:5, searchRadius:1, searchRadiusUnit:'MILES'}, function(data){
			expect(data.httpResponse.status).toEqual(200);
		});
    });

	it("GeoSearch Async Invalid Latitude", function () {
        GeoSearch.getLocation({searchText:'times sq', latitude:4299, longitude:-73.997533, maxCandidates:5, searchRadius:1, searchRadiusUnit:'MILES'}, function(data){
			expect(data.httpResponse.status).toEqual(400);
		});
    });
		
	it("GeoSearch Async Invalid Longitude", function () {
        GeoSearch.getLocation({searchText:'times sq', latitude:40.761819, longitude:21111, maxCandidates:5, searchRadius:1, searchRadiusUnit:'MILES'}, function(data){
			expect(data.httpResponse.status).toEqual(400);
		});
    });

	it("GeoSearch Async InValid Max Candidate", function () {
        GeoSearch.getLocation({searchText:'times sq', latitude:40.761819, longitude:-73.997533, maxCandidates:-12, searchRadius:1, searchRadiusUnit:'MILES'}, function(data){
			expect(data.httpResponse.status).toEqual(400);
		});
    });

	it("GeoSearch Async InValid Search Radius", function () {
        GeoSearch.getLocation({searchText:'times sq', latitude:40.761819, longitude:-73.997533, maxCandidates:5, searchRadius:-1, searchRadiusUnit:'MILES'}, function(data){
			expect(data.httpResponse.status).toEqual(400);
		});
    });
	
	it("GeoSearch Async InValid Search Unit", function () {
        GeoSearch.getLocation({searchText:'times sq', latitude:40.761819, longitude:-73.997533, maxCandidates:5, searchRadius:1, searchRadiusUnit:'Yards'}, function(data){
			expect(data.httpResponse.status).toEqual(400);
		});
    });*/
});