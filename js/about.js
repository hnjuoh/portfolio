
$(function(){
    // 스크롤 유도 아이콘 설정 
    $(document).ready(function() {
        var scrollIndicator = $('.scroll-indicator');

        $(window).scroll(function() {
            var scrollPos = $(this).scrollTop();
            if (scrollPos > 80) { // 스크롤 위치에 따라 조절
                scrollIndicator.css('opacity', 0);
            } else {
                scrollIndicator.css('opacity', 1);
            }
        });
    });

    // 발전-성장-책임감에 마우스 올리면 아래 li들이 보여라.
    $(function(){

        $('.mybox3>li').mouseenter(function(){
            $(this).find('ul').stop().slideDown()
        })
    // IABox에서 마우스가 떠나면 li들이 사라져라.
        $('.IABox').mouseleave(function(){
            $('.mybox3>li').find('ul').stop().slideUp()
        })


    })



})