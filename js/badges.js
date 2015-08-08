
		var chartData;
var outputChartData = [];
$.ajax({
	url: "http://teamtreehouse.com/petermkreppein.json",
	dataType: "text",
	success: function(data){
		var json = $.parseJSON(data);
		//Set JSON to chartData var
		chartData = json.points;
		//Create Array for Chart.json
		$("#html").append(chartData.HTML);
		$("#css").append(chartData.CSS);
		$("#javascript").append(chartData.JavaScript);
		$("#ios").append(chartData.iOS);
		$("#ruby").append(chartData.Ruby);
		$("#python").append(chartData.Python);
		$("#total").append(chartData.total);
		
	}
});
