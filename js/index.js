$(document).ready(function(){
    $('.red_dot').hover(function(){
        $(this).css('border-color', 'transparent').text('Click');
    }, function(){
        $(this).css('border-color', 'red').text('');
    });
});



// $(function(){
//     $('.red_dot').hover(function(){
//         console.log()
//         $(this).css('color','red').text('Click!');
//         $(this).css('color','red').text('');
//     })
// })


