// 컨셉뷰 클릭 시 팝업창
// 팝업창 클로즈


$(function(){
    // 대전선사박물관 컨셉뷰
    // section -> PJ -> concept 버튼을 클릭.
    $('section .dsbPJ .concept').click(function () {
        // 팝업창이 뜬다
        $('.pop1 .concept').animate({ scrollTop: 0 }, 0.1)
        $('.pop1').fadeIn()
        window.addEventListener("wheel", function (e) {
                e.preventDefault();
        }, { passive: true});
    })
    // close 버튼을 클릭하면 팝업창 닫힘.
    $('.pop1 .close').click(function () {
        $(this).parent().fadeOut()
    })




    // 허쉬초콜릿 컨셉뷰
    $('section .hsPJ .concept').click(function () {
        $('.pop2 .concept').animate({ scrollTop: 0 }, 0.1)
        $('.pop2').fadeIn()
        window.addEventListener("wheel", function (e) {
                e.preventDefault();
        }, { passive: true});
    })

    $('.pop2 .close').click(function () {
        $(this).parent().fadeOut()
    })


    
    
    // 이준혁 컨셉뷰
    $('section .ljhPJ .concept').click(function () {
        $('.pop3 .concept').animate({ scrollTop: 0 }, 0.1)
        $('.pop3').fadeIn()
        window.addEventListener("wheel", function (e) {
                e.preventDefault();
        }, { passive: true});
    })

    $('.pop3 .close').click(function () {
        $(this).parent().fadeOut()
    })


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
    




})