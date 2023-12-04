// 제이쿼리방식으로 시작할지 
// 라이브러리를 사용하지않고 사용할지를 결정하세요


$(function(){
// 높이값을 찾아서 hero와 header에 적용한다.
    let ht = $(window).height();

    let hht = $('header').height()
    $('.headerTop').height(ht)
    
    // hero의 높이가 부정확하여 기본높이에서 header의 높이는 뺀값으로 재설정하다.
    $('.hero').height(ht-hht) 



    // 스크롤의 위치를 찾아서 설정해야하는값

    $(window).scroll(function(){
        // 동영상의 시작점의 브라우저 처음에서 떨어져있는 위치값 찾기
        let weare = $('.weare').offset().top
        // 스크롤의 위치값찾기
        var sc = $(this).scrollTop();
        // 소수점을 뺀 자연수찾기
        let num = Math.floor( (sc-weare))

        console.log(num)
        // 스크롤값이 0일때 hero의 텍스트가 보이게 설정 아닐경우 안보이게 재설정
        if(sc==0){
            $('.hero p').stop().animate({'left':'400px'},800)
        }
        else{
            $('.hero p').stop().animate({'left':'-800px'},800)
        }

        // 동영상 내부의 초콜릿위치변경
        if(sc>=weare){
            $('.weare .vid .vid_img1').css({'bottom':10+num})
            $('.weare .vid .vid_img2').css({'top':10+num})
        }
    })






    // 허쉬 할아버지 사진 설정
    $(window).scroll(function(){
        let milt = $('.milt').offset().top
        // 스크롤 위치값 찾기
        var sc2 = $(this).scrollTop();
        // 소수점을 뺀 자연수 찾기
        let num2 = Math.floor((sc2-milt))
        console.log(num2)

        // 스크롤 값이 0일때 
        if(sc2==0){
            $('.milt_inner1').stop().animate({'left':'-400px'},800)
        }
        else{
            $('.milt_inner1').stop().animate({'left':'400px'},800)
        }
        console.log("Scroll: " + sc2 + ", milt Position: " + milt);

    })

// ############################ 밀튼허쉬 ########################
    // 허쉬 하트 아이콘 설정
    $(window).scroll(function(){
        let milt = $('.milt').offset().top
        // 스크롤 위치값 찾기
        var sc2 = $(this).scrollTop();
        // 소수점을 뺀 자연수 찾기
        let num2 = Math.floor((sc2-milt))
        console.log(num2)

        // 스크롤 값이 0일때 
        if(sc2==0){
            $('.milt_inner2 .milt_titIcon').stop().animate({'right':'-50%'},800)
        }
        else{
            $('.milt_inner2 .milt_titIcon').stop().animate({'right':'39%'},800)
        }
        console.log("Scroll: " + sc2 + ", milt Position: " + milt);

    })


    // 텍스트 설정 밀튼허쉬
    $(window).scroll(function(){
        let milt = $('.milt').offset().top
        // 스크롤 위치값 찾기
        var sc2 = $(this).scrollTop();
        // 소수점을 뺀 자연수 찾기
        let num2 = Math.floor((sc2-milt))
        console.log(num2)

        // 스크롤 값이 0일때 
        if(sc2==0){
            $('.milt_inner2 h2').stop().animate({'right':'-39%'},800)
        }
        else{
            $('.milt_inner2 h2').stop().animate({'right':'25%'},800)
        }
        console.log("Scroll: " + sc2 + ", milt Position: " + milt);

    })

    // 밀튼 허쉬 글 (p)
    $(window).scroll(function(){
        let milt = $('.milt').offset().top
        // 스크롤 위치값 찾기
        var sc2 = $(this).scrollTop();
        // 소수점을 뺀 자연수 찾기
        let num2 = Math.floor((sc2-milt))
        console.log(num2)

        // 스크롤 값이 0일때 
        if(sc2==0){
            $('.milt_inner2 p').stop().animate({'right':'-23%'},800)
        }
        else{
            $('.milt_inner2 p').stop().animate({'right':'23%'},800)
        }
        console.log("Scroll: " + sc2 + ", milt Position: " + milt);

    })


    // 마우스 커서 따라다니는 허쉬 민트초콜릿

    $(document).ready(function() {
        $(document).on('mousemove', function(e) {
            $('.custom-cursor').css({
            left: e.clientX - 15, // 15는 커서 이미지의 가로 중심을 잡기 위한 값
            top: e.clientY - 15 // 15는 커서 이미지의 세로 중심을 잡기 위한 값
            });
        });
    });









})