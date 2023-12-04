$(function(){
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



    })

    // box2 이미지 자동 전환
//     var slideIndex = 0;
//         showSlides();

//     function showSlides() {
//     let i;
//     const slides = document.getElementsByClassName("slide_img");
//     for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
// }
//     slideIndex++;
//     if (slideIndex > slides.length) { slideIndex = 1 }
//     slides[slideIndex - 1].style.display = "block";
//     setTimeout(showSlides, 3000); // 이미지 몇 초인지 설정
// }





})