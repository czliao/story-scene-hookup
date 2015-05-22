$(document).ready(function() {
    $('.swiper-slide').bind('DOMSubtreeModified', function() { // Track segment changes
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

    $(document).on("keydown", function (e) {
        console.log(e.which);
        switch(e.which) {
        case 80: //'p'
            if (!pMode) {
                $('.linkSocialContainer').hide();
                $('iframe').contents().find('#slideDeckContainer').hide();
                $('iframe').contents().find('.mapControlsContainer').hide();
                pMode = true;
            } else {
                $('.linkSocialContainer').show();
                $('iframe').contents().find('#slideDeckContainer').show();
                $('iframe').contents().find('.mapControlsContainer').show();
                pMode = false;
            }
            break;
        default:
            break;
        }
    });

    $('#floatingPanel').mouseenter( function() {
        $('#floatingPanel .backdrop').fadeTo(500, 0.8);
        $('#floatingPanel .navDotsInner').fadeTo(500, 0.8);
    });

    $('#floatingPanel').mouseleave( function() {
        $('#floatingPanel .backdrop').fadeTo(500, 0);
        $('#floatingPanel .navDotsInner').fadeTo(500, 0);
    });

});




// NOTES //

// Add this to somewhere (e.g. the default segment) of the story map (in the code view):
// <script type="text/javascript" src="http://rawgit.com/czliao/story-scene-hookup/master/the-hook.js"></script>

// Add this to each segment in the story map to hook to a particular bookmark in the scene.
// <span class="slide-hook" data-slide="2"></span>