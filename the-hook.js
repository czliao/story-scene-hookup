$(document).ready(function() {
	$('.sections').scroll(function(e) {
		console.log('scrolled');
	})
	// alert("I'm done.");
	$('.swiper-slide').click(function(e) {
		console.log(e);
	});
});