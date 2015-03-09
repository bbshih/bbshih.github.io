/* jshint devel:true */
'use strict';
var billyExist = false;
function moveScroller() {
    var move = function() {
        var s = $('nav');
        var navHeight = s.outerHeight();
        var st = $(window).scrollTop();
        var ot = $('#portfolio').offset().top - navHeight;

        if(st > ot) {
            s.css({
                position: 'fixed',
                top: '0px'
            });
            $('#portfolio').css('margin-top', navHeight);
            if(!billyExist) {
                $('div.nav').add('div#adjustNav');
                $('div.nav').prepend('<span id="navTitle"><a href="#intro">Billy Shih</a></span>');
                billyExist = true;
            }
        } else {
            if(st <= ot) {
                s.css({
                    position: 'relative'
                });
                $('#portfolio').css('margin-top', 0);
                if(billyExist) {
                    $('#navTitle').remove();
                    billyExist = false;
                }
            }
        }
    };
    $(window).scroll(move);
    move();
}

$(function() {
  moveScroller();
});
