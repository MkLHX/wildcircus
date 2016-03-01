$(function(){
	// memo position scrollbar
	$(window).scroll(function(){
		scrollPosition = $(window).scrollTop();
	});
	// navigation
	$("#content").load("page.html #home");
	$("#home").click(function(){
		$(this).addClass('selectli');
		$("#page1,#page2,#page3,#page4,#page5,#page6,#page7,#page8").removeClass('selectli');
		$("#content").load("page.html #home", function(){
			$(window).scrollTop(scrollPosition);
		});
	});
	$("#page1").click(function(){
		$(this).addClass('selectli');
		$("#home,#page2,#page3,#page4,#page5,#page6,#page7,#page8").removeClass('selectli');
		$("#content").load("page.html #page1content", function(){
			$(window).scrollTop(scrollPosition);
		});
	});
	$("#page2").click(function(){
		$(this).addClass('selectli');
		$("#home,#page1,#page3,#page4,#page5,#page6,#page7,#page8").removeClass('selectli');
		$("#content").load("page.html #page2content", function(){
			$(window).scrollTop(scrollPosition);
		});
	});
	$("#page3").click(function(){
		$(this).addClass('selectli');
		$("#home,#page1,#page2,#page4,#page5,#page6,#page7,#page8").removeClass('selectli');
		$("#content").load("page.html #page3content", function(){
			$(window).scrollTop(scrollPosition);
		});
	});
	$("#page4").click(function(){
		$(this).addClass('selectli');
		$("#home,#page1,#page2,#page3,#page5,#page6,#page7,#page8").removeClass('selectli');
		$("#content").load("page.html #page4content", function(){
			$(window).scrollTop(scrollPosition);
		});
	});
	$("#page5").click(function(){
		$(this).addClass('selectli');
		$("#home,#page1,#page2,#page3,#page4,#page6,#page7,#page8").removeClass('selectli');
		$("#content").load("page.html #page5content", function(){
			$(window).scrollTop(scrollPosition);
		});
	});
	$("#page6").click(function(){
		$(this).addClass('selectli');
		$("#home,#page1,#page2,#page3,#page4,#page5,#page7,#page8").removeClass('selectli');
		$("#content").load("page.html #page6content", function(){
			$(window).scrollTop(scrollPosition);
		});;
	});
	$("#page7").click(function(){
		$(this).addClass('selectli');
		$("#home,#page1,#page2,#page3,#page4,#page5,#page6,#page8").removeClass('selectli');
		$("#content").load("page.html #page7content", function(){
			$(window).scrollTop(scrollPosition);
		});
	});
	$("#page8").click(function(){
		$(this).addClass('selectli');
		$("#home,#page1,#page2,#page3,#page4,#page5,#page6,#page7").removeClass('selectli');
		$("#content").load("page.html #page8content", function(){
			$(window).scrollTop(scrollPosition);
		});
	});
	
	// bp back to top
	// scroll distance to display bp
	var amountScrolled = 350;
	$('#content').scroll(function() {
		if ( $('#content').scrollTop() > amountScrolled ) {
			$('a.back-to-top').fadeIn('slow');
		} else {
			$('a.back-to-top').fadeOut('slow');
		}
	});
	// bp action to up
	$('a.back-to-top').click(function() {
	$('#content').animate({
		scrollTop: 0
	}, 700);
	return false;
});
});