$(function() {

	// Toggle primary menu
	$('#toggle-primary-menu').click(function() {
		$(this).toggleClass('active');
		$('#primary-menu').toggleClass('toggled');
	});

	// Adjust intro heights and margins
	$('.intro.image').height(0.9 * ($(window).height() - $('header').height()));
	$('.intro.content').css('margin-top', ($('.intro.image').height() - $('.intro.content').height()) * 0.5);

});