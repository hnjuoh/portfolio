// 서브페이지 제이쿼리


$(function(){
    // up_Box 의 img를 클릭했을때,
    // right_nav 안에 있는 span의 숫자가 올라가라.


    // 상단 초콜릿 제품들 클릭 시 장바구니 숫자가 증가.
    let i = 0;
    $('.up_Box').find('.img').click(function(e){
        e.preventDefault()
        i++;
        console.log(i);

        // 장바구니 숫자 증가 출력
        $('.right_nav').find('span').text(i);

        // '나' 클릭
        let txt = $(this).find('a').html()
        console.log(txt)

        // 팝업창
        // alert(txt)

        $('.shop').find('span').text(i)
        $('.shop section').find('div').append(txt)

    });
    // 끝.



    // 하단 초콜릿 제품 클릭 시 장바구니 숫자가 증가.
    let v = 0;
    $('.down_Box').find('.img').click(function(e){
        e.preventDefault()
        i++;
        console.log(i);

        // 장바구니 숫자 증가 출력
        $('.right_nav').find('span').text(i);

        // '나' 클릭
        let txt = $(this).find('a').html()
        console.log(txt)

        // 팝업창
        // alert(txt)

        $('.shop').find('span').text(i)
        $('.shop section').find('div').append(txt)
    });
    // 끝.




    // 제품 리스트 / 장바구니

    // right_nav에 있는 li 중에 두번째 클릭했을때, shop이 보여라. (장바구니 클릭 시, 제품 리스트 보이게 함)
    $('.right_nav li').eq(1).click(function(){
        $('.shop').css({'display':'block'})
    });

    // reset(되돌아가기 버튼)을 클릭했을때 shop이 사라져라.
    $('.reset').click(function(){
        $('.shop').css({'display':'none'})
    });


    // empty를 클릭했을때 shop section div 내용을 지워라. (장바구니 비우기)
    // shop의 span의 변수값을 0으로 바꿔라.
    $('.empty').click(function(){
        i = 0;
        $('.shop').find('span').text(i)
        $('.right_nav li').find('span').text(i)
        $('.shop section').find('div').empty()
    })

    // 끝.







})