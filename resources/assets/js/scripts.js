$(function() {
	// Toggle primary menu
	$('#toggle-primary-menu').click(function() {
		$(this).toggleClass('active');
		$('#primary-menu').toggleClass('toggled');
	});
});