$(document).ready(function(){
	$('ul li:has(ul)').addClass('subnav');
	expand();
})

var expand= function(){
	$(".title a").click(function(e){
		if($(this).hasClass("expand")){
			$(this).addClass("contract").removeClass("expand");
			$(this).parent().siblings().slideDown();
			e.preventDefault();
		}else{
			$(this).addClass("expand").removeClass("contract");
			$(this).parent().siblings().slideUp();
			e.preventDefault();
		}
	});
}

