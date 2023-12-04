// 서브페이지 제이쿼리!!!



// 마우스 커서 따라다니는 허쉬 민트초콜릿

$(document).ready(function() {
    $(document).on('mousemove', function(e) {
        $('.custom-cursor').css({
        left: e.clientX - 15, // 15는 커서 이미지의 가로 중심을 잡기 위한 값
        top: e.clientY - 15 // 15는 커서 이미지의 세로 중심을 잡기 위한 값
        });
    });
});