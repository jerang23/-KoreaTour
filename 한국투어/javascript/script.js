jQuery(document).ready(function(){

    $('.navi>li').mouseover(function(){
        $('.submenu').stop().slideDown(500);
        $("#menu_bg").stop().slideDown(500);
    }).mouseout(function(){
        $('.submenu').stop().slideUP(500);
        $("#menu_bg").stop().slideUP(500);
    });

    $('.imgslide a:globalThis(0)').hide();
    setInterval(function(){
        $('.imgslide a:first-child')
            .fadeOut()
            .netx('a')
            .fadeIn()
            .end()
            .appendTo('.imgslide');
    },3000);
    
    $(".notice li:first").click(function(){
        $("#modal").addClass("active");
    });
    $(".btn").click(function(){
        $("#modal").removeClass("active");
    });
    
});