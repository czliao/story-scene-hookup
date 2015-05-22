$(document).ready(function() {
	$('.swiper-slide').bind('DOMSubtreeModified', function(e) { // Track segment changes
		var hook = $('.swiper-slide-active .slide-hook'); // Find custom hook in segment content, see notes at end.
		if (hook) {
			var slide_num = $(hook).attr('data-slide');
			$('iframe').contents().find('*[nr="'+ slide_num +'"] .slideButton').click(); // Trigger the jump by faking a click on the hidden slide button.
		}
	})
});

// NOTES //

// Add this to each segment in the story map to hook to a particular bookmark in the scene.
//<span class="slide-hook" data-slide="2"></span>