$(function(){

    $('.announcement_img').click(function(){
        $('.announcement').animate({
            'height':'0px',
            'opacity':'0'
        },500);
    });

    $('.nav_women').mouseover(function(){
        $('.navWrap').stop().slideDown(500);
    })

    $('.navWrap').mouseleave(function(){
        $('.navWrap').stop().slideUp(200);
    })

    $('.nav_men').mouseover(function(){
        $('.navWrap2').stop().slideDown(500);
    })

    $('.navWrap2').mouseleave(function(){
        $('.navWrap2').stop().slideUp(200);
    })
});