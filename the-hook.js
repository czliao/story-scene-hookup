$(document).ready(function() {
	$('.swiper-slide').bind('DOMSubtreeModified', function(e) { // Track segment changes
		setTimeout(triggerHook, 50);
	});

	function triggerHook () {
		var hook = $('.swiper-slide-active .slide-hook'); // Find custom hook in segment content, see notes at end.
		if (hook) {
			var slide_num = $(hook).attr('data-slide');
			$('iframe').contents().find('*[nr="'+ slide_num +'"] .slideButton').click(); // Trigger the jump by faking a click on the hidden slide button.
		}
	}

	// EXTRA: Presentation Mode //

	var pMode = false;

	window.addEventListener('keydown', function(k) {
		switch(k.keyCode) {
        case 'p':
        	if (!pMode) {
        		$('.linkSocialContainer').hide();
        		$('iframe').contents().find('#slideDeckContainer').hide();
        		pMode = true;
        	} else {
        		$('.linkSocialContainer').show();
        		$('iframe').contents().find('#slideDeckContainer').show();
        		pMode = false;
        	}
            break;
        default:
            break;
    }
});




// NOTES //

// Add this to each segment in the story map to hook to a particular bookmark in the scene.
//<span class="slide-hook" data-slide="2"></span>