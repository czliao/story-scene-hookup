$(document).ready(function(){function n(){var n=$(".swiper-slide-active .slide-hook");if(n){var e=$(n).attr("data-slide");$("iframe").contents().find('*[nr="'+e+'"] .slideButton').click()}}$(".swiper-slide").bind("DOMSubtreeModified",function(){setTimeout(n,50)});var e=!1;$(document).on("keydown",function(n){switch(n.which){case 80:e?($(".linkSocialContainer").show(),$("iframe").contents().find("#slideDeckContainer").show(),$("iframe").contents().find(".mapControlsContainer").show(),$("#floatingPanel .backdrop").fadeTo(100,.8),$("#floatingPanel .navDotsInner").fadeTo(100,.8),e=!1):($(".linkSocialContainer").hide(),$("iframe").contents().find("#slideDeckContainer").hide(),$("iframe").contents().find(".mapControlsContainer").hide(),e=!0)}}),$("#floatingPanel").mouseenter(function(){e&&($("#floatingPanel .backdrop").fadeTo(100,.8),$("#floatingPanel .navDotsInner").fadeTo(100,.8))}),$("#floatingPanel").mouseleave(function(){e&&($("#floatingPanel .backdrop").fadeTo(100,0),$("#floatingPanel .navDotsInner").fadeTo(100,0))})});