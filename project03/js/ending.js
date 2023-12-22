
$(function(){

    // 스크롤했을때, 스크롤 값을 받아옴
    $(window).scroll(function(){
        let sc = $(this).scrollTop()
        console.log(sc)
        // endBox에 div박스의 css를 바꾸겠다.
        // 스크롤 올릴 시, 텍스트들이 위로 올라간다. 마이너스 sc (스크롤값)
        $('.endBox div').css({'top':-sc})

        
    });
    









});
