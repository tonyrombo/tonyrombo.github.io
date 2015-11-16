$(document).ready(function(){
	var windowHeight = $( window ).height(),
		windowWidth = $(window).width();

	$(function(){
		$(".header").height(windowHeight);
	});

	if(windowWidth < 1000){
		$("#show-menu, .navbar-item").click(function(){
			$(".navbar").toggleClass("expanded");
		});
	}
});