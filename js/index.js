$("#moveToExp").on('click', function(e) {
	e.preventDefault();
	scrollSpyToSection("#expSection");
});

$("#moveToPersonalProject").on('click', function(e) {
	e.preventDefault();
	scrollSpyToSection("#personalProjectSection");
});

$("#moveToContact").on('click', function(e) {
	e.preventDefault();
	scrollSpyToSection("#contactSection");
});

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
});

function scrollSpyToSection(section){
	$('html, body').animate({
		scrollTop: $(section).offset().top
	}, 1000);
}

