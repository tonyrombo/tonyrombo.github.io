$(document).ready(function(){
	var windowHeight = $( window ).height();

	console.log(windowHeight);

	$(function(){
		$(".header").height(windowHeight);
	})
});