var billyExist = false;
function moveScroller() {
    var move = function() {
        var s = $("nav");
        var navHeight = s.outerHeight();
        var st = $(window).scrollTop();
        var ot = $("#portfolio").offset().top - navHeight;
        
        if(st > ot) {
            s.css({
                position: "fixed",
                top: "0px"
            });
            $("#portfolio").css("margin-top", navHeight);
            // $("li.first").css("margin-left", "10px");
            if(!billyExist) {
                $("div.nav ul").prepend("<li class='title'>Billy Shih</li>");
                billyExist = true;
            }
        } else {
            if(st <= ot) {
                s.css({
                    position: "relative"
                });
                $("#portfolio").css("margin-top", 0);
                // $("li.first").css("margin-left", 0);
                if(billyExist) {
                    $("div.nav li.title").remove();
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
