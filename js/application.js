function moveScroller() {
    var move = function() {
        var s = $("nav");
        var navHeight = s.height();
        var st = $(window).scrollTop();
        var ot = $("#portfolio").offset().top - navHeight;
        if(st > ot) {
            s.css({
                position: "fixed",
                top: "0px"
            });
            $("#portfolio").css("margin-top", navHeight);
        } else {
            if(st <= ot) {
                s.css({
                    position: "relative",
                });
                $("#portfolio").css("margin-top", 0);
            }
        }
    };
    $(window).scroll(move);
    move();
}

$(function() {
  moveScroller();
});

$(document).ready(function() {  
    $("#pAF").click(function (e) {
        e.preventDefault();
        $("#appfunnel").fadeToggle("slow", "linear");
    });
    $("#pCF").click(function (e) {
        e.preventDefault();
        $("#appfunnel").fadeToggle("slow", "linear");
    });
    $("#pTJD").click(function (e) {
        e.preventDefault();
        $("#appfunnel").fadeToggle("slow", "linear");
    });
});
