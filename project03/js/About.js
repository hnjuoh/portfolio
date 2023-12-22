$(function(){
    // 마우스 스크롤 했을 때 스크롤 값
    $(window).scroll(function(){
        let sc = $(this).scrollTop()
        $('article').eq(0).css({'transform':'translateZ('+sc+'px)'})
        $('article').eq(1).css({'transform':'translateZ('+(-5000+sc)+'px)'})
        $('article').eq(2).css({'transform':'translateZ('+(-10000+sc)+'px)'})
        $('article').eq(3).css({'transform':'translateZ('+(-14000+sc)+'px)'})

    // 0 - 5000 eq(0)
        if (sc > 0 && sc <= 5000){
            $('article').removeClass('on')
            $('article').eq(0).addClass('on')
        }
    // 5000 - 10000 eq(1)
        if (sc > 5000 && sc <= 10000){
            $('article').removeClass('on')
            $('article').eq(1).addClass('on')
        }
    // 10000 - 14000 eq(2)
        if (sc > 10000 && sc <= 14000){
            $('article').removeClass('on')
            $('article').eq(2).addClass('on')
        }
    // 14000 - eq(3)
        if (sc >= 14000){
            $('article').removeClass('on')
            $('article').eq(3).addClass('on')
        }
    })

    





    
    
    
    
    // nav에 li를 클릭했을때 순번을 찾고
    // 각 순번에 맞는 article에게 class값을 더해라.
    $('nav li').click(function(){
        let i = $(this).index()
        console.log(i)

        $('html, body').stop().animate({'scrollTop':5000*i},1000)
        $('article').removeClass('on')
        $('article').eq(i).addClass('on')
    })





});
