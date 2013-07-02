function moveScroller() {
    var move = function() {
        var st = $(window).scrollTop();
        var ot = $("#intro").offset().top;
        var s = $("nav");
        if(st > ot) {
            s.css({
                position: "fixed",
                top: "8px"
            });
        } else {
            if(st <= ot) {
                s.css({
                    position: "relative",
                    top: "700px" // $sectionHeight - 100 in scss file
                });
            }
        }
    };
    $(window).scroll(move);
    move();
}
