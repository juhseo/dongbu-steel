//sec03 텍스트 무빙
$(document).ready(function(){
    $(window).on('scroll',function(){
        let scrollT = $(this).scrollTop();
        let divTop = $('.pos_box02').offset().top;
        if(scrollT>divTop - 990){
            $('.pos_box02').addClass('on');
        }else{
            $('.pos_box02').removeClass('on');
        }
    })
})

