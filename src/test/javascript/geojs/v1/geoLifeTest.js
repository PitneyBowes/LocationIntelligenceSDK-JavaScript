describe("GeoLife Test Suite", function (){	
	var GLife;	 
	beforeEach(function() {
		GLife = new GEOAPIS_V1.geoLife('Basic bGJzYWRtaW46bGJzYWRtaW4jMQ==');
		GLife.apiAddress = 'http://52.5.109.175/geoapis/services';
	});
	
	it("GeoLife ByAddress Valid Parameters", function () {
        var geo = GLife.getDemographicByAddress({address:'1 Global View, Troy, NY', filter:'ageTheme', profile:'top5Descending', country:'USA'});
		expect(geo.httpResponse.status).toEqual(200);
    });
	
	it("GeoLife ByAddress Invalid Address", function () {
        var geo = GLife.getDemographicByAddress({address:''});
		expect(geo.httpResponse.status).toEqual(400);
    });
	
	it("GeoLife ByLocation Valid Parameters", function () {
        var geo = GLife.getDemographicByLocation({latitude:35.0118, longitude:-81.9571});
		expect(geo.httpResponse.status).toEqual(200);
    });
	
	it("GeoLife ByLocation Invalid Latitude", function () {
        var geo = GLife.getDemographicByLocation({latitude:-91, longitude:-81.9571});
		expect(geo.httpResponse.status).toEqual(400);
    });
	
	it("GeoLife ByLocation Invalid Longitude", function () {
        var geo = GLife.getDemographicByLocation({latitude:35.0118, longitude:200});
		expect(geo.httpResponse.status).toEqual(400);
    });

	it("GeoLife Segmentation ByAddress Valid Parameters", function () {
        var geo = GLife.getSegmentationByAddress({address:'1 Global View, Troy, NY', country:'USA'});
		expect(geo.httpResponse.status).toEqual(200);
    });
	
	it("GeoLife Segmentation ByAddress Invalid Address", function () {
        var geo = GLife.getSegmentationByAddress({address:''});
		expect(geo.httpResponse.status).toEqual(400);
    });
	
	it("GeoLife Segmentation ByLocation Valid Parameters", function () {
        var geo = GLife.getSegmentationByLocation({latitude:35.0118, longitude:-81.9571});
		expect(geo.httpResponse.status).toEqual(200);
    });
	
	it("GeoLife Segmentation ByLocation Invalid Latitude", function () {
        var geo = GLife.getSegmentationByLocation({latitude:-91, longitude:-81.9571});
		expect(geo.httpResponse.status).toEqual(400);
    });
	
	it("GeoLife Segmentation ByLocation Invalid Longitude", function () {
        var geo = GLife.getSegmentationByLocation({latitude:35.0118, longitude:200});
		expect(geo.httpResponse.status).toEqual(400);
    });

	/*it("GeoLife Async ByAddress Valid Parameters", function () {
        GLife.getDemographicByAddress({address:'1 Global View, Troy, NY', filter:'Agetheme', profile:'top5Descending', country:'USA'}, function(data){
			expect(data.httpResponse.status).toEqual(200);
		});
    });
	
	it("GeoLife Async ByAddress Invalid Address", function () {
        GLife.getDemographicByAddress({address:''}, function(data){
			expect(data.httpResponse.status).toEqual(400);
		});
    });
	
	it("GeoLife Async ByLocation Valid Parameters", function () {
        GLife.getDemographicByLocation({latitude:35.0118, longitude:-81.9571}, function(data){
			expect(data.httpResponse.status).toEqual(200);
		});
    });
	
	it("GeoLife Async ByLocation Invalid Latitude", function () {
        GLife.getDemographicByLocation({latitude:-91, longitude:-81.9571}, function(data){
			expect(data.httpResponse.status).toEqual(400);
		});
    });
	
	it("GeoLife Async ByLocation Invalid Longitude", function () {
        GLife.getDemographicByLocation({latitude:35.0118, longitude:200}, function(data){
			expect(data.httpResponse.status).toEqual(400);
		});
    });

	it("GeoLife Async Segmentation ByAddress Valid Parameters", function () {
        GLife.getSegmentationByAddress({address:'1 Global View, Troy, NY', country:'USA'}, function(data){
			expect(data.httpResponse.status).toEqual(200);
		});
    });
	
	it("GeoLife Async Segmentation ByAddress Invalid Address", function () {
        GLife.getSegmentationByAddress({address:''}, function(data){
			expect(data.httpResponse.status).toEqual(400);
		});
    });
	
	it("GeoLife Async Segmentation ByLocation Valid Parameters", function () {
        GLife.getSegmentationByLocation({latitude:35.0118, longitude:-81.9571}, function(data){
			expect(data.httpResponse.status).toEqual(200);
		});
    });
	
	it("GeoLife Async Segmentation ByLocation Invalid Latitude", function () {
        GLife.getSegmentationByLocation({latitude:-91, longitude:-81.9571}, function(data){
			expect(data.httpResponse.status).toEqual(400);
		});
    });
	
	it("GeoLife Async Segmentation ByLocation Invalid Longitude", function () {
        GLife.getSegmentationByLocation({latitude:35.0118, longitude:200}, function(data){
			expect(data.httpResponse.status).toEqual(400);
		});
    });*/
});