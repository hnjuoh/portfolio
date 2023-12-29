$(function(){
    $(document).ready(function(){
        // 이미지 슬라이드쇼를 위한 변수 선언
        let currentSlide = 0;
        const slides = $(".slides li");
        const slidesCount = slides.length;

        // 첫 번째 슬라이드를 보여줌
        slides.eq(currentSlide).fadeIn();

        // 슬라이드 변경 함수
        function nextSlide() {
            slides.eq(currentSlide).fadeOut(1000); // 현재 슬라이드를 페이드 아웃
            currentSlide = (currentSlide + 1) % slidesCount; // 다음 슬라이드 인덱스 계산
            slides.eq(currentSlide).fadeIn(1000); // 다음 슬라이드를 페이드 인
        }

        // 3초마다 nextSlide 함수를 호출하여 이미지 변경
        setInterval(nextSlide, 2000);
    
    });









    // 공지사항 탭바
    
    //titleBox의 li 순번 찾기
    $('.titleBox li').click(function(){

    //클릭한 나 자신의 순번을 변수로 지정
    var i = $(this).index()
    
    //콘솔로 확인
    console.log(i)

    //찾아낸 순번을 listBox안의 div의 순서에 맞게 보이기
    $('.listBox>div').css({'display':'none'})
    $('.listBox>div').eq(i).css({'display':'block'})

    $('.titleBox li').removeClass('on')
    //클릭한 나 자신에게 클래스 'on' 값 더하기
    $(this).addClass('on')

    });







    $(function(){
        $( "#datepicker" ).datepicker();

        $('#reserve-button').click(function(e){
            e.preventDefault()
            let selectDate = $( "#datepicker" ).datepicker('getDate');
            let pep = $('#people').val()
            // 옵션 안에있는 셀렉트 중에 글씨 가져와라.
            let pname = $('#program_name option:selected').text()
            let selectMon = selectDate.getMonth()
            let selectday = selectDate.getDate()


            // 예약안내 팝업
            $('.fixed article li').eq(0).find('span').text((selectMon+1)+'월' + selectday + '일')
            $('.fixed article li').eq(1).find('span').text(pep + '명')
            $('.fixed article li').eq(2).find('span').text(pname);

            $('.fixed').addClass('on')
            $('body').addClass('fix')
        });

        $('.fixed article p').click(function(){
            $('.fixed').removeClass('on')
            $('body').removeClass('fix')
        })


    });











})