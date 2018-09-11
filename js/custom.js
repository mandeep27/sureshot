// Preloader 
jQuery(function ($) {
    //Preloader
    $(window).load(function () {
        $('body').css('overflow-y', 'visible');
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });
});
// Wow 
wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated', // default
    offset: 0, // default
    mobile: false, // default
    live: true // default
})
wow.init();
// Bootstrap Slider 
$('.carousel').carousel({
    interval: 20000
});
/**** Header Submenu ****/
jQuery('.menu-item-has-children').hover(function () {
        jQuery(this).addClass('sub-menu-open')
    }, function () {
        jQuery(this).removeClass('sub-menu-open')
    })
    /**** Select Box ****/
jQuery('.search_form_sec select').change(function () {
    if (jQuery(this).children('option:first-child').is(':selected')) {
        jQuery(this).addClass('placeholder1');
    }
    else {
        jQuery(this).removeClass('placeholder1');
    }
});

/**** owl carousel ****/
jQuery(document).ready(function () {
    var owl = jQuery("#owl-demo");
    owl.owlCarousel({
        itemsCustom: [
                [767, 2]
                , [992, 3]
                , [1200, 3]
                , [1500, 3]]
        , navigation: true
        , slideSpeed: 1000
        , scrollPerPage: true
    });
});
/**** Header Nav ****/

 jQuery("nav>ul>li>a").append("<span class='bottom-line'></span>");

/**** Gallery ****/
	jQuery(function() {
			
				jQuery(' #da-thumbs > li ').each( function() { jQuery(this).hoverdir(); } );

			});
