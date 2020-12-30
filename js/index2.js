$(document).ready(function(){
	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$('#back-to-top').fadeIn();
		} else {
			$('#back-to-top').fadeOut();
		}
	});
		
	// scroll body to 0px on click
	$('#back-to-top').click(function () {
		$('body,html').animate({
			scrollTop: 0
			}, 1000);
		return false;
	});

	$('#seahawksJokeBtn').click(function() {
		$('#exampleModalLong').modal('show');
	  });
	
	$('.modalClose').click(function(){
		$('#exampleModalLong').modal('hide');
	})

	$(".expTabs li a").click(function(){
		var selectedSelector = $(".expTabs .nav-item .active");
		var clicked = $(this);

		var selectedSelectorId = selectedSelector.attr('id');
		var clickedSelectorId = clicked.attr('id');

		if(selectedSelectorId !== clickedSelectorId){
			selectedSelector.removeClass("active");
			clicked.addClass("active");

			var selectedSelectorIdStr = selectedSelectorId.toString();
			var selectedDescriptionSelectorId = selectedSelectorIdStr.substring(0, selectedSelectorIdStr.length-3);

			console.log(selectedDescriptionSelectorId);

			$("#"+selectedDescriptionSelectorId).addClass("d-none");

			var clickedSelectorIdStr = clickedSelectorId.toString();
			var clickedDescSelectorId = clickedSelectorIdStr.substring(0, clickedSelectorIdStr.length-3);

			$("#"+clickedDescSelectorId).removeClass("d-none")
		}
	});
});

function scrollSpyToSection(section){
	$('html, body').animate({
		scroll: $(section).offset().top
	}, 2500);
}

