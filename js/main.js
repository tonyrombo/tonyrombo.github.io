$(document).ready(function(){
	var windowHeight = $( window ).height(),
		windowWidth = $(window).width();

	if ($(".header")) {
		$(function(){
			$(".header").height(windowHeight);
		});
	};

	if(windowWidth < 1000){
		$("#show-menu, .navbar-item, .navbar-item a").click(function(){
			$(".navbar").toggleClass("expanded");
		});
	}

	$(function() {
	  $(".navbar-item a, .logo").click(function() {
            $("html, body").stop().animate({
                scrollTop: $($(this).attr("href")).offset().top - 0
            }, 1500);
            return false;
        });
	});
});