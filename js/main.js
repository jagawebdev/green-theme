/*global $*/
/* PRELOADER */
$(window).ready(function() {
    $('#loading').hide();
});


$(document).ready(function() {
   /**
   * Drop Down Menu
   */
    $('.hamburger').click( function(event){
        event.stopPropagation();
        $('.drop-menu').toggle();
    });

    $(document).click( function(){
        $('.drop-menu').hide();
    });

    /**
    * Fancybox
    */
    $(".fancybox").fancybox();
});

/**
* Window scroll effects
*/
$(window).scroll(function(){
    /**
    * Scroll slow effect to #packages
    */
    $("#to-top").click(function() {
        $('html:not(:animated),body:not(:animated)').animate({
            scrollTop: $("#packages").offset().top
        }, 2000);
        return false;
        $(window).bind("mousewheel", function() {
        $("html, body").stop(true, false);
    });
    });
    
    
    var mn = $(".navigation");
     if( $(this).scrollTop() > 140 ) {
          mn.addClass("main-nav-scrolled");
        } else {
          mn.removeClass("main-nav-scrolled");
        }
    

    /**
    * Scroll slow effect to #booking
    */
    $(".scroll-to").click(function() {
        $('html:not(:animated),body:not(:animated)').animate({
            scrollTop: $("#booking").offset().top
        }, 2000);
        return false;
        $(window).bind("mousewheel", function() {
        $("html, body").stop(true, false);
        });
    });
});

// var headnav = document.getElementById('headnav');
// var headnavPos = headnav.offsetTop;
// window.onscroll = function() {
//     console.log(document.body.scrollTop);
//     if(document.body.scrollTop > headnavPos) {
//         if(headnav.style.position !== 'fixed') {
//             headnav.style.position = 'fixed';
//         }
//     } else  {
//         if(headnav.style.position === 'fixed') {
//             headnav.style.position = '';
//         }
//     }

// }
