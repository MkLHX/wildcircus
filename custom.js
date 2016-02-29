$(function(){
	// navigation
	$("#content").load("page.html #home");
	$("#home").click(function(){
		$(this).addClass('selectli');
		$("#page1,#page2,#page3,#page4,#page5,#page6,#page7,#page8").removeClass('selectli');
		$("#content").load("page.html #home");
	});
	$("#page1").click(function(){
		$(this).addClass('selectli');
		$("#home,#page2,#page3,#page4,#page5,#page6,#page7,#page8").removeClass('selectli');
		$("#content").load("page.html #page1content");
	});
	$("#page2").click(function(){
		$(this).addClass('selectli');
		$("#home,#page1,#page3,#page4,#page5,#page6,#page7,#page8").removeClass('selectli');
		$("#content").load("page.html #page2content");
	});
	$("#page3").click(function(){
		$(this).addClass('selectli');
		$("#home,#page1,#page2,#page4,#page5,#page6,#page7,#page8").removeClass('selectli');
		$("#content").load("page.html #page3content");
	});
	$("#page4").click(function(){
		$(this).addClass('selectli');
		$("#home,#page1,#page2,#page3,#page5,#page6,#page7,#page8").removeClass('selectli');
		$("#content").load("page.html #page4content");
	});
	$("#page5").click(function(){
		$(this).addClass('selectli');
		$("#home,#page1,#page2,#page3,#page4,#page6,#page7,#page8").removeClass('selectli');
		$("#content").load("page.html #page5content");
	});
	$("#page6").click(function(){
		$(this).addClass('selectli');
		$("#home,#page1,#page2,#page3,#page4,#page5,#page7,#page8").removeClass('selectli');
		$("#content").load("page.html #page6content");
	});
	$("#page7").click(function(){
		$(this).addClass('selectli');
		$("#home,#page1,#page2,#page3,#page4,#page5,#page6,#page8").removeClass('selectli');
		$("#content").load("page.html #page7content");
	});
	$("#page8").click(function(){
		$(this).addClass('selectli');
		$("#home,#page1,#page2,#page3,#page4,#page5,#page6,#page7").removeClass('selectli');
		$("#content").load("page.html #page8content");
	});
	
	// bp back to top
	// scroll distance to display bp
	var amountScrolled = 450;
	
	$(window).scroll(function() {
		if ( $(window).scrollTop() > amountScrolled ) {
			$('a.back-to-top').fadeIn('slow');
		} else {
			$('a.back-to-top').fadeOut('slow');
		}
	});
	// bp action to up
	$('a.back-to-top').click(function() {
	$('html, body').animate({
		scrollTop: 0
	}, 700);
	return false;
});
});