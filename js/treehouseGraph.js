var chartData;
var outputChartData = [];
var jsonChartData;
var randomColor = function(){
	return '#' + ('00000'+(Math.random()*(1<<24)|0).toString(16)).slice(-6)
};



$.ajax({
	url: "https://teamtreehouse.com/petermkreppein.json",
	dataType: "text",
	success: function(data){
		var json = $.parseJSON(data);
		//Set JSON to chartData var
		chartData = json.points;
		//Create Array for Chart.json
		outputChartData = $.map(chartData, function(score, course){
			if (score > 1 && course != "total"){
				return {"label": course, "value": score, "color": randomColor()};
			} else {
				return null;
			}
		});
		var ctx = $("#myChart").get(0).getContext("2d");
		var myNewChart = new Chart(ctx);
		new Chart(ctx).Pie(outputChartData);
		
		$(outputChartData).each(function(){
			$("#chartLegend").append("<div class='legendWrapper'> <div class='legendLabelColor' style='background:" + this.color + "'></div>" +"<div class='legendLabelText'>" + this.label
			+ ": " + this.value + "</div> </div>");
		});
		
		
	}
});
