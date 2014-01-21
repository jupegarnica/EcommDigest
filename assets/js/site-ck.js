/* Scroll automatico para cambiar de seccion */
// $(document).ready(function() {
//    document.body.style.overflow = 'hidden'; //scroll descativado
//     var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel" //FF doesn't recognize mousewheel as of FF3.x
//     $('body').bind(mousewheelevt, function(e) {
//         var evt = window.event || e //equalize event object     
//         evt = evt.originalEvent ? evt.originalEvent : evt; //convert to originalEvent if possible               
//         var delta = evt.detail ? evt.detail * (-40) : evt.wheelDelta //check for detail first, because it is used by Opera and FF
//         if(delta > 0) {
//             //scroll UP
//             scrollingUp();
//         } else {
//             //scroll down
//             scrollingDown();
//         }
//     });
// });
// var scroll = 0;

// function scrollingUp() {
//     scroll += 1;
//     previusSecction(scroll);
//     console.log(scroll);
// }

// function scrollingDown() {
//     scroll -= 1;
//     nextSecction(scroll);
//     console.log(scroll);
// }

// function previusSecction(n) {
//     setTimeout(function() {
//         if(n === scroll) {
//             console.log('toPreviusSection -->');
//             $("html,body").animate({
//                 scrollTop: $('#chat').offset().top
//             }, 1e3)
//         }
//     }, 100);
// }

// function nextSecction(n) {
//     setTimeout(function() {
//         if(n === scroll) {
//             console.log('toPreviusSection -->');
//             $("html,body").animate({
//                 scrollTop: $('#app').offset().top
//             }, 1e3)
//         }
//     }, 100);
// }
jQuery(document).ready(function() {
    $("#hero").height($(window).height());
    $(window).resize(function() {
        $("#hero").height($(window).height());
        $("#hero").css("min-height", "360px");
    });
//     $("#app").height($(window).height());
//     $(window).resize(function() {
//         $("#app").height($(window).height());
//         $("#app").css("min-height","360px");
//     });
//     $("#networks").height($(window).height());
//     $(window).resize(function() {
//         $("#networks").height($(window).height());
//         $("#networks").css("min-height", "360px");
//     });
});
jQuery(document).ready(function(e) {
    e(".scroll").click(function(t) {
        t.preventDefault();
        e("html,body").animate({
            scrollTop: e(this.hash).offset().top
        }, 1e3)
        console.log(this.hash);
    })
});