console.log("Smooth Scroll Initialized");
	//Stackable is a class given to navigation links on the section headers on the resume page

$(".stackable a, .smooth").click(function(){
	event.preventDefault();
	
	//Get URL of link
	var fullUrl = this.href;
	//split url into two parts, with # as the denoting character
	var parts = fullUrl.split("#");
	//Get just the Anchor ID
	var target = parts[1];
	//Get offset as object, grab only top offset
	var targetOffset = $("#" + target).offset();
	var targetTop = targetOffset.top;
	
	$("html, body").animate({scrollTop: targetTop}, 1700);
	
	console.log("Scroooooooooooolllll!");
	
});

