console.log("Script launched successfully");

var windowWidth = $(window).width();

console.log(windowWidth);

if (windowWidth < 800) {
	$(".stackable").removeClass("nav-tabs").addClass("nav-pills nav-stacked");

	console.log("Class changed per script rule.");
} else {
	console.log("Script Complete, no change made");
}