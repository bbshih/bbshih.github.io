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
            $("#portfolio").css("padding-top", navHeight);
        } else {
            if(st <= ot) {
                s.css({
                    position: "relative",
                });
                $("#portfolio").css("padding-top", 0);
            }
        }
    };
    $(window).scroll(move);
    move();
}
